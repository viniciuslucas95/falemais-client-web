import { CreateTariffDto } from "../../dto/tariffs/create-tariff.dto";
import { GetTariffDto } from "../../dto/tariffs/get-tariff.dto";
import { Repository } from "../repository.repository";

export interface TariffsRepository extends Repository<GetTariffDto, CreateTariffDto> { }