# `publication` Submodule <a name="`publication` Submodule" id="@cdktn/provider-postgresql.publication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Publication <a name="Publication" id="@cdktn/provider-postgresql.publication.Publication"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/publication postgresql_publication}.

#### Initializers <a name="Initializers" id="@cdktn/provider-postgresql.publication.Publication.Initializer"></a>

```typescript
import { publication } from '@cdktn/provider-postgresql'

new publication.Publication(scope: Construct, id: string, config: PublicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-postgresql.publication.PublicationConfig">PublicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-postgresql.publication.Publication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-postgresql.publication.Publication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-postgresql.publication.Publication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-postgresql.publication.PublicationConfig">PublicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.resetAllTables">resetAllTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.resetDropCascade">resetDropCascade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.resetPublishParam">resetPublishParam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.resetPublishViaPartitionRootParam">resetPublishViaPartitionRootParam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.resetTables">resetTables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-postgresql.publication.Publication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-postgresql.publication.Publication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-postgresql.publication.Publication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-postgresql.publication.Publication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-postgresql.publication.Publication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-postgresql.publication.Publication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-postgresql.publication.Publication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-postgresql.publication.Publication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-postgresql.publication.Publication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-postgresql.publication.Publication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-postgresql.publication.Publication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-postgresql.publication.Publication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-postgresql.publication.Publication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-postgresql.publication.Publication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-postgresql.publication.Publication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-postgresql.publication.Publication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-postgresql.publication.Publication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-postgresql.publication.Publication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-postgresql.publication.Publication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-postgresql.publication.Publication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-postgresql.publication.Publication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-postgresql.publication.Publication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-postgresql.publication.Publication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-postgresql.publication.Publication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-postgresql.publication.Publication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-postgresql.publication.Publication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-postgresql.publication.Publication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-postgresql.publication.Publication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-postgresql.publication.Publication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-postgresql.publication.Publication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-postgresql.publication.Publication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-postgresql.publication.Publication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-postgresql.publication.Publication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-postgresql.publication.Publication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-postgresql.publication.Publication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-postgresql.publication.Publication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-postgresql.publication.Publication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-postgresql.publication.Publication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-postgresql.publication.Publication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-postgresql.publication.Publication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-postgresql.publication.Publication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-postgresql.publication.Publication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-postgresql.publication.Publication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllTables` <a name="resetAllTables" id="@cdktn/provider-postgresql.publication.Publication.resetAllTables"></a>

```typescript
public resetAllTables(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-postgresql.publication.Publication.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetDropCascade` <a name="resetDropCascade" id="@cdktn/provider-postgresql.publication.Publication.resetDropCascade"></a>

```typescript
public resetDropCascade(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-postgresql.publication.Publication.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktn/provider-postgresql.publication.Publication.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetPublishParam` <a name="resetPublishParam" id="@cdktn/provider-postgresql.publication.Publication.resetPublishParam"></a>

```typescript
public resetPublishParam(): void
```

##### `resetPublishViaPartitionRootParam` <a name="resetPublishViaPartitionRootParam" id="@cdktn/provider-postgresql.publication.Publication.resetPublishViaPartitionRootParam"></a>

```typescript
public resetPublishViaPartitionRootParam(): void
```

##### `resetTables` <a name="resetTables" id="@cdktn/provider-postgresql.publication.Publication.resetTables"></a>

```typescript
public resetTables(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Publication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-postgresql.publication.Publication.isConstruct"></a>

```typescript
import { publication } from '@cdktn/provider-postgresql'

publication.Publication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-postgresql.publication.Publication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-postgresql.publication.Publication.isTerraformElement"></a>

```typescript
import { publication } from '@cdktn/provider-postgresql'

publication.Publication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-postgresql.publication.Publication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-postgresql.publication.Publication.isTerraformResource"></a>

```typescript
import { publication } from '@cdktn/provider-postgresql'

publication.Publication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-postgresql.publication.Publication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-postgresql.publication.Publication.generateConfigForImport"></a>

```typescript
import { publication } from '@cdktn/provider-postgresql'

publication.Publication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Publication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-postgresql.publication.Publication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-postgresql.publication.Publication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Publication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-postgresql.publication.Publication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Publication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/publication#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-postgresql.publication.Publication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Publication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.allTablesInput">allTablesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.dropCascadeInput">dropCascadeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.publishParamInput">publishParamInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.publishViaPartitionRootParamInput">publishViaPartitionRootParamInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.tablesInput">tablesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.allTables">allTables</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.dropCascade">dropCascade</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.publishParam">publishParam</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.publishViaPartitionRootParam">publishViaPartitionRootParam</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.tables">tables</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-postgresql.publication.Publication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-postgresql.publication.Publication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-postgresql.publication.Publication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-postgresql.publication.Publication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-postgresql.publication.Publication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-postgresql.publication.Publication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-postgresql.publication.Publication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-postgresql.publication.Publication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-postgresql.publication.Publication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-postgresql.publication.Publication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-postgresql.publication.Publication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-postgresql.publication.Publication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-postgresql.publication.Publication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-postgresql.publication.Publication.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `allTablesInput`<sup>Optional</sup> <a name="allTablesInput" id="@cdktn/provider-postgresql.publication.Publication.property.allTablesInput"></a>

```typescript
public readonly allTablesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-postgresql.publication.Publication.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `dropCascadeInput`<sup>Optional</sup> <a name="dropCascadeInput" id="@cdktn/provider-postgresql.publication.Publication.property.dropCascadeInput"></a>

```typescript
public readonly dropCascadeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-postgresql.publication.Publication.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-postgresql.publication.Publication.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktn/provider-postgresql.publication.Publication.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `publishParamInput`<sup>Optional</sup> <a name="publishParamInput" id="@cdktn/provider-postgresql.publication.Publication.property.publishParamInput"></a>

```typescript
public readonly publishParamInput: string[];
```

- *Type:* string[]

---

##### `publishViaPartitionRootParamInput`<sup>Optional</sup> <a name="publishViaPartitionRootParamInput" id="@cdktn/provider-postgresql.publication.Publication.property.publishViaPartitionRootParamInput"></a>

```typescript
public readonly publishViaPartitionRootParamInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tablesInput`<sup>Optional</sup> <a name="tablesInput" id="@cdktn/provider-postgresql.publication.Publication.property.tablesInput"></a>

```typescript
public readonly tablesInput: string[];
```

- *Type:* string[]

---

##### `allTables`<sup>Required</sup> <a name="allTables" id="@cdktn/provider-postgresql.publication.Publication.property.allTables"></a>

```typescript
public readonly allTables: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-postgresql.publication.Publication.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `dropCascade`<sup>Required</sup> <a name="dropCascade" id="@cdktn/provider-postgresql.publication.Publication.property.dropCascade"></a>

```typescript
public readonly dropCascade: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-postgresql.publication.Publication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-postgresql.publication.Publication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-postgresql.publication.Publication.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `publishParam`<sup>Required</sup> <a name="publishParam" id="@cdktn/provider-postgresql.publication.Publication.property.publishParam"></a>

```typescript
public readonly publishParam: string[];
```

- *Type:* string[]

---

##### `publishViaPartitionRootParam`<sup>Required</sup> <a name="publishViaPartitionRootParam" id="@cdktn/provider-postgresql.publication.Publication.property.publishViaPartitionRootParam"></a>

```typescript
public readonly publishViaPartitionRootParam: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktn/provider-postgresql.publication.Publication.property.tables"></a>

```typescript
public readonly tables: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.publication.Publication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-postgresql.publication.Publication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PublicationConfig <a name="PublicationConfig" id="@cdktn/provider-postgresql.publication.PublicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-postgresql.publication.PublicationConfig.Initializer"></a>

```typescript
import { publication } from '@cdktn/provider-postgresql'

const publicationConfig: publication.PublicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.publication.PublicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.PublicationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.PublicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.PublicationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.PublicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.PublicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.PublicationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.publication.PublicationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/publication#name Publication#name}. |
| <code><a href="#@cdktn/provider-postgresql.publication.PublicationConfig.property.allTables">allTables</a></code> | <code>boolean \| cdktn.IResolvable</code> | Sets the tables list to publish to ALL tables. |
| <code><a href="#@cdktn/provider-postgresql.publication.PublicationConfig.property.database">database</a></code> | <code>string</code> | Sets the database to add the publication for. |
| <code><a href="#@cdktn/provider-postgresql.publication.PublicationConfig.property.dropCascade">dropCascade</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, will also drop all the objects that depend on the publication, and in turn all objects that depend on those objects. |
| <code><a href="#@cdktn/provider-postgresql.publication.PublicationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/publication#id Publication#id}. |
| <code><a href="#@cdktn/provider-postgresql.publication.PublicationConfig.property.owner">owner</a></code> | <code>string</code> | Sets the owner of the publication. |
| <code><a href="#@cdktn/provider-postgresql.publication.PublicationConfig.property.publishParam">publishParam</a></code> | <code>string[]</code> | Sets which DML operations will be published. |
| <code><a href="#@cdktn/provider-postgresql.publication.PublicationConfig.property.publishViaPartitionRootParam">publishViaPartitionRootParam</a></code> | <code>boolean \| cdktn.IResolvable</code> | Sets whether changes in a partitioned table using the identity and schema of the partitioned table. |
| <code><a href="#@cdktn/provider-postgresql.publication.PublicationConfig.property.tables">tables</a></code> | <code>string[]</code> | Sets the tables list to publish. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-postgresql.publication.PublicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-postgresql.publication.PublicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-postgresql.publication.PublicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-postgresql.publication.PublicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-postgresql.publication.PublicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-postgresql.publication.PublicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-postgresql.publication.PublicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-postgresql.publication.PublicationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/publication#name Publication#name}.

---

##### `allTables`<sup>Optional</sup> <a name="allTables" id="@cdktn/provider-postgresql.publication.PublicationConfig.property.allTables"></a>

```typescript
public readonly allTables: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Sets the tables list to publish to ALL tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/publication#all_tables Publication#all_tables}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-postgresql.publication.PublicationConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Sets the database to add the publication for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/publication#database Publication#database}

---

##### `dropCascade`<sup>Optional</sup> <a name="dropCascade" id="@cdktn/provider-postgresql.publication.PublicationConfig.property.dropCascade"></a>

```typescript
public readonly dropCascade: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, will also drop all the objects that depend on the publication, and in turn all objects that depend on those objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/publication#drop_cascade Publication#drop_cascade}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-postgresql.publication.PublicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/publication#id Publication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-postgresql.publication.PublicationConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Sets the owner of the publication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/publication#owner Publication#owner}

---

##### `publishParam`<sup>Optional</sup> <a name="publishParam" id="@cdktn/provider-postgresql.publication.PublicationConfig.property.publishParam"></a>

```typescript
public readonly publishParam: string[];
```

- *Type:* string[]

Sets which DML operations will be published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/publication#publish_param Publication#publish_param}

---

##### `publishViaPartitionRootParam`<sup>Optional</sup> <a name="publishViaPartitionRootParam" id="@cdktn/provider-postgresql.publication.PublicationConfig.property.publishViaPartitionRootParam"></a>

```typescript
public readonly publishViaPartitionRootParam: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Sets whether changes in a partitioned table using the identity and schema of the partitioned table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/publication#publish_via_partition_root_param Publication#publish_via_partition_root_param}

---

##### `tables`<sup>Optional</sup> <a name="tables" id="@cdktn/provider-postgresql.publication.PublicationConfig.property.tables"></a>

```typescript
public readonly tables: string[];
```

- *Type:* string[]

Sets the tables list to publish.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/publication#tables Publication#tables}

---



