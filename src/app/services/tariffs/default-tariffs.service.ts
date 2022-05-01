import { CreateTariffDto } from "../../dto/tariffs/create-tariff.dto";
import { GetTariffDto } from "../../dto/tariffs/get-tariff.dto";
import { TariffsRepository } from "../../repositories/tariffs/tariffs.repository";
import { DefaultService } from "../default-service.service";
import { TariffsService } from "./tariffs.service";

export class DefaultTariffsService extends DefaultService<GetTariffDto, CreateTariffDto, TariffsRepository> implements TariffsService { }