import { GetTariffDto } from "../../dto/get-tariff.dto";
import { TariffsRepository } from "./tariffs.repository";
import axios from 'axios'

export class AxiosTariffsRepository implements TariffsRepository {
    constructor(public baseUrl: string) { }

    async find(): Promise<GetTariffDto[]> {
        return await axios.get(this.baseUrl)
    }
}