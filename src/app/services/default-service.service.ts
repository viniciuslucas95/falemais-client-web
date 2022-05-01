import { CreationReturnDto } from "../dto/common/creation-return.dto"
import { Repository } from "../repositories/repository.repository"
import { Service } from "./service.service"

export class DefaultService<F, C, R extends Repository<F, C>> implements Service<F, C, R>{
    constructor(public repository: R) { }

    async find(): Promise<F[]> {
        return this.repository.find()
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id)
    }

    async create(dto: C): Promise<CreationReturnDto> {
        return this.repository.create(dto)
    }
}