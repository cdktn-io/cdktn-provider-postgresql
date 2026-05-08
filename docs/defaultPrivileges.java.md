# `defaultPrivileges` Submodule <a name="`defaultPrivileges` Submodule" id="@cdktn/provider-postgresql.defaultPrivileges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultPrivileges <a name="DefaultPrivileges" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges postgresql_default_privileges}.

#### Initializers <a name="Initializers" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer"></a>

```java
import io.cdktn.providers.postgresql.default_privileges.DefaultPrivileges;

DefaultPrivileges.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .database(java.lang.String)
    .objectType(java.lang.String)
    .owner(java.lang.String)
    .privileges(java.util.List<java.lang.String>)
    .role(java.lang.String)
//  .id(java.lang.String)
//  .schema(java.lang.String)
//  .withGrantOption(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database to grant default privileges for this role. |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.objectType">objectType</a></code> | <code>java.lang.String</code> | The PostgreSQL object type to set the default privileges on (one of: table, sequence, function, routine, type, schema). |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.owner">owner</a></code> | <code>java.lang.String</code> | Target role for which to alter default privileges. |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.privileges">privileges</a></code> | <code>java.util.List<java.lang.String></code> | The list of privileges to apply as default privileges. |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | The name of the role to which grant default privileges on. |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#id DefaultPrivileges#id}. |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The database schema to set default privileges for this role. |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.withGrantOption">withGrantOption</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Permit the grant recipient to grant it to others. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database to grant default privileges for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#database DefaultPrivileges#database}

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.objectType"></a>

- *Type:* java.lang.String

The PostgreSQL object type to set the default privileges on (one of: table, sequence, function, routine, type, schema).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#object_type DefaultPrivileges#object_type}

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.owner"></a>

- *Type:* java.lang.String

Target role for which to alter default privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#owner DefaultPrivileges#owner}

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.privileges"></a>

- *Type:* java.util.List<java.lang.String>

The list of privileges to apply as default privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#privileges DefaultPrivileges#privileges}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.role"></a>

- *Type:* java.lang.String

The name of the role to which grant default privileges on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#role DefaultPrivileges#role}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#id DefaultPrivileges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The database schema to set default privileges for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#schema DefaultPrivileges#schema}

---

##### `withGrantOption`<sup>Optional</sup> <a name="withGrantOption" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.withGrantOption"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Permit the grant recipient to grant it to others.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#with_grant_option DefaultPrivileges#with_grant_option}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetWithGrantOption">resetWithGrantOption</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetId"></a>

```java
public void resetId()
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetSchema"></a>

```java
public void resetSchema()
```

##### `resetWithGrantOption` <a name="resetWithGrantOption" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetWithGrantOption"></a>

```java
public void resetWithGrantOption()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DefaultPrivileges resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.isConstruct"></a>

```java
import io.cdktn.providers.postgresql.default_privileges.DefaultPrivileges;

DefaultPrivileges.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.isTerraformElement"></a>

```java
import io.cdktn.providers.postgresql.default_privileges.DefaultPrivileges;

DefaultPrivileges.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.isTerraformResource"></a>

```java
import io.cdktn.providers.postgresql.default_privileges.DefaultPrivileges;

DefaultPrivileges.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.generateConfigForImport"></a>

```java
import io.cdktn.providers.postgresql.default_privileges.DefaultPrivileges;

DefaultPrivileges.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DefaultPrivileges.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DefaultPrivileges resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DefaultPrivileges to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DefaultPrivileges that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DefaultPrivileges to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.objectTypeInput">objectTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.privilegesInput">privilegesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.withGrantOptionInput">withGrantOptionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.objectType">objectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.privileges">privileges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.withGrantOption">withGrantOption</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.objectTypeInput"></a>

```java
public java.lang.String getObjectTypeInput();
```

- *Type:* java.lang.String

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `privilegesInput`<sup>Optional</sup> <a name="privilegesInput" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.privilegesInput"></a>

```java
public java.util.List<java.lang.String> getPrivilegesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="withGrantOptionInput" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.withGrantOptionInput"></a>

```java
public java.lang.Boolean|IResolvable getWithGrantOptionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.privileges"></a>

```java
public java.util.List<java.lang.String> getPrivileges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `withGrantOption`<sup>Required</sup> <a name="withGrantOption" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.withGrantOption"></a>

```java
public java.lang.Boolean|IResolvable getWithGrantOption();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultPrivilegesConfig <a name="DefaultPrivilegesConfig" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.Initializer"></a>

```java
import io.cdktn.providers.postgresql.default_privileges.DefaultPrivilegesConfig;

DefaultPrivilegesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .database(java.lang.String)
    .objectType(java.lang.String)
    .owner(java.lang.String)
    .privileges(java.util.List<java.lang.String>)
    .role(java.lang.String)
//  .id(java.lang.String)
//  .schema(java.lang.String)
//  .withGrantOption(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database to grant default privileges for this role. |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.objectType">objectType</a></code> | <code>java.lang.String</code> | The PostgreSQL object type to set the default privileges on (one of: table, sequence, function, routine, type, schema). |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.owner">owner</a></code> | <code>java.lang.String</code> | Target role for which to alter default privileges. |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.privileges">privileges</a></code> | <code>java.util.List<java.lang.String></code> | The list of privileges to apply as default privileges. |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.role">role</a></code> | <code>java.lang.String</code> | The name of the role to which grant default privileges on. |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#id DefaultPrivileges#id}. |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The database schema to set default privileges for this role. |
| <code><a href="#@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.withGrantOption">withGrantOption</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Permit the grant recipient to grant it to others. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database to grant default privileges for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#database DefaultPrivileges#database}

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

The PostgreSQL object type to set the default privileges on (one of: table, sequence, function, routine, type, schema).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#object_type DefaultPrivileges#object_type}

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

Target role for which to alter default privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#owner DefaultPrivileges#owner}

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.privileges"></a>

```java
public java.util.List<java.lang.String> getPrivileges();
```

- *Type:* java.util.List<java.lang.String>

The list of privileges to apply as default privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#privileges DefaultPrivileges#privileges}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

The name of the role to which grant default privileges on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#role DefaultPrivileges#role}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#id DefaultPrivileges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The database schema to set default privileges for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#schema DefaultPrivileges#schema}

---

##### `withGrantOption`<sup>Optional</sup> <a name="withGrantOption" id="@cdktn/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.withGrantOption"></a>

```java
public java.lang.Boolean|IResolvable getWithGrantOption();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Permit the grant recipient to grant it to others.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#with_grant_option DefaultPrivileges#with_grant_option}

---



