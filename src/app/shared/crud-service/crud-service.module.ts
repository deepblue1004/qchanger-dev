import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DataCreate } from './_create'
import { DataDelete } from './_delete'
import { DataRetrieve } from './_retrieve'
import { DataUpdate } from './_update'
import { CrudDataService } from './crud-data.service'

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [CrudDataService, DataCreate, DataRetrieve, DataUpdate, DataDelete]
})
export class CrudServiceModule {}
