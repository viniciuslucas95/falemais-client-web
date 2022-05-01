import { CreationReturnDto } from "../dto/common/creation-return.dto"
import { Repository } from "../repositories/repository.repository"

export interface Service<F, C, R extends Repository<F, C>> {
    repository: R
    find(): Promise<F[]>
    delete(id: number): Promise<void>
    create(dto: C): Promise<CreationReturnDto>
}