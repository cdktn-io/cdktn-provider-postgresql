# `server` Submodule <a name="`server` Submodule" id="@cdktn/provider-postgresql.server"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Server <a name="Server" id="@cdktn/provider-postgresql.server.Server"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/server postgresql_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-postgresql.server.Server.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Postgresql;

new Server(Construct Scope, string Id, ServerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.server.Server.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-postgresql.server.Server.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-postgresql.server.Server.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-postgresql.server.ServerConfig">ServerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-postgresql.server.Server.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-postgresql.server.Server.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-postgresql.server.Server.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-postgresql.server.ServerConfig">ServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-postgresql.server.Server.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-postgresql.server.Server.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-postgresql.server.Server.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-postgresql.server.Server.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-postgresql.server.Server.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-postgresql.server.Server.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-postgresql.server.Server.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-postgresql.server.Server.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-postgresql.server.Server.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-postgresql.server.Server.resetDropCascade">ResetDropCascade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.resetServerOwner">ResetServerOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.resetServerType">ResetServerType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.resetServerVersion">ResetServerVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-postgresql.server.Server.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-postgresql.server.Server.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-postgresql.server.Server.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-postgresql.server.Server.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-postgresql.server.Server.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-postgresql.server.Server.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-postgresql.server.Server.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-postgresql.server.Server.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-postgresql.server.Server.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-postgresql.server.Server.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-postgresql.server.Server.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-postgresql.server.Server.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-postgresql.server.Server.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-postgresql.server.Server.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-postgresql.server.Server.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.server.Server.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-postgresql.server.Server.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.server.Server.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-postgresql.server.Server.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.server.Server.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-postgresql.server.Server.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.server.Server.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-postgresql.server.Server.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.server.Server.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-postgresql.server.Server.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.server.Server.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-postgresql.server.Server.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.server.Server.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-postgresql.server.Server.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.server.Server.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-postgresql.server.Server.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.server.Server.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-postgresql.server.Server.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-postgresql.server.Server.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-postgresql.server.Server.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-postgresql.server.Server.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-postgresql.server.Server.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.server.Server.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-postgresql.server.Server.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-postgresql.server.Server.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-postgresql.server.Server.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-postgresql.server.Server.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-postgresql.server.Server.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-postgresql.server.Server.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-postgresql.server.Server.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDropCascade` <a name="ResetDropCascade" id="@cdktn/provider-postgresql.server.Server.resetDropCascade"></a>

```csharp
private void ResetDropCascade()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-postgresql.server.Server.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-postgresql.server.Server.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetServerOwner` <a name="ResetServerOwner" id="@cdktn/provider-postgresql.server.Server.resetServerOwner"></a>

```csharp
private void ResetServerOwner()
```

##### `ResetServerType` <a name="ResetServerType" id="@cdktn/provider-postgresql.server.Server.resetServerType"></a>

```csharp
private void ResetServerType()
```

##### `ResetServerVersion` <a name="ResetServerVersion" id="@cdktn/provider-postgresql.server.Server.resetServerVersion"></a>

```csharp
private void ResetServerVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-postgresql.server.Server.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-postgresql.server.Server.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Server resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-postgresql.server.Server.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Postgresql;

Server.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-postgresql.server.Server.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-postgresql.server.Server.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Postgresql;

Server.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-postgresql.server.Server.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-postgresql.server.Server.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Postgresql;

Server.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-postgresql.server.Server.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-postgresql.server.Server.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Postgresql;

Server.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Server resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-postgresql.server.Server.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-postgresql.server.Server.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Server to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-postgresql.server.Server.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Server that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/server#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-postgresql.server.Server.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Server to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.dropCascadeInput">DropCascadeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.fdwNameInput">FdwNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.optionsInput">OptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.serverOwnerInput">ServerOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.serverTypeInput">ServerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.serverVersionInput">ServerVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.dropCascade">DropCascade</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.fdwName">FdwName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.serverOwner">ServerOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.serverType">ServerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.serverVersion">ServerVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-postgresql.server.Server.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-postgresql.server.Server.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-postgresql.server.Server.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-postgresql.server.Server.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-postgresql.server.Server.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-postgresql.server.Server.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-postgresql.server.Server.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-postgresql.server.Server.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-postgresql.server.Server.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-postgresql.server.Server.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-postgresql.server.Server.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-postgresql.server.Server.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-postgresql.server.Server.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-postgresql.server.Server.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DropCascadeInput`<sup>Optional</sup> <a name="DropCascadeInput" id="@cdktn/provider-postgresql.server.Server.property.dropCascadeInput"></a>

```csharp
public bool|IResolvable DropCascadeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FdwNameInput`<sup>Optional</sup> <a name="FdwNameInput" id="@cdktn/provider-postgresql.server.Server.property.fdwNameInput"></a>

```csharp
public string FdwNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-postgresql.server.Server.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-postgresql.server.Server.property.optionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-postgresql.server.Server.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `ServerOwnerInput`<sup>Optional</sup> <a name="ServerOwnerInput" id="@cdktn/provider-postgresql.server.Server.property.serverOwnerInput"></a>

```csharp
public string ServerOwnerInput { get; }
```

- *Type:* string

---

##### `ServerTypeInput`<sup>Optional</sup> <a name="ServerTypeInput" id="@cdktn/provider-postgresql.server.Server.property.serverTypeInput"></a>

```csharp
public string ServerTypeInput { get; }
```

- *Type:* string

---

##### `ServerVersionInput`<sup>Optional</sup> <a name="ServerVersionInput" id="@cdktn/provider-postgresql.server.Server.property.serverVersionInput"></a>

```csharp
public string ServerVersionInput { get; }
```

- *Type:* string

---

##### `DropCascade`<sup>Required</sup> <a name="DropCascade" id="@cdktn/provider-postgresql.server.Server.property.dropCascade"></a>

```csharp
public bool|IResolvable DropCascade { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FdwName`<sup>Required</sup> <a name="FdwName" id="@cdktn/provider-postgresql.server.Server.property.fdwName"></a>

```csharp
public string FdwName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-postgresql.server.Server.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-postgresql.server.Server.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-postgresql.server.Server.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `ServerOwner`<sup>Required</sup> <a name="ServerOwner" id="@cdktn/provider-postgresql.server.Server.property.serverOwner"></a>

```csharp
public string ServerOwner { get; }
```

- *Type:* string

---

##### `ServerType`<sup>Required</sup> <a name="ServerType" id="@cdktn/provider-postgresql.server.Server.property.serverType"></a>

```csharp
public string ServerType { get; }
```

- *Type:* string

---

##### `ServerVersion`<sup>Required</sup> <a name="ServerVersion" id="@cdktn/provider-postgresql.server.Server.property.serverVersion"></a>

```csharp
public string ServerVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.server.Server.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-postgresql.server.Server.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServerConfig <a name="ServerConfig" id="@cdktn/provider-postgresql.server.ServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-postgresql.server.ServerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Postgresql;

new ServerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FdwName,
    string ServerName,
    bool|IResolvable DropCascade = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Options = null,
    string ServerOwner = null,
    string ServerType = null,
    string ServerVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.server.ServerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.ServerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.ServerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.ServerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.ServerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.ServerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.ServerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.server.ServerConfig.property.fdwName">FdwName</a></code> | <code>string</code> | The name of the foreign-data wrapper that manages the server. |
| <code><a href="#@cdktn/provider-postgresql.server.ServerConfig.property.serverName">ServerName</a></code> | <code>string</code> | The name of the foreign server to be created. |
| <code><a href="#@cdktn/provider-postgresql.server.ServerConfig.property.dropCascade">DropCascade</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Automatically drop objects that depend on the server (such as user mappings), and in turn all objects that depend on those objects. |
| <code><a href="#@cdktn/provider-postgresql.server.ServerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/server#id Server#id}. |
| <code><a href="#@cdktn/provider-postgresql.server.ServerConfig.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | This clause specifies the options for the server. |
| <code><a href="#@cdktn/provider-postgresql.server.ServerConfig.property.serverOwner">ServerOwner</a></code> | <code>string</code> | The user name of the new owner of the foreign server. |
| <code><a href="#@cdktn/provider-postgresql.server.ServerConfig.property.serverType">ServerType</a></code> | <code>string</code> | Optional server type, potentially useful to foreign-data wrappers. |
| <code><a href="#@cdktn/provider-postgresql.server.ServerConfig.property.serverVersion">ServerVersion</a></code> | <code>string</code> | Optional server version, potentially useful to foreign-data wrappers. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-postgresql.server.ServerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-postgresql.server.ServerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-postgresql.server.ServerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-postgresql.server.ServerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-postgresql.server.ServerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-postgresql.server.ServerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-postgresql.server.ServerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FdwName`<sup>Required</sup> <a name="FdwName" id="@cdktn/provider-postgresql.server.ServerConfig.property.fdwName"></a>

```csharp
public string FdwName { get; set; }
```

- *Type:* string

The name of the foreign-data wrapper that manages the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/server#fdw_name Server#fdw_name}

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-postgresql.server.ServerConfig.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

The name of the foreign server to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/server#server_name Server#server_name}

---

##### `DropCascade`<sup>Optional</sup> <a name="DropCascade" id="@cdktn/provider-postgresql.server.ServerConfig.property.dropCascade"></a>

```csharp
public bool|IResolvable DropCascade { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Automatically drop objects that depend on the server (such as user mappings), and in turn all objects that depend on those objects.

Drop RESTRICT is the default

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/server#drop_cascade Server#drop_cascade}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-postgresql.server.ServerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/server#id Server#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-postgresql.server.ServerConfig.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

This clause specifies the options for the server.

The options typically define the connection details of the server, but the actual names and values are dependent on the server's foreign-data wrapper

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/server#options Server#options}

---

##### `ServerOwner`<sup>Optional</sup> <a name="ServerOwner" id="@cdktn/provider-postgresql.server.ServerConfig.property.serverOwner"></a>

```csharp
public string ServerOwner { get; set; }
```

- *Type:* string

The user name of the new owner of the foreign server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/server#server_owner Server#server_owner}

---

##### `ServerType`<sup>Optional</sup> <a name="ServerType" id="@cdktn/provider-postgresql.server.ServerConfig.property.serverType"></a>

```csharp
public string ServerType { get; set; }
```

- *Type:* string

Optional server type, potentially useful to foreign-data wrappers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/server#server_type Server#server_type}

---

##### `ServerVersion`<sup>Optional</sup> <a name="ServerVersion" id="@cdktn/provider-postgresql.server.ServerConfig.property.serverVersion"></a>

```csharp
public string ServerVersion { get; set; }
```

- *Type:* string

Optional server version, potentially useful to foreign-data wrappers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/server#server_version Server#server_version}

---



