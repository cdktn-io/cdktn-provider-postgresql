/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/publication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PublicationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Sets the tables list to publish to ALL tables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/publication#all_tables Publication#all_tables}
  */
  readonly allTables?: boolean | cdktn.IResolvable;
  /**
  * Sets the database to add the publication for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/publication#database Publication#database}
  */
  readonly database?: string;
  /**
  * When true, will also drop all the objects that depend on the publication, and in turn all objects that depend on those objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/publication#drop_cascade Publication#drop_cascade}
  */
  readonly dropCascade?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/publication#id Publication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/publication#name Publication#name}
  */
  readonly name: string;
  /**
  * Sets the owner of the publication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/publication#owner Publication#owner}
  */
  readonly owner?: string;
  /**
  * Sets which DML operations will be published
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/publication#publish_param Publication#publish_param}
  */
  readonly publishParam?: string[];
  /**
  * Sets whether changes in a partitioned table using the identity and schema of the partitioned table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/publication#publish_via_partition_root_param Publication#publish_via_partition_root_param}
  */
  readonly publishViaPartitionRootParam?: boolean | cdktn.IResolvable;
  /**
  * Sets the tables list to publish
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/publication#tables Publication#tables}
  */
  readonly tables?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/publication postgresql_publication}
*/
export class Publication extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "postgresql_publication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Publication resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Publication to import
  * @param importFromId The id of the existing Publication that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/publication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Publication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "postgresql_publication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/publication postgresql_publication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PublicationConfig
  */
  public constructor(scope: Construct, id: string, config: PublicationConfig) {
    super(scope, id, {
      terraformResourceType: 'postgresql_publication',
      terraformGeneratorMetadata: {
        providerName: 'postgresql',
        providerVersion: '1.26.0',
        providerVersionConstraint: '~> 1.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allTables = config.allTables;
    this._database = config.database;
    this._dropCascade = config.dropCascade;
    this._id = config.id;
    this._name = config.name;
    this._owner = config.owner;
    this._publishParam = config.publishParam;
    this._publishViaPartitionRootParam = config.publishViaPartitionRootParam;
    this._tables = config.tables;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_tables - computed: true, optional: true, required: false
  private _allTables?: boolean | cdktn.IResolvable; 
  public get allTables() {
    return this.getBooleanAttribute('all_tables');
  }
  public set allTables(value: boolean | cdktn.IResolvable) {
    this._allTables = value;
  }
  public resetAllTables() {
    this._allTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allTablesInput() {
    return this._allTables;
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // drop_cascade - computed: false, optional: true, required: false
  private _dropCascade?: boolean | cdktn.IResolvable; 
  public get dropCascade() {
    return this.getBooleanAttribute('drop_cascade');
  }
  public set dropCascade(value: boolean | cdktn.IResolvable) {
    this._dropCascade = value;
  }
  public resetDropCascade() {
    this._dropCascade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCascadeInput() {
    return this._dropCascade;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // publish_param - computed: true, optional: true, required: false
  private _publishParam?: string[]; 
  public get publishParam() {
    return this.getListAttribute('publish_param');
  }
  public set publishParam(value: string[]) {
    this._publishParam = value;
  }
  public resetPublishParam() {
    this._publishParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishParamInput() {
    return this._publishParam;
  }

  // publish_via_partition_root_param - computed: false, optional: true, required: false
  private _publishViaPartitionRootParam?: boolean | cdktn.IResolvable; 
  public get publishViaPartitionRootParam() {
    return this.getBooleanAttribute('publish_via_partition_root_param');
  }
  public set publishViaPartitionRootParam(value: boolean | cdktn.IResolvable) {
    this._publishViaPartitionRootParam = value;
  }
  public resetPublishViaPartitionRootParam() {
    this._publishViaPartitionRootParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishViaPartitionRootParamInput() {
    return this._publishViaPartitionRootParam;
  }

  // tables - computed: true, optional: true, required: false
  private _tables?: string[]; 
  public get tables() {
    return cdktn.Fn.tolist(this.getListAttribute('tables'));
  }
  public set tables(value: string[]) {
    this._tables = value;
  }
  public resetTables() {
    this._tables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all_tables: cdktn.booleanToTerraform(this._allTables),
      database: cdktn.stringToTerraform(this._database),
      drop_cascade: cdktn.booleanToTerraform(this._dropCascade),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      owner: cdktn.stringToTerraform(this._owner),
      publish_param: cdktn.listMapper(cdktn.stringToTerraform, false)(this._publishParam),
      publish_via_partition_root_param: cdktn.booleanToTerraform(this._publishViaPartitionRootParam),
      tables: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tables),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_tables: {
        value: cdktn.booleanToHclTerraform(this._allTables),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      database: {
        value: cdktn.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop_cascade: {
        value: cdktn.booleanToHclTerraform(this._dropCascade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktn.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publish_param: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._publishParam),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      publish_via_partition_root_param: {
        value: cdktn.booleanToHclTerraform(this._publishViaPartitionRootParam),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tables: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tables),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
