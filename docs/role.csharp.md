# `role` Submodule <a name="`role` Submodule" id="@cdktn/provider-postgresql.role"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Role <a name="Role" id="@cdktn/provider-postgresql.role.Role"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role postgresql_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-postgresql.role.Role.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Postgresql;

new Role(Construct Scope, string Id, RoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.role.Role.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-postgresql.role.Role.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-postgresql.role.Role.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-postgresql.role.RoleConfig">RoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-postgresql.role.Role.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-postgresql.role.Role.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-postgresql.role.Role.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-postgresql.role.RoleConfig">RoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-postgresql.role.Role.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-postgresql.role.Role.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-postgresql.role.Role.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-postgresql.role.Role.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-postgresql.role.Role.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-postgresql.role.Role.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-postgresql.role.Role.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-postgresql.role.Role.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-postgresql.role.Role.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-postgresql.role.Role.resetAssumeRole">ResetAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.resetBypassRowLevelSecurity">ResetBypassRowLevelSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.resetConnectionLimit">ResetConnectionLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.resetCreateDatabase">ResetCreateDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.resetCreateRole">ResetCreateRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.resetEncryptedPassword">ResetEncryptedPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.resetIdleInTransactionSessionTimeout">ResetIdleInTransactionSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.resetInherit">ResetInherit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.resetLogin">ResetLogin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.resetPasswordWo">ResetPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.resetPasswordWoVersion">ResetPasswordWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.resetReplication">ResetReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.resetRoles">ResetRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.resetSearchPath">ResetSearchPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.resetSkipDropRole">ResetSkipDropRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.resetSkipReassignOwned">ResetSkipReassignOwned</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.resetStatementTimeout">ResetStatementTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.resetSuperuser">ResetSuperuser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.resetValidUntil">ResetValidUntil</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-postgresql.role.Role.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-postgresql.role.Role.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-postgresql.role.Role.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-postgresql.role.Role.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-postgresql.role.Role.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-postgresql.role.Role.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-postgresql.role.Role.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-postgresql.role.Role.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-postgresql.role.Role.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-postgresql.role.Role.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-postgresql.role.Role.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-postgresql.role.Role.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-postgresql.role.Role.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-postgresql.role.Role.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-postgresql.role.Role.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.role.Role.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-postgresql.role.Role.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.role.Role.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-postgresql.role.Role.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.role.Role.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-postgresql.role.Role.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.role.Role.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-postgresql.role.Role.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.role.Role.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-postgresql.role.Role.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.role.Role.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-postgresql.role.Role.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.role.Role.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-postgresql.role.Role.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.role.Role.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-postgresql.role.Role.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.role.Role.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-postgresql.role.Role.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-postgresql.role.Role.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-postgresql.role.Role.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-postgresql.role.Role.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-postgresql.role.Role.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-postgresql.role.Role.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-postgresql.role.Role.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-postgresql.role.Role.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-postgresql.role.Role.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-postgresql.role.Role.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-postgresql.role.Role.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-postgresql.role.Role.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-postgresql.role.Role.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAssumeRole` <a name="ResetAssumeRole" id="@cdktn/provider-postgresql.role.Role.resetAssumeRole"></a>

```csharp
private void ResetAssumeRole()
```

##### `ResetBypassRowLevelSecurity` <a name="ResetBypassRowLevelSecurity" id="@cdktn/provider-postgresql.role.Role.resetBypassRowLevelSecurity"></a>

```csharp
private void ResetBypassRowLevelSecurity()
```

##### `ResetConnectionLimit` <a name="ResetConnectionLimit" id="@cdktn/provider-postgresql.role.Role.resetConnectionLimit"></a>

```csharp
private void ResetConnectionLimit()
```

##### `ResetCreateDatabase` <a name="ResetCreateDatabase" id="@cdktn/provider-postgresql.role.Role.resetCreateDatabase"></a>

```csharp
private void ResetCreateDatabase()
```

##### `ResetCreateRole` <a name="ResetCreateRole" id="@cdktn/provider-postgresql.role.Role.resetCreateRole"></a>

```csharp
private void ResetCreateRole()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktn/provider-postgresql.role.Role.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetEncryptedPassword` <a name="ResetEncryptedPassword" id="@cdktn/provider-postgresql.role.Role.resetEncryptedPassword"></a>

```csharp
private void ResetEncryptedPassword()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-postgresql.role.Role.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdleInTransactionSessionTimeout` <a name="ResetIdleInTransactionSessionTimeout" id="@cdktn/provider-postgresql.role.Role.resetIdleInTransactionSessionTimeout"></a>

```csharp
private void ResetIdleInTransactionSessionTimeout()
```

##### `ResetInherit` <a name="ResetInherit" id="@cdktn/provider-postgresql.role.Role.resetInherit"></a>

```csharp
private void ResetInherit()
```

##### `ResetLogin` <a name="ResetLogin" id="@cdktn/provider-postgresql.role.Role.resetLogin"></a>

```csharp
private void ResetLogin()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-postgresql.role.Role.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPasswordWo` <a name="ResetPasswordWo" id="@cdktn/provider-postgresql.role.Role.resetPasswordWo"></a>

```csharp
private void ResetPasswordWo()
```

##### `ResetPasswordWoVersion` <a name="ResetPasswordWoVersion" id="@cdktn/provider-postgresql.role.Role.resetPasswordWoVersion"></a>

```csharp
private void ResetPasswordWoVersion()
```

##### `ResetReplication` <a name="ResetReplication" id="@cdktn/provider-postgresql.role.Role.resetReplication"></a>

```csharp
private void ResetReplication()
```

##### `ResetRoles` <a name="ResetRoles" id="@cdktn/provider-postgresql.role.Role.resetRoles"></a>

```csharp
private void ResetRoles()
```

##### `ResetSearchPath` <a name="ResetSearchPath" id="@cdktn/provider-postgresql.role.Role.resetSearchPath"></a>

```csharp
private void ResetSearchPath()
```

##### `ResetSkipDropRole` <a name="ResetSkipDropRole" id="@cdktn/provider-postgresql.role.Role.resetSkipDropRole"></a>

```csharp
private void ResetSkipDropRole()
```

##### `ResetSkipReassignOwned` <a name="ResetSkipReassignOwned" id="@cdktn/provider-postgresql.role.Role.resetSkipReassignOwned"></a>

```csharp
private void ResetSkipReassignOwned()
```

##### `ResetStatementTimeout` <a name="ResetStatementTimeout" id="@cdktn/provider-postgresql.role.Role.resetStatementTimeout"></a>

```csharp
private void ResetStatementTimeout()
```

##### `ResetSuperuser` <a name="ResetSuperuser" id="@cdktn/provider-postgresql.role.Role.resetSuperuser"></a>

```csharp
private void ResetSuperuser()
```

##### `ResetValidUntil` <a name="ResetValidUntil" id="@cdktn/provider-postgresql.role.Role.resetValidUntil"></a>

```csharp
private void ResetValidUntil()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-postgresql.role.Role.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-postgresql.role.Role.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Role resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-postgresql.role.Role.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Postgresql;

Role.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-postgresql.role.Role.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-postgresql.role.Role.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Postgresql;

Role.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-postgresql.role.Role.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-postgresql.role.Role.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Postgresql;

Role.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-postgresql.role.Role.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-postgresql.role.Role.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Postgresql;

Role.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Role resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-postgresql.role.Role.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-postgresql.role.Role.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Role to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-postgresql.role.Role.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Role that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-postgresql.role.Role.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Role to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.assumeRoleInput">AssumeRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.bypassRowLevelSecurityInput">BypassRowLevelSecurityInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.connectionLimitInput">ConnectionLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.createDatabaseInput">CreateDatabaseInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.createRoleInput">CreateRoleInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.encryptedInput">EncryptedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.encryptedPasswordInput">EncryptedPasswordInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.idleInTransactionSessionTimeoutInput">IdleInTransactionSessionTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.inheritInput">InheritInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.loginInput">LoginInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.passwordWoInput">PasswordWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.passwordWoVersionInput">PasswordWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.replicationInput">ReplicationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.rolesInput">RolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.searchPathInput">SearchPathInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.skipDropRoleInput">SkipDropRoleInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.skipReassignOwnedInput">SkipReassignOwnedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.statementTimeoutInput">StatementTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.superuserInput">SuperuserInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.validUntilInput">ValidUntilInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.assumeRole">AssumeRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.bypassRowLevelSecurity">BypassRowLevelSecurity</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.connectionLimit">ConnectionLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.createDatabase">CreateDatabase</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.createRole">CreateRole</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.encrypted">Encrypted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.encryptedPassword">EncryptedPassword</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.idleInTransactionSessionTimeout">IdleInTransactionSessionTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.inherit">Inherit</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.login">Login</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.passwordWo">PasswordWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.passwordWoVersion">PasswordWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.replication">Replication</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.roles">Roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.searchPath">SearchPath</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.skipDropRole">SkipDropRole</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.skipReassignOwned">SkipReassignOwned</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.statementTimeout">StatementTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.superuser">Superuser</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.validUntil">ValidUntil</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-postgresql.role.Role.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-postgresql.role.Role.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-postgresql.role.Role.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-postgresql.role.Role.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-postgresql.role.Role.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-postgresql.role.Role.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-postgresql.role.Role.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-postgresql.role.Role.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-postgresql.role.Role.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-postgresql.role.Role.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-postgresql.role.Role.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-postgresql.role.Role.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-postgresql.role.Role.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-postgresql.role.Role.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssumeRoleInput`<sup>Optional</sup> <a name="AssumeRoleInput" id="@cdktn/provider-postgresql.role.Role.property.assumeRoleInput"></a>

```csharp
public string AssumeRoleInput { get; }
```

- *Type:* string

---

##### `BypassRowLevelSecurityInput`<sup>Optional</sup> <a name="BypassRowLevelSecurityInput" id="@cdktn/provider-postgresql.role.Role.property.bypassRowLevelSecurityInput"></a>

```csharp
public bool|IResolvable BypassRowLevelSecurityInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ConnectionLimitInput`<sup>Optional</sup> <a name="ConnectionLimitInput" id="@cdktn/provider-postgresql.role.Role.property.connectionLimitInput"></a>

```csharp
public double ConnectionLimitInput { get; }
```

- *Type:* double

---

##### `CreateDatabaseInput`<sup>Optional</sup> <a name="CreateDatabaseInput" id="@cdktn/provider-postgresql.role.Role.property.createDatabaseInput"></a>

```csharp
public bool|IResolvable CreateDatabaseInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CreateRoleInput`<sup>Optional</sup> <a name="CreateRoleInput" id="@cdktn/provider-postgresql.role.Role.property.createRoleInput"></a>

```csharp
public bool|IResolvable CreateRoleInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktn/provider-postgresql.role.Role.property.encryptedInput"></a>

```csharp
public string EncryptedInput { get; }
```

- *Type:* string

---

##### `EncryptedPasswordInput`<sup>Optional</sup> <a name="EncryptedPasswordInput" id="@cdktn/provider-postgresql.role.Role.property.encryptedPasswordInput"></a>

```csharp
public bool|IResolvable EncryptedPasswordInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-postgresql.role.Role.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdleInTransactionSessionTimeoutInput`<sup>Optional</sup> <a name="IdleInTransactionSessionTimeoutInput" id="@cdktn/provider-postgresql.role.Role.property.idleInTransactionSessionTimeoutInput"></a>

```csharp
public double IdleInTransactionSessionTimeoutInput { get; }
```

- *Type:* double

---

##### `InheritInput`<sup>Optional</sup> <a name="InheritInput" id="@cdktn/provider-postgresql.role.Role.property.inheritInput"></a>

```csharp
public bool|IResolvable InheritInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktn/provider-postgresql.role.Role.property.loginInput"></a>

```csharp
public bool|IResolvable LoginInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-postgresql.role.Role.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-postgresql.role.Role.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PasswordWoInput`<sup>Optional</sup> <a name="PasswordWoInput" id="@cdktn/provider-postgresql.role.Role.property.passwordWoInput"></a>

```csharp
public string PasswordWoInput { get; }
```

- *Type:* string

---

##### `PasswordWoVersionInput`<sup>Optional</sup> <a name="PasswordWoVersionInput" id="@cdktn/provider-postgresql.role.Role.property.passwordWoVersionInput"></a>

```csharp
public string PasswordWoVersionInput { get; }
```

- *Type:* string

---

##### `ReplicationInput`<sup>Optional</sup> <a name="ReplicationInput" id="@cdktn/provider-postgresql.role.Role.property.replicationInput"></a>

```csharp
public bool|IResolvable ReplicationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktn/provider-postgresql.role.Role.property.rolesInput"></a>

```csharp
public string[] RolesInput { get; }
```

- *Type:* string[]

---

##### `SearchPathInput`<sup>Optional</sup> <a name="SearchPathInput" id="@cdktn/provider-postgresql.role.Role.property.searchPathInput"></a>

```csharp
public string[] SearchPathInput { get; }
```

- *Type:* string[]

---

##### `SkipDropRoleInput`<sup>Optional</sup> <a name="SkipDropRoleInput" id="@cdktn/provider-postgresql.role.Role.property.skipDropRoleInput"></a>

```csharp
public bool|IResolvable SkipDropRoleInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SkipReassignOwnedInput`<sup>Optional</sup> <a name="SkipReassignOwnedInput" id="@cdktn/provider-postgresql.role.Role.property.skipReassignOwnedInput"></a>

```csharp
public bool|IResolvable SkipReassignOwnedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StatementTimeoutInput`<sup>Optional</sup> <a name="StatementTimeoutInput" id="@cdktn/provider-postgresql.role.Role.property.statementTimeoutInput"></a>

```csharp
public double StatementTimeoutInput { get; }
```

- *Type:* double

---

##### `SuperuserInput`<sup>Optional</sup> <a name="SuperuserInput" id="@cdktn/provider-postgresql.role.Role.property.superuserInput"></a>

```csharp
public bool|IResolvable SuperuserInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ValidUntilInput`<sup>Optional</sup> <a name="ValidUntilInput" id="@cdktn/provider-postgresql.role.Role.property.validUntilInput"></a>

```csharp
public string ValidUntilInput { get; }
```

- *Type:* string

---

##### `AssumeRole`<sup>Required</sup> <a name="AssumeRole" id="@cdktn/provider-postgresql.role.Role.property.assumeRole"></a>

```csharp
public string AssumeRole { get; }
```

- *Type:* string

---

##### `BypassRowLevelSecurity`<sup>Required</sup> <a name="BypassRowLevelSecurity" id="@cdktn/provider-postgresql.role.Role.property.bypassRowLevelSecurity"></a>

```csharp
public bool|IResolvable BypassRowLevelSecurity { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ConnectionLimit`<sup>Required</sup> <a name="ConnectionLimit" id="@cdktn/provider-postgresql.role.Role.property.connectionLimit"></a>

```csharp
public double ConnectionLimit { get; }
```

- *Type:* double

---

##### `CreateDatabase`<sup>Required</sup> <a name="CreateDatabase" id="@cdktn/provider-postgresql.role.Role.property.createDatabase"></a>

```csharp
public bool|IResolvable CreateDatabase { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CreateRole`<sup>Required</sup> <a name="CreateRole" id="@cdktn/provider-postgresql.role.Role.property.createRole"></a>

```csharp
public bool|IResolvable CreateRole { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-postgresql.role.Role.property.encrypted"></a>

```csharp
public string Encrypted { get; }
```

- *Type:* string

---

##### `EncryptedPassword`<sup>Required</sup> <a name="EncryptedPassword" id="@cdktn/provider-postgresql.role.Role.property.encryptedPassword"></a>

```csharp
public bool|IResolvable EncryptedPassword { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-postgresql.role.Role.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdleInTransactionSessionTimeout`<sup>Required</sup> <a name="IdleInTransactionSessionTimeout" id="@cdktn/provider-postgresql.role.Role.property.idleInTransactionSessionTimeout"></a>

```csharp
public double IdleInTransactionSessionTimeout { get; }
```

- *Type:* double

---

##### `Inherit`<sup>Required</sup> <a name="Inherit" id="@cdktn/provider-postgresql.role.Role.property.inherit"></a>

```csharp
public bool|IResolvable Inherit { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktn/provider-postgresql.role.Role.property.login"></a>

```csharp
public bool|IResolvable Login { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-postgresql.role.Role.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-postgresql.role.Role.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PasswordWo`<sup>Required</sup> <a name="PasswordWo" id="@cdktn/provider-postgresql.role.Role.property.passwordWo"></a>

```csharp
public string PasswordWo { get; }
```

- *Type:* string

---

##### `PasswordWoVersion`<sup>Required</sup> <a name="PasswordWoVersion" id="@cdktn/provider-postgresql.role.Role.property.passwordWoVersion"></a>

```csharp
public string PasswordWoVersion { get; }
```

- *Type:* string

---

##### `Replication`<sup>Required</sup> <a name="Replication" id="@cdktn/provider-postgresql.role.Role.property.replication"></a>

```csharp
public bool|IResolvable Replication { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktn/provider-postgresql.role.Role.property.roles"></a>

```csharp
public string[] Roles { get; }
```

- *Type:* string[]

---

##### `SearchPath`<sup>Required</sup> <a name="SearchPath" id="@cdktn/provider-postgresql.role.Role.property.searchPath"></a>

```csharp
public string[] SearchPath { get; }
```

- *Type:* string[]

---

##### `SkipDropRole`<sup>Required</sup> <a name="SkipDropRole" id="@cdktn/provider-postgresql.role.Role.property.skipDropRole"></a>

```csharp
public bool|IResolvable SkipDropRole { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SkipReassignOwned`<sup>Required</sup> <a name="SkipReassignOwned" id="@cdktn/provider-postgresql.role.Role.property.skipReassignOwned"></a>

```csharp
public bool|IResolvable SkipReassignOwned { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StatementTimeout`<sup>Required</sup> <a name="StatementTimeout" id="@cdktn/provider-postgresql.role.Role.property.statementTimeout"></a>

```csharp
public double StatementTimeout { get; }
```

- *Type:* double

---

##### `Superuser`<sup>Required</sup> <a name="Superuser" id="@cdktn/provider-postgresql.role.Role.property.superuser"></a>

```csharp
public bool|IResolvable Superuser { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ValidUntil`<sup>Required</sup> <a name="ValidUntil" id="@cdktn/provider-postgresql.role.Role.property.validUntil"></a>

```csharp
public string ValidUntil { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.role.Role.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-postgresql.role.Role.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RoleConfig <a name="RoleConfig" id="@cdktn/provider-postgresql.role.RoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-postgresql.role.RoleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Postgresql;

new RoleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string AssumeRole = null,
    bool|IResolvable BypassRowLevelSecurity = null,
    double ConnectionLimit = null,
    bool|IResolvable CreateDatabase = null,
    bool|IResolvable CreateRole = null,
    string Encrypted = null,
    bool|IResolvable EncryptedPassword = null,
    string Id = null,
    double IdleInTransactionSessionTimeout = null,
    bool|IResolvable Inherit = null,
    bool|IResolvable Login = null,
    string Password = null,
    string PasswordWo = null,
    string PasswordWoVersion = null,
    bool|IResolvable Replication = null,
    string[] Roles = null,
    string[] SearchPath = null,
    bool|IResolvable SkipDropRole = null,
    bool|IResolvable SkipReassignOwned = null,
    double StatementTimeout = null,
    bool|IResolvable Superuser = null,
    string ValidUntil = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.name">Name</a></code> | <code>string</code> | The name of the role. |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.assumeRole">AssumeRole</a></code> | <code>string</code> | Role to switch to at login. |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.bypassRowLevelSecurity">BypassRowLevelSecurity</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Determine whether a role bypasses every row-level security (RLS) policy. |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.connectionLimit">ConnectionLimit</a></code> | <code>double</code> | How many concurrent connections can be made with this role. |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.createDatabase">CreateDatabase</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Define a role's ability to create databases. |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.createRole">CreateRole</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Determine whether this role will be permitted to create new roles. |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.encrypted">Encrypted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role#encrypted Role#encrypted}. |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.encryptedPassword">EncryptedPassword</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Control whether the password is stored encrypted in the system catalogs. |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role#id Role#id}. |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.idleInTransactionSessionTimeout">IdleInTransactionSessionTimeout</a></code> | <code>double</code> | Terminate any session with an open transaction that has been idle for longer than the specified duration in milliseconds. |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.inherit">Inherit</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Determine whether a role "inherits" the privileges of roles it is a member of. |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.login">Login</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Determine whether a role is allowed to log in. |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.password">Password</a></code> | <code>string</code> | Sets the role's password. |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.passwordWo">PasswordWo</a></code> | <code>string</code> | Sets the role's password without storing it in the state file. |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.passwordWoVersion">PasswordWoVersion</a></code> | <code>string</code> | Prevents applies from updating the role password on every apply unless the value changes. |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.replication">Replication</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Determine whether a role is allowed to initiate streaming replication or put the system in and out of backup mode. |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.roles">Roles</a></code> | <code>string[]</code> | Role(s) to grant to this new role. |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.searchPath">SearchPath</a></code> | <code>string[]</code> | Sets the role's search path. |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.skipDropRole">SkipDropRole</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Skip actually running the DROP ROLE command when removing a ROLE from PostgreSQL. |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.skipReassignOwned">SkipReassignOwned</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Skip actually running the REASSIGN OWNED command when removing a role from PostgreSQL. |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.statementTimeout">StatementTimeout</a></code> | <code>double</code> | Abort any statement that takes more than the specified number of milliseconds. |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.superuser">Superuser</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Determine whether the new role is a "superuser". |
| <code><a href="#@cdktn/provider-postgresql.role.RoleConfig.property.validUntil">ValidUntil</a></code> | <code>string</code> | Sets a date and time after which the role's password is no longer valid. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-postgresql.role.RoleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-postgresql.role.RoleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-postgresql.role.RoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-postgresql.role.RoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-postgresql.role.RoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-postgresql.role.RoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-postgresql.role.RoleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-postgresql.role.RoleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role#name Role#name}

---

##### `AssumeRole`<sup>Optional</sup> <a name="AssumeRole" id="@cdktn/provider-postgresql.role.RoleConfig.property.assumeRole"></a>

```csharp
public string AssumeRole { get; set; }
```

- *Type:* string

Role to switch to at login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role#assume_role Role#assume_role}

---

##### `BypassRowLevelSecurity`<sup>Optional</sup> <a name="BypassRowLevelSecurity" id="@cdktn/provider-postgresql.role.RoleConfig.property.bypassRowLevelSecurity"></a>

```csharp
public bool|IResolvable BypassRowLevelSecurity { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Determine whether a role bypasses every row-level security (RLS) policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role#bypass_row_level_security Role#bypass_row_level_security}

---

##### `ConnectionLimit`<sup>Optional</sup> <a name="ConnectionLimit" id="@cdktn/provider-postgresql.role.RoleConfig.property.connectionLimit"></a>

```csharp
public double ConnectionLimit { get; set; }
```

- *Type:* double

How many concurrent connections can be made with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role#connection_limit Role#connection_limit}

---

##### `CreateDatabase`<sup>Optional</sup> <a name="CreateDatabase" id="@cdktn/provider-postgresql.role.RoleConfig.property.createDatabase"></a>

```csharp
public bool|IResolvable CreateDatabase { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Define a role's ability to create databases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role#create_database Role#create_database}

---

##### `CreateRole`<sup>Optional</sup> <a name="CreateRole" id="@cdktn/provider-postgresql.role.RoleConfig.property.createRole"></a>

```csharp
public bool|IResolvable CreateRole { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Determine whether this role will be permitted to create new roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role#create_role Role#create_role}

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktn/provider-postgresql.role.RoleConfig.property.encrypted"></a>

```csharp
public string Encrypted { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role#encrypted Role#encrypted}.

---

##### `EncryptedPassword`<sup>Optional</sup> <a name="EncryptedPassword" id="@cdktn/provider-postgresql.role.RoleConfig.property.encryptedPassword"></a>

```csharp
public bool|IResolvable EncryptedPassword { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Control whether the password is stored encrypted in the system catalogs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role#encrypted_password Role#encrypted_password}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-postgresql.role.RoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role#id Role#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdleInTransactionSessionTimeout`<sup>Optional</sup> <a name="IdleInTransactionSessionTimeout" id="@cdktn/provider-postgresql.role.RoleConfig.property.idleInTransactionSessionTimeout"></a>

```csharp
public double IdleInTransactionSessionTimeout { get; set; }
```

- *Type:* double

Terminate any session with an open transaction that has been idle for longer than the specified duration in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role#idle_in_transaction_session_timeout Role#idle_in_transaction_session_timeout}

---

##### `Inherit`<sup>Optional</sup> <a name="Inherit" id="@cdktn/provider-postgresql.role.RoleConfig.property.inherit"></a>

```csharp
public bool|IResolvable Inherit { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Determine whether a role "inherits" the privileges of roles it is a member of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role#inherit Role#inherit}

---

##### `Login`<sup>Optional</sup> <a name="Login" id="@cdktn/provider-postgresql.role.RoleConfig.property.login"></a>

```csharp
public bool|IResolvable Login { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Determine whether a role is allowed to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role#login Role#login}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-postgresql.role.RoleConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Sets the role's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role#password Role#password}

---

##### `PasswordWo`<sup>Optional</sup> <a name="PasswordWo" id="@cdktn/provider-postgresql.role.RoleConfig.property.passwordWo"></a>

```csharp
public string PasswordWo { get; set; }
```

- *Type:* string

Sets the role's password without storing it in the state file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role#password_wo Role#password_wo}

---

##### `PasswordWoVersion`<sup>Optional</sup> <a name="PasswordWoVersion" id="@cdktn/provider-postgresql.role.RoleConfig.property.passwordWoVersion"></a>

```csharp
public string PasswordWoVersion { get; set; }
```

- *Type:* string

Prevents applies from updating the role password on every apply unless the value changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role#password_wo_version Role#password_wo_version}

---

##### `Replication`<sup>Optional</sup> <a name="Replication" id="@cdktn/provider-postgresql.role.RoleConfig.property.replication"></a>

```csharp
public bool|IResolvable Replication { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Determine whether a role is allowed to initiate streaming replication or put the system in and out of backup mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role#replication Role#replication}

---

##### `Roles`<sup>Optional</sup> <a name="Roles" id="@cdktn/provider-postgresql.role.RoleConfig.property.roles"></a>

```csharp
public string[] Roles { get; set; }
```

- *Type:* string[]

Role(s) to grant to this new role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role#roles Role#roles}

---

##### `SearchPath`<sup>Optional</sup> <a name="SearchPath" id="@cdktn/provider-postgresql.role.RoleConfig.property.searchPath"></a>

```csharp
public string[] SearchPath { get; set; }
```

- *Type:* string[]

Sets the role's search path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role#search_path Role#search_path}

---

##### `SkipDropRole`<sup>Optional</sup> <a name="SkipDropRole" id="@cdktn/provider-postgresql.role.RoleConfig.property.skipDropRole"></a>

```csharp
public bool|IResolvable SkipDropRole { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Skip actually running the DROP ROLE command when removing a ROLE from PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role#skip_drop_role Role#skip_drop_role}

---

##### `SkipReassignOwned`<sup>Optional</sup> <a name="SkipReassignOwned" id="@cdktn/provider-postgresql.role.RoleConfig.property.skipReassignOwned"></a>

```csharp
public bool|IResolvable SkipReassignOwned { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Skip actually running the REASSIGN OWNED command when removing a role from PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role#skip_reassign_owned Role#skip_reassign_owned}

---

##### `StatementTimeout`<sup>Optional</sup> <a name="StatementTimeout" id="@cdktn/provider-postgresql.role.RoleConfig.property.statementTimeout"></a>

```csharp
public double StatementTimeout { get; set; }
```

- *Type:* double

Abort any statement that takes more than the specified number of milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role#statement_timeout Role#statement_timeout}

---

##### `Superuser`<sup>Optional</sup> <a name="Superuser" id="@cdktn/provider-postgresql.role.RoleConfig.property.superuser"></a>

```csharp
public bool|IResolvable Superuser { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Determine whether the new role is a "superuser".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role#superuser Role#superuser}

---

##### `ValidUntil`<sup>Optional</sup> <a name="ValidUntil" id="@cdktn/provider-postgresql.role.RoleConfig.property.validUntil"></a>

```csharp
public string ValidUntil { get; set; }
```

- *Type:* string

Sets a date and time after which the role's password is no longer valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/role#valid_until Role#valid_until}

---



