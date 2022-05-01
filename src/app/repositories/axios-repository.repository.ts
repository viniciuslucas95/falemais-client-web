import axios from 'axios'
import { CreationReturnDto } from '../dto/common/creation-return.dto'
import { Repository } from './repository.repository'

export class AxiosRepository<F, C> implements Repository<F, C>{
    constructor(public baseUrl: string) {

    }

    async find(): Promise<F[]> {
        const results = await axios.get<F[]>(this.baseUrl)

        return results.data
    }

    async delete(id: number): Promise<void> {
        await axios.delete(`${this.baseUrl}/${id}`)
    }

    async create(dto: C): Promise<CreationReturnDto> {
        const results = await axios.post<CreationReturnDto>(this.baseUrl, dto)

        return results.data
    }
}