import { GetTariffDto } from "../../dto/get-tariff.dto";
import { TariffsRepository } from "../../repositories/tariffs/tariffs.repository";

export interface TariffsService {
    repository: TariffsRepository
    find(): Promise<GetTariffDto[]>
}