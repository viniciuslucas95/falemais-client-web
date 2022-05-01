import { CreationReturnDto } from "../dto/common/creation-return.dto"

export interface Repository<F, C> {
    baseUrl: string
    find(): Promise<F[]>
    delete(id: number): Promise<void>
    create(dto: C): Promise<CreationReturnDto>
}