import { GetTariffDto } from "../../dto/get-tariff.dto";
import { TariffsRepository } from "../../repositories/tariffs/tariffs.repository";
import { TariffsService } from "./tariffs.service";

export class DefaultTariffsService implements TariffsService {
    constructor(public repository: TariffsRepository) { }

    async find(): Promise<GetTariffDto[]> {
        return this.repository.find()
    }
}