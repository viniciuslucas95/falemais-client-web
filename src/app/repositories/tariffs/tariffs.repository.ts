import { GetTariffDto } from "../../dto/get-tariff.dto";
import { Repository } from "../repository";

export interface TariffsRepository extends Repository<GetTariffDto> { }