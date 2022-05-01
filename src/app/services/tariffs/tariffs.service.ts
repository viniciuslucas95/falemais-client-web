import { CreateTariffDto } from "../../dto/tariffs/create-tariff.dto";
import { GetTariffDto } from "../../dto/tariffs/get-tariff.dto";
import { TariffsRepository } from "../../repositories/tariffs/tariffs.repository";
import { Service } from "../service.service";

export interface TariffsService extends Service<GetTariffDto, CreateTariffDto, TariffsRepository> { }