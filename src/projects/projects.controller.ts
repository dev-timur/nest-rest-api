import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Redirect, Req, Res, UseGuards } from '@nestjs/common';
import { AppAuthGuard } from 'src/auth/jwt-auth.guard';
import { ProjectsService } from './projects.service';

@Controller('/projects')
export class ProjectsController {

    constructor( private  service: ProjectsService){

    }
    @UseGuards(AppAuthGuard)
    @Get()
    getHello(): string {
      return this.service.getHello()
    }
    // @UseGuards(AppAuthGuard)
    @Get('/getAllProjects')
    async getAllProjects() {
      return await this.service.getAllProjects();
    }
  
    @Post('/createProject')
    async createProject(@Body() body) { 
        return await this.service.createProject(body);
    }

    @Post('/getDeskById')
    async getDeskById(@Body() body) { 
        return await this.service.getDeskById(body);
    }
    
    // @Post('/updateDomain')
    // async updateDomain(@UserID() userID: string, @Body() body) {
    //   return await this.checkAccess(userID, 'update') &&
    //     await this.service.updateDomain(body);
    // }
  
    // @Post('/deleteDomain')
    // async deleteDomain(@UserID() userID: string, @Body() body) {
    //   return await this.checkAccess(userID, 'delete') &&
    //     await this.service.deleteDomain(body);
    // }


    // @Get()
    //     getAll(){
    //     return this.productsService.getAll()
    // }


    // @Get(':id')
    //     getOne(@Param('id') id: string): string{
    //         return this.productsService.getById(id)
    //     }

    // @Post()
    // @HttpCode(HttpStatus.CREATED)
    // @Header('Cache-control', 'none')
    // create(@Body() createProductDto: CreateProductDto ) {
    //     return this.productsService.create(createProductDto);
        
    // }

    // @Delete('id')
    //     remove(@Param('id')id: string) {
    //         return 'Remove' + id;
    
    // }

    // @Put()
    //     update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string ){
    //         return 'Update' + id

    // }
}

