import { useEffect } from "react"
import { BigNumber, BigNumberish, ethers, Signer, utils } from "ethers"

import { SignerOrProvider, useContract } from "./useContract"
import { IERC20 } from "../types/IERC20"
import abi from "../abi/ERC20.json"

type TransferWithAllowance = (spender: string, amount: BigNumberish) => Promise<void>

export const useERC20 = (addressOrName: string, signerOrProvider?: SignerOrProvider) => {
    const contract = useContract<IERC20 & {transferWithAllowance: TransferWithAllowance}>(addressOrName, abi, signerOrProvider)
    useEffect(() => {
        if (contract) {
            contract.transferWithAllowance = async function(to: string, amount: BigNumberish) {
                if (!(signerOrProvider instanceof Signer)) {
                    throw Error('Not a signer')
                }
                try {
                    const address = await signerOrProvider.getAddress()
                    const allowance = await this.allowance(address, to)
                    const _amount = BigNumber.from(utils.parseEther(`${amount}`))
                    const toApprove = _amount.sub(allowance)
                    if (toApprove.isNegative() || toApprove.isZero()) {
                        await this.transfer(to, _amount.toBigInt())
                    } else {
                        await this.approve(to, toApprove.toBigInt())
                        this.on(this.filters["Approval(address,address,uint256)"](address, to), async () => {
                            await this.transfer(to, _amount.toBigInt())
                        })
                    }
                } catch(e) {
                    console.error(e)
                }
            }
        }
    }, [contract])

    return contract
}
