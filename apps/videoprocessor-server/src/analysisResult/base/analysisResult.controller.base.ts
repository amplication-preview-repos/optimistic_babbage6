/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AnalysisResultService } from "../analysisResult.service";
import { AnalysisResultCreateInput } from "./AnalysisResultCreateInput";
import { AnalysisResult } from "./AnalysisResult";
import { AnalysisResultFindManyArgs } from "./AnalysisResultFindManyArgs";
import { AnalysisResultWhereUniqueInput } from "./AnalysisResultWhereUniqueInput";
import { AnalysisResultUpdateInput } from "./AnalysisResultUpdateInput";

export class AnalysisResultControllerBase {
  constructor(protected readonly service: AnalysisResultService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AnalysisResult })
  async createAnalysisResult(
    @common.Body() data: AnalysisResultCreateInput
  ): Promise<AnalysisResult> {
    return await this.service.createAnalysisResult({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AnalysisResult] })
  @ApiNestedQuery(AnalysisResultFindManyArgs)
  async analysisResults(
    @common.Req() request: Request
  ): Promise<AnalysisResult[]> {
    const args = plainToClass(AnalysisResultFindManyArgs, request.query);
    return this.service.analysisResults({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AnalysisResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async analysisResult(
    @common.Param() params: AnalysisResultWhereUniqueInput
  ): Promise<AnalysisResult | null> {
    const result = await this.service.analysisResult({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: AnalysisResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAnalysisResult(
    @common.Param() params: AnalysisResultWhereUniqueInput,
    @common.Body() data: AnalysisResultUpdateInput
  ): Promise<AnalysisResult | null> {
    try {
      return await this.service.updateAnalysisResult({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: AnalysisResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAnalysisResult(
    @common.Param() params: AnalysisResultWhereUniqueInput
  ): Promise<AnalysisResult | null> {
    try {
      return await this.service.deleteAnalysisResult({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
