/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface FunctionResourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Body of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/function#body FunctionResource#body}
  */
  readonly body: string;
  /**
  * The database where the function is located. If not specified, the provider default database is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/function#database FunctionResource#database}
  */
  readonly database?: string;
  /**
  * Automatically drop objects that depend on the function (such as operators or triggers), and in turn all objects that depend on those objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/function#drop_cascade FunctionResource#drop_cascade}
  */
  readonly dropCascade?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/function#id FunctionResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Language of the function. One of: internal, sql, c, plpgsql
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/function#language FunctionResource#language}
  */
  readonly language?: string;
  /**
  * Name of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/function#name FunctionResource#name}
  */
  readonly name: string;
  /**
  * If the function can be executed in parallel for a single query execution. One of: UNSAFE, RESTRICTED, SAFE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/function#parallel FunctionResource#parallel}
  */
  readonly parallel?: string;
  /**
  * Function return type. If not specified, it will be calculated based on the output arguments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/function#returns FunctionResource#returns}
  */
  readonly returns?: string;
  /**
  * Schema where the function is located. If not specified, the provider default schema is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/function#schema FunctionResource#schema}
  */
  readonly schema?: string;
  /**
  * If the function should execute with the permissions of the function owner instead of the permissions of the caller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/function#security_definer FunctionResource#security_definer}
  */
  readonly securityDefiner?: boolean | cdktn.IResolvable;
  /**
  * If the function should always return NULL if any of it's inputs is NULL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/function#strict FunctionResource#strict}
  */
  readonly strict?: boolean | cdktn.IResolvable;
  /**
  * Volatility of the function. One of: VOLATILE, STABLE, IMMUTABLE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/function#volatility FunctionResource#volatility}
  */
  readonly volatility?: string;
  /**
  * arg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/function#arg FunctionResource#arg}
  */
  readonly arg?: FunctionResourceArg[] | cdktn.IResolvable;
}
export interface FunctionResourceArg {
  /**
  * An expression to be used as default value if the parameter is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/function#default FunctionResource#default}
  */
  readonly default?: string;
  /**
  * The argument mode. One of: IN, OUT, INOUT, or VARIADIC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/function#mode FunctionResource#mode}
  */
  readonly mode?: string;
  /**
  * The argument name. The name may be required for some languages or depending on the argument mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/function#name FunctionResource#name}
  */
  readonly name?: string;
  /**
  * The argument type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/function#type FunctionResource#type}
  */
  readonly type: string;
}

export function functionResourceArgToTerraform(struct?: FunctionResourceArg | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktn.stringToTerraform(struct!.default),
    mode: cdktn.stringToTerraform(struct!.mode),
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function functionResourceArgToHclTerraform(struct?: FunctionResourceArg | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktn.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionResourceArgOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FunctionResourceArg | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionResourceArg | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._mode = value.mode;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class FunctionResourceArgList extends cdktn.ComplexList {
  public internalValue? : FunctionResourceArg[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FunctionResourceArgOutputReference {
    return new FunctionResourceArgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/function postgresql_function}
*/
export class FunctionResource extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "postgresql_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a FunctionResource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FunctionResource to import
  * @param importFromId The id of the existing FunctionResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FunctionResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "postgresql_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/function postgresql_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FunctionResourceConfig
  */
  public constructor(scope: Construct, id: string, config: FunctionResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'postgresql_function',
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
    this._body = config.body;
    this._database = config.database;
    this._dropCascade = config.dropCascade;
    this._id = config.id;
    this._language = config.language;
    this._name = config.name;
    this._parallel = config.parallel;
    this._returns = config.returns;
    this._schema = config.schema;
    this._securityDefiner = config.securityDefiner;
    this._strict = config.strict;
    this._volatility = config.volatility;
    this._arg.internalValue = config.arg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: false, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
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

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
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

  // parallel - computed: false, optional: true, required: false
  private _parallel?: string; 
  public get parallel() {
    return this.getStringAttribute('parallel');
  }
  public set parallel(value: string) {
    this._parallel = value;
  }
  public resetParallel() {
    this._parallel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelInput() {
    return this._parallel;
  }

  // returns - computed: true, optional: true, required: false
  private _returns?: string; 
  public get returns() {
    return this.getStringAttribute('returns');
  }
  public set returns(value: string) {
    this._returns = value;
  }
  public resetReturns() {
    this._returns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnsInput() {
    return this._returns;
  }

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // security_definer - computed: false, optional: true, required: false
  private _securityDefiner?: boolean | cdktn.IResolvable; 
  public get securityDefiner() {
    return this.getBooleanAttribute('security_definer');
  }
  public set securityDefiner(value: boolean | cdktn.IResolvable) {
    this._securityDefiner = value;
  }
  public resetSecurityDefiner() {
    this._securityDefiner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityDefinerInput() {
    return this._securityDefiner;
  }

  // strict - computed: false, optional: true, required: false
  private _strict?: boolean | cdktn.IResolvable; 
  public get strict() {
    return this.getBooleanAttribute('strict');
  }
  public set strict(value: boolean | cdktn.IResolvable) {
    this._strict = value;
  }
  public resetStrict() {
    this._strict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictInput() {
    return this._strict;
  }

  // volatility - computed: false, optional: true, required: false
  private _volatility?: string; 
  public get volatility() {
    return this.getStringAttribute('volatility');
  }
  public set volatility(value: string) {
    this._volatility = value;
  }
  public resetVolatility() {
    this._volatility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volatilityInput() {
    return this._volatility;
  }

  // arg - computed: false, optional: true, required: false
  private _arg = new FunctionResourceArgList(this, "arg", false);
  public get arg() {
    return this._arg;
  }
  public putArg(value: FunctionResourceArg[] | cdktn.IResolvable) {
    this._arg.internalValue = value;
  }
  public resetArg() {
    this._arg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argInput() {
    return this._arg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      body: cdktn.stringToTerraform(this._body),
      database: cdktn.stringToTerraform(this._database),
      drop_cascade: cdktn.booleanToTerraform(this._dropCascade),
      id: cdktn.stringToTerraform(this._id),
      language: cdktn.stringToTerraform(this._language),
      name: cdktn.stringToTerraform(this._name),
      parallel: cdktn.stringToTerraform(this._parallel),
      returns: cdktn.stringToTerraform(this._returns),
      schema: cdktn.stringToTerraform(this._schema),
      security_definer: cdktn.booleanToTerraform(this._securityDefiner),
      strict: cdktn.booleanToTerraform(this._strict),
      volatility: cdktn.stringToTerraform(this._volatility),
      arg: cdktn.listMapper(functionResourceArgToTerraform, true)(this._arg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      body: {
        value: cdktn.stringToHclTerraform(this._body),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      language: {
        value: cdktn.stringToHclTerraform(this._language),
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
      parallel: {
        value: cdktn.stringToHclTerraform(this._parallel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      returns: {
        value: cdktn.stringToHclTerraform(this._returns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: cdktn.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_definer: {
        value: cdktn.booleanToHclTerraform(this._securityDefiner),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      strict: {
        value: cdktn.booleanToHclTerraform(this._strict),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      volatility: {
        value: cdktn.stringToHclTerraform(this._volatility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arg: {
        value: cdktn.listMapperHcl(functionResourceArgToHclTerraform, true)(this._arg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionResourceArgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
