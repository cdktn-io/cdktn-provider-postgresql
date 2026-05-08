# `schema` Submodule <a name="`schema` Submodule" id="@cdktn/provider-postgresql.schema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Schema <a name="Schema" id="@cdktn/provider-postgresql.schema.Schema"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema postgresql_schema}.

#### Initializers <a name="Initializers" id="@cdktn/provider-postgresql.schema.Schema.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Postgresql;

new Schema(Construct Scope, string Id, SchemaConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-postgresql.schema.SchemaConfig">SchemaConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-postgresql.schema.Schema.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-postgresql.schema.Schema.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-postgresql.schema.Schema.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-postgresql.schema.SchemaConfig">SchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.putPolicy">PutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.resetDropCascade">ResetDropCascade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.resetIfNotExists">ResetIfNotExists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.resetPolicy">ResetPolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-postgresql.schema.Schema.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-postgresql.schema.Schema.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-postgresql.schema.Schema.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-postgresql.schema.Schema.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-postgresql.schema.Schema.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-postgresql.schema.Schema.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-postgresql.schema.Schema.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-postgresql.schema.Schema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-postgresql.schema.Schema.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-postgresql.schema.Schema.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-postgresql.schema.Schema.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-postgresql.schema.Schema.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-postgresql.schema.Schema.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-postgresql.schema.Schema.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-postgresql.schema.Schema.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.schema.Schema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-postgresql.schema.Schema.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.schema.Schema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-postgresql.schema.Schema.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.schema.Schema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-postgresql.schema.Schema.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.schema.Schema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-postgresql.schema.Schema.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.schema.Schema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-postgresql.schema.Schema.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.schema.Schema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-postgresql.schema.Schema.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.schema.Schema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-postgresql.schema.Schema.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.schema.Schema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-postgresql.schema.Schema.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.schema.Schema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-postgresql.schema.Schema.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-postgresql.schema.Schema.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-postgresql.schema.Schema.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-postgresql.schema.Schema.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-postgresql.schema.Schema.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.schema.Schema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-postgresql.schema.Schema.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-postgresql.schema.Schema.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-postgresql.schema.Schema.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-postgresql.schema.Schema.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-postgresql.schema.Schema.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-postgresql.schema.Schema.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-postgresql.schema.Schema.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPolicy` <a name="PutPolicy" id="@cdktn/provider-postgresql.schema.Schema.putPolicy"></a>

```csharp
private void PutPolicy(IResolvable|SchemaPolicy[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-postgresql.schema.Schema.putPolicy.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-postgresql.schema.SchemaPolicy">SchemaPolicy</a>[]

---

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-postgresql.schema.Schema.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetDropCascade` <a name="ResetDropCascade" id="@cdktn/provider-postgresql.schema.Schema.resetDropCascade"></a>

```csharp
private void ResetDropCascade()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-postgresql.schema.Schema.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIfNotExists` <a name="ResetIfNotExists" id="@cdktn/provider-postgresql.schema.Schema.resetIfNotExists"></a>

```csharp
private void ResetIfNotExists()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktn/provider-postgresql.schema.Schema.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktn/provider-postgresql.schema.Schema.resetPolicy"></a>

```csharp
private void ResetPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Schema resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-postgresql.schema.Schema.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Postgresql;

Schema.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-postgresql.schema.Schema.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-postgresql.schema.Schema.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Postgresql;

Schema.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-postgresql.schema.Schema.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-postgresql.schema.Schema.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Postgresql;

Schema.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-postgresql.schema.Schema.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-postgresql.schema.Schema.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Postgresql;

Schema.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Schema resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-postgresql.schema.Schema.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-postgresql.schema.Schema.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Schema to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-postgresql.schema.Schema.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Schema that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-postgresql.schema.Schema.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Schema to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.policy">Policy</a></code> | <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyList">SchemaPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.dropCascadeInput">DropCascadeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.ifNotExistsInput">IfNotExistsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.policyInput">PolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-postgresql.schema.SchemaPolicy">SchemaPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.dropCascade">DropCascade</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.ifNotExists">IfNotExists</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.owner">Owner</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-postgresql.schema.Schema.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-postgresql.schema.Schema.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-postgresql.schema.Schema.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-postgresql.schema.Schema.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-postgresql.schema.Schema.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-postgresql.schema.Schema.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-postgresql.schema.Schema.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-postgresql.schema.Schema.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-postgresql.schema.Schema.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-postgresql.schema.Schema.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-postgresql.schema.Schema.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-postgresql.schema.Schema.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-postgresql.schema.Schema.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-postgresql.schema.Schema.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-postgresql.schema.Schema.property.policy"></a>

```csharp
public SchemaPolicyList Policy { get; }
```

- *Type:* <a href="#@cdktn/provider-postgresql.schema.SchemaPolicyList">SchemaPolicyList</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-postgresql.schema.Schema.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `DropCascadeInput`<sup>Optional</sup> <a name="DropCascadeInput" id="@cdktn/provider-postgresql.schema.Schema.property.dropCascadeInput"></a>

```csharp
public bool|IResolvable DropCascadeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-postgresql.schema.Schema.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IfNotExistsInput`<sup>Optional</sup> <a name="IfNotExistsInput" id="@cdktn/provider-postgresql.schema.Schema.property.ifNotExistsInput"></a>

```csharp
public bool|IResolvable IfNotExistsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-postgresql.schema.Schema.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktn/provider-postgresql.schema.Schema.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-postgresql.schema.Schema.property.policyInput"></a>

```csharp
public IResolvable|SchemaPolicy[] PolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-postgresql.schema.SchemaPolicy">SchemaPolicy</a>[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-postgresql.schema.Schema.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `DropCascade`<sup>Required</sup> <a name="DropCascade" id="@cdktn/provider-postgresql.schema.Schema.property.dropCascade"></a>

```csharp
public bool|IResolvable DropCascade { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-postgresql.schema.Schema.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IfNotExists`<sup>Required</sup> <a name="IfNotExists" id="@cdktn/provider-postgresql.schema.Schema.property.ifNotExists"></a>

```csharp
public bool|IResolvable IfNotExists { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-postgresql.schema.Schema.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-postgresql.schema.Schema.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.schema.Schema.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-postgresql.schema.Schema.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SchemaConfig <a name="SchemaConfig" id="@cdktn/provider-postgresql.schema.SchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-postgresql.schema.SchemaConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Postgresql;

new SchemaConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Database = null,
    bool|IResolvable DropCascade = null,
    string Id = null,
    bool|IResolvable IfNotExists = null,
    string Owner = null,
    IResolvable|SchemaPolicy[] Policy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaConfig.property.name">Name</a></code> | <code>string</code> | The name of the schema. |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaConfig.property.database">Database</a></code> | <code>string</code> | The database name to alter schema. |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaConfig.property.dropCascade">DropCascade</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When true, will also drop all the objects that are contained in the schema. |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#id Schema#id}. |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaConfig.property.ifNotExists">IfNotExists</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When true, use the existing schema if it exists. |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaConfig.property.owner">Owner</a></code> | <code>string</code> | The ROLE name who owns the schema. |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaConfig.property.policy">Policy</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-postgresql.schema.SchemaPolicy">SchemaPolicy</a>[]</code> | policy block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-postgresql.schema.SchemaConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-postgresql.schema.SchemaConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-postgresql.schema.SchemaConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-postgresql.schema.SchemaConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-postgresql.schema.SchemaConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-postgresql.schema.SchemaConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-postgresql.schema.SchemaConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-postgresql.schema.SchemaConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#name Schema#name}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-postgresql.schema.SchemaConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database name to alter schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#database Schema#database}

---

##### `DropCascade`<sup>Optional</sup> <a name="DropCascade" id="@cdktn/provider-postgresql.schema.SchemaConfig.property.dropCascade"></a>

```csharp
public bool|IResolvable DropCascade { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When true, will also drop all the objects that are contained in the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#drop_cascade Schema#drop_cascade}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-postgresql.schema.SchemaConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#id Schema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IfNotExists`<sup>Optional</sup> <a name="IfNotExists" id="@cdktn/provider-postgresql.schema.SchemaConfig.property.ifNotExists"></a>

```csharp
public bool|IResolvable IfNotExists { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When true, use the existing schema if it exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#if_not_exists Schema#if_not_exists}

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktn/provider-postgresql.schema.SchemaConfig.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

The ROLE name who owns the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#owner Schema#owner}

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktn/provider-postgresql.schema.SchemaConfig.property.policy"></a>

```csharp
public IResolvable|SchemaPolicy[] Policy { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-postgresql.schema.SchemaPolicy">SchemaPolicy</a>[]

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#policy Schema#policy}

---

### SchemaPolicy <a name="SchemaPolicy" id="@cdktn/provider-postgresql.schema.SchemaPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-postgresql.schema.SchemaPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Postgresql;

new SchemaPolicy {
    bool|IResolvable Create = null,
    bool|IResolvable CreateWithGrant = null,
    string Role = null,
    bool|IResolvable Usage = null,
    bool|IResolvable UsageWithGrant = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicy.property.create">Create</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, allow the specified ROLEs to CREATE new objects within the schema(s). |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicy.property.createWithGrant">CreateWithGrant</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, allow the specified ROLEs to CREATE new objects within the schema(s) and GRANT the same CREATE privilege to different ROLEs. |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicy.property.role">Role</a></code> | <code>string</code> | ROLE who will receive this policy (default: PUBLIC). |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicy.property.usage">Usage</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, allow the specified ROLEs to use objects within the schema(s). |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicy.property.usageWithGrant">UsageWithGrant</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, allow the specified ROLEs to use objects within the schema(s) and GRANT the same USAGE privilege to different ROLEs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-postgresql.schema.SchemaPolicy.property.create"></a>

```csharp
public bool|IResolvable Create { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, allow the specified ROLEs to CREATE new objects within the schema(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#create Schema#create}

---

##### `CreateWithGrant`<sup>Optional</sup> <a name="CreateWithGrant" id="@cdktn/provider-postgresql.schema.SchemaPolicy.property.createWithGrant"></a>

```csharp
public bool|IResolvable CreateWithGrant { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, allow the specified ROLEs to CREATE new objects within the schema(s) and GRANT the same CREATE privilege to different ROLEs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#create_with_grant Schema#create_with_grant}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktn/provider-postgresql.schema.SchemaPolicy.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

ROLE who will receive this policy (default: PUBLIC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#role Schema#role}

---

##### `Usage`<sup>Optional</sup> <a name="Usage" id="@cdktn/provider-postgresql.schema.SchemaPolicy.property.usage"></a>

```csharp
public bool|IResolvable Usage { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, allow the specified ROLEs to use objects within the schema(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#usage Schema#usage}

---

##### `UsageWithGrant`<sup>Optional</sup> <a name="UsageWithGrant" id="@cdktn/provider-postgresql.schema.SchemaPolicy.property.usageWithGrant"></a>

```csharp
public bool|IResolvable UsageWithGrant { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, allow the specified ROLEs to use objects within the schema(s) and GRANT the same USAGE privilege to different ROLEs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#usage_with_grant Schema#usage_with_grant}

---

## Classes <a name="Classes" id="Classes"></a>

### SchemaPolicyList <a name="SchemaPolicyList" id="@cdktn/provider-postgresql.schema.SchemaPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-postgresql.schema.SchemaPolicyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Postgresql;

new SchemaPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-postgresql.schema.SchemaPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.schema.SchemaPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-postgresql.schema.SchemaPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-postgresql.schema.SchemaPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-postgresql.schema.SchemaPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-postgresql.schema.SchemaPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-postgresql.schema.SchemaPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-postgresql.schema.SchemaPolicyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-postgresql.schema.SchemaPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-postgresql.schema.SchemaPolicyList.get"></a>

```csharp
private SchemaPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-postgresql.schema.SchemaPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-postgresql.schema.SchemaPolicy">SchemaPolicy</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-postgresql.schema.SchemaPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-postgresql.schema.SchemaPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-postgresql.schema.SchemaPolicyList.property.internalValue"></a>

```csharp
public IResolvable|SchemaPolicy[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-postgresql.schema.SchemaPolicy">SchemaPolicy</a>[]

---


### SchemaPolicyOutputReference <a name="SchemaPolicyOutputReference" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Postgresql;

new SchemaPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.resetCreateWithGrant">ResetCreateWithGrant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.resetUsage">ResetUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.resetUsageWithGrant">ResetUsageWithGrant</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetCreateWithGrant` <a name="ResetCreateWithGrant" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.resetCreateWithGrant"></a>

```csharp
private void ResetCreateWithGrant()
```

##### `ResetRole` <a name="ResetRole" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.resetRole"></a>

```csharp
private void ResetRole()
```

##### `ResetUsage` <a name="ResetUsage" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.resetUsage"></a>

```csharp
private void ResetUsage()
```

##### `ResetUsageWithGrant` <a name="ResetUsageWithGrant" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.resetUsageWithGrant"></a>

```csharp
private void ResetUsageWithGrant()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.property.createInput">CreateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.property.createWithGrantInput">CreateWithGrantInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.property.usageInput">UsageInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.property.usageWithGrantInput">UsageWithGrantInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.property.create">Create</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.property.createWithGrant">CreateWithGrant</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.property.usage">Usage</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.property.usageWithGrant">UsageWithGrant</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-postgresql.schema.SchemaPolicy">SchemaPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.property.createInput"></a>

```csharp
public bool|IResolvable CreateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CreateWithGrantInput`<sup>Optional</sup> <a name="CreateWithGrantInput" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.property.createWithGrantInput"></a>

```csharp
public bool|IResolvable CreateWithGrantInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `UsageInput`<sup>Optional</sup> <a name="UsageInput" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.property.usageInput"></a>

```csharp
public bool|IResolvable UsageInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UsageWithGrantInput`<sup>Optional</sup> <a name="UsageWithGrantInput" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.property.usageWithGrantInput"></a>

```csharp
public bool|IResolvable UsageWithGrantInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.property.create"></a>

```csharp
public bool|IResolvable Create { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CreateWithGrant`<sup>Required</sup> <a name="CreateWithGrant" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.property.createWithGrant"></a>

```csharp
public bool|IResolvable CreateWithGrant { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.property.usage"></a>

```csharp
public bool|IResolvable Usage { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UsageWithGrant`<sup>Required</sup> <a name="UsageWithGrant" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.property.usageWithGrant"></a>

```csharp
public bool|IResolvable UsageWithGrant { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-postgresql.schema.SchemaPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SchemaPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-postgresql.schema.SchemaPolicy">SchemaPolicy</a>

---



