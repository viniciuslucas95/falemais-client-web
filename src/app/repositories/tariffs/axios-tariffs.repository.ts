import { CreateTariffDto } from "../../dto/tariffs/create-tariff.dto";
import { GetTariffDto } from "../../dto/tariffs/get-tariff.dto";
import { AxiosRepository } from "../axios-repository.repository";
import { TariffsRepository } from "./tariffs.repository";

export class AxiosTariffsRepository extends AxiosRepository<GetTariffDto, CreateTariffDto> implements TariffsRepository { }