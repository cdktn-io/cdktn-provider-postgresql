# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-postgresql.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresqlProvider <a name="PostgresqlProvider" id="@cdktn/provider-postgresql.provider.PostgresqlProvider"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs postgresql}.

#### Initializers <a name="Initializers" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-postgresql'

new provider.PostgresqlProvider(scope: Construct, id: string, config?: PostgresqlProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderConfig">PostgresqlProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderConfig">PostgresqlProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamAuth">resetAwsRdsIamAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamProfile">resetAwsRdsIamProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamProviderRoleArn">resetAwsRdsIamProviderRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamRegion">resetAwsRdsIamRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.resetAzureIdentityAuth">resetAzureIdentityAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.resetAzureTenantId">resetAzureTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.resetClientcert">resetClientcert</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.resetConnectTimeout">resetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.resetDatabaseUsername">resetDatabaseUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.resetExpectedVersion">resetExpectedVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.resetGcpIamImpersonateServiceAccount">resetGcpIamImpersonateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.resetMaxConnections">resetMaxConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.resetScheme">resetScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.resetSslmode">resetSslmode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.resetSslMode">resetSslMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.resetSslrootcert">resetSslrootcert</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.resetSuperuser">resetSuperuser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAwsRdsIamAuth` <a name="resetAwsRdsIamAuth" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamAuth"></a>

```typescript
public resetAwsRdsIamAuth(): void
```

##### `resetAwsRdsIamProfile` <a name="resetAwsRdsIamProfile" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamProfile"></a>

```typescript
public resetAwsRdsIamProfile(): void
```

##### `resetAwsRdsIamProviderRoleArn` <a name="resetAwsRdsIamProviderRoleArn" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamProviderRoleArn"></a>

```typescript
public resetAwsRdsIamProviderRoleArn(): void
```

##### `resetAwsRdsIamRegion` <a name="resetAwsRdsIamRegion" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamRegion"></a>

```typescript
public resetAwsRdsIamRegion(): void
```

##### `resetAzureIdentityAuth` <a name="resetAzureIdentityAuth" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.resetAzureIdentityAuth"></a>

```typescript
public resetAzureIdentityAuth(): void
```

##### `resetAzureTenantId` <a name="resetAzureTenantId" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.resetAzureTenantId"></a>

```typescript
public resetAzureTenantId(): void
```

##### `resetClientcert` <a name="resetClientcert" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.resetClientcert"></a>

```typescript
public resetClientcert(): void
```

##### `resetConnectTimeout` <a name="resetConnectTimeout" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.resetConnectTimeout"></a>

```typescript
public resetConnectTimeout(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetDatabaseUsername` <a name="resetDatabaseUsername" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.resetDatabaseUsername"></a>

```typescript
public resetDatabaseUsername(): void
```

##### `resetExpectedVersion` <a name="resetExpectedVersion" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.resetExpectedVersion"></a>

```typescript
public resetExpectedVersion(): void
```

##### `resetGcpIamImpersonateServiceAccount` <a name="resetGcpIamImpersonateServiceAccount" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.resetGcpIamImpersonateServiceAccount"></a>

```typescript
public resetGcpIamImpersonateServiceAccount(): void
```

##### `resetHost` <a name="resetHost" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetMaxConnections` <a name="resetMaxConnections" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.resetMaxConnections"></a>

```typescript
public resetMaxConnections(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetScheme` <a name="resetScheme" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.resetScheme"></a>

```typescript
public resetScheme(): void
```

##### `resetSslmode` <a name="resetSslmode" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.resetSslmode"></a>

```typescript
public resetSslmode(): void
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.resetSslMode"></a>

```typescript
public resetSslMode(): void
```

##### `resetSslrootcert` <a name="resetSslrootcert" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.resetSslrootcert"></a>

```typescript
public resetSslrootcert(): void
```

##### `resetSuperuser` <a name="resetSuperuser" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.resetSuperuser"></a>

```typescript
public resetSuperuser(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.resetUsername"></a>

```typescript
public resetUsername(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PostgresqlProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktn/provider-postgresql'

provider.PostgresqlProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktn/provider-postgresql'

provider.PostgresqlProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktn/provider-postgresql'

provider.PostgresqlProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktn/provider-postgresql'

provider.PostgresqlProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PostgresqlProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PostgresqlProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PostgresqlProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PostgresqlProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamAuthInput">awsRdsIamAuthInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProfileInput">awsRdsIamProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProviderRoleArnInput">awsRdsIamProviderRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamRegionInput">awsRdsIamRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.azureIdentityAuthInput">azureIdentityAuthInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.azureTenantIdInput">azureTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.clientcertInput">clientcertInput</a></code> | <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.connectTimeoutInput">connectTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.databaseUsernameInput">databaseUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.expectedVersionInput">expectedVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.gcpIamImpersonateServiceAccountInput">gcpIamImpersonateServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.maxConnectionsInput">maxConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.sslmodeInput">sslmodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.sslModeInput">sslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.sslrootcertInput">sslrootcertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.superuserInput">superuserInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamAuth">awsRdsIamAuth</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProfile">awsRdsIamProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProviderRoleArn">awsRdsIamProviderRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamRegion">awsRdsIamRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.azureIdentityAuth">azureIdentityAuth</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.clientcert">clientcert</a></code> | <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.connectTimeout">connectTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.databaseUsername">databaseUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.expectedVersion">expectedVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.gcpIamImpersonateServiceAccount">gcpIamImpersonateServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.maxConnections">maxConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.sslmode">sslmode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.sslrootcert">sslrootcert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.superuser">superuser</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `awsRdsIamAuthInput`<sup>Optional</sup> <a name="awsRdsIamAuthInput" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamAuthInput"></a>

```typescript
public readonly awsRdsIamAuthInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `awsRdsIamProfileInput`<sup>Optional</sup> <a name="awsRdsIamProfileInput" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProfileInput"></a>

```typescript
public readonly awsRdsIamProfileInput: string;
```

- *Type:* string

---

##### `awsRdsIamProviderRoleArnInput`<sup>Optional</sup> <a name="awsRdsIamProviderRoleArnInput" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProviderRoleArnInput"></a>

```typescript
public readonly awsRdsIamProviderRoleArnInput: string;
```

- *Type:* string

---

##### `awsRdsIamRegionInput`<sup>Optional</sup> <a name="awsRdsIamRegionInput" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamRegionInput"></a>

```typescript
public readonly awsRdsIamRegionInput: string;
```

- *Type:* string

---

##### `azureIdentityAuthInput`<sup>Optional</sup> <a name="azureIdentityAuthInput" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.azureIdentityAuthInput"></a>

```typescript
public readonly azureIdentityAuthInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `azureTenantIdInput`<sup>Optional</sup> <a name="azureTenantIdInput" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.azureTenantIdInput"></a>

```typescript
public readonly azureTenantIdInput: string;
```

- *Type:* string

---

##### `clientcertInput`<sup>Optional</sup> <a name="clientcertInput" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.clientcertInput"></a>

```typescript
public readonly clientcertInput: PostgresqlProviderClientcert;
```

- *Type:* <a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a>

---

##### `connectTimeoutInput`<sup>Optional</sup> <a name="connectTimeoutInput" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.connectTimeoutInput"></a>

```typescript
public readonly connectTimeoutInput: number;
```

- *Type:* number

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `databaseUsernameInput`<sup>Optional</sup> <a name="databaseUsernameInput" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.databaseUsernameInput"></a>

```typescript
public readonly databaseUsernameInput: string;
```

- *Type:* string

---

##### `expectedVersionInput`<sup>Optional</sup> <a name="expectedVersionInput" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.expectedVersionInput"></a>

```typescript
public readonly expectedVersionInput: string;
```

- *Type:* string

---

##### `gcpIamImpersonateServiceAccountInput`<sup>Optional</sup> <a name="gcpIamImpersonateServiceAccountInput" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.gcpIamImpersonateServiceAccountInput"></a>

```typescript
public readonly gcpIamImpersonateServiceAccountInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `maxConnectionsInput`<sup>Optional</sup> <a name="maxConnectionsInput" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.maxConnectionsInput"></a>

```typescript
public readonly maxConnectionsInput: number;
```

- *Type:* number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `sslmodeInput`<sup>Optional</sup> <a name="sslmodeInput" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.sslmodeInput"></a>

```typescript
public readonly sslmodeInput: string;
```

- *Type:* string

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.sslModeInput"></a>

```typescript
public readonly sslModeInput: string;
```

- *Type:* string

---

##### `sslrootcertInput`<sup>Optional</sup> <a name="sslrootcertInput" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.sslrootcertInput"></a>

```typescript
public readonly sslrootcertInput: string;
```

- *Type:* string

---

##### `superuserInput`<sup>Optional</sup> <a name="superuserInput" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.superuserInput"></a>

```typescript
public readonly superuserInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `awsRdsIamAuth`<sup>Optional</sup> <a name="awsRdsIamAuth" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamAuth"></a>

```typescript
public readonly awsRdsIamAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `awsRdsIamProfile`<sup>Optional</sup> <a name="awsRdsIamProfile" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProfile"></a>

```typescript
public readonly awsRdsIamProfile: string;
```

- *Type:* string

---

##### `awsRdsIamProviderRoleArn`<sup>Optional</sup> <a name="awsRdsIamProviderRoleArn" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProviderRoleArn"></a>

```typescript
public readonly awsRdsIamProviderRoleArn: string;
```

- *Type:* string

---

##### `awsRdsIamRegion`<sup>Optional</sup> <a name="awsRdsIamRegion" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamRegion"></a>

```typescript
public readonly awsRdsIamRegion: string;
```

- *Type:* string

---

##### `azureIdentityAuth`<sup>Optional</sup> <a name="azureIdentityAuth" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.azureIdentityAuth"></a>

```typescript
public readonly azureIdentityAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

---

##### `clientcert`<sup>Optional</sup> <a name="clientcert" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.clientcert"></a>

```typescript
public readonly clientcert: PostgresqlProviderClientcert;
```

- *Type:* <a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a>

---

##### `connectTimeout`<sup>Optional</sup> <a name="connectTimeout" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.connectTimeout"></a>

```typescript
public readonly connectTimeout: number;
```

- *Type:* number

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `databaseUsername`<sup>Optional</sup> <a name="databaseUsername" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.databaseUsername"></a>

```typescript
public readonly databaseUsername: string;
```

- *Type:* string

---

##### `expectedVersion`<sup>Optional</sup> <a name="expectedVersion" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.expectedVersion"></a>

```typescript
public readonly expectedVersion: string;
```

- *Type:* string

---

##### `gcpIamImpersonateServiceAccount`<sup>Optional</sup> <a name="gcpIamImpersonateServiceAccount" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.gcpIamImpersonateServiceAccount"></a>

```typescript
public readonly gcpIamImpersonateServiceAccount: string;
```

- *Type:* string

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `maxConnections`<sup>Optional</sup> <a name="maxConnections" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.maxConnections"></a>

```typescript
public readonly maxConnections: number;
```

- *Type:* number

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `sslmode`<sup>Optional</sup> <a name="sslmode" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.sslmode"></a>

```typescript
public readonly sslmode: string;
```

- *Type:* string

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `sslrootcert`<sup>Optional</sup> <a name="sslrootcert" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.sslrootcert"></a>

```typescript
public readonly sslrootcert: string;
```

- *Type:* string

---

##### `superuser`<sup>Optional</sup> <a name="superuser" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.superuser"></a>

```typescript
public readonly superuser: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-postgresql.provider.PostgresqlProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresqlProviderClientcert <a name="PostgresqlProviderClientcert" id="@cdktn/provider-postgresql.provider.PostgresqlProviderClientcert"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-postgresql.provider.PostgresqlProviderClientcert.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-postgresql'

const postgresqlProviderClientcert: provider.PostgresqlProviderClientcert = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderClientcert.property.cert">cert</a></code> | <code>string</code> | The SSL client certificate file path. The file must contain PEM encoded data. |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderClientcert.property.key">key</a></code> | <code>string</code> | The SSL client certificate private key file path. The file must contain PEM encoded data. |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderClientcert.property.sslinline">sslinline</a></code> | <code>boolean \| cdktn.IResolvable</code> | Must be set to true if you are inlining the cert/key instead of using a file path. |

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-postgresql.provider.PostgresqlProviderClientcert.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

The SSL client certificate file path. The file must contain PEM encoded data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#cert PostgresqlProvider#cert}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-postgresql.provider.PostgresqlProviderClientcert.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The SSL client certificate private key file path. The file must contain PEM encoded data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#key PostgresqlProvider#key}

---

##### `sslinline`<sup>Optional</sup> <a name="sslinline" id="@cdktn/provider-postgresql.provider.PostgresqlProviderClientcert.property.sslinline"></a>

```typescript
public readonly sslinline: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Must be set to true if you are inlining the cert/key instead of using a file path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#sslinline PostgresqlProvider#sslinline}

---

### PostgresqlProviderConfig <a name="PostgresqlProviderConfig" id="@cdktn/provider-postgresql.provider.PostgresqlProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-postgresql'

const postgresqlProviderConfig: provider.PostgresqlProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamAuth">awsRdsIamAuth</a></code> | <code>boolean \| cdktn.IResolvable</code> | Use rds_iam instead of password authentication (see: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html). |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamProfile">awsRdsIamProfile</a></code> | <code>string</code> | AWS profile to use for IAM auth. |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamProviderRoleArn">awsRdsIamProviderRoleArn</a></code> | <code>string</code> | AWS IAM role to assume for IAM auth. |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamRegion">awsRdsIamRegion</a></code> | <code>string</code> | AWS region to use for IAM auth. |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.azureIdentityAuth">azureIdentityAuth</a></code> | <code>boolean \| cdktn.IResolvable</code> | Use MS Azure identity OAuth token (see: https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-configure-sign-in-azure-ad-authentication). |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | MS Azure tenant ID (see: https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/client_config.html). |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.clientcert">clientcert</a></code> | <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a></code> | clientcert block. |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.connectTimeout">connectTimeout</a></code> | <code>number</code> | Maximum wait for connection, in seconds. Zero or not specified means wait indefinitely. |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.database">database</a></code> | <code>string</code> | The name of the database to connect to in order to connect to (defaults to `postgres`). |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.databaseUsername">databaseUsername</a></code> | <code>string</code> | Database username associated to the connected user (for user name maps). |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.expectedVersion">expectedVersion</a></code> | <code>string</code> | Specify the expected version of PostgreSQL. |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.gcpIamImpersonateServiceAccount">gcpIamImpersonateServiceAccount</a></code> | <code>string</code> | Service account to impersonate when using GCP IAM authentication. |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.host">host</a></code> | <code>string</code> | Name of PostgreSQL server address to connect to. |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.maxConnections">maxConnections</a></code> | <code>number</code> | Maximum number of connections to establish to the database. Zero means unlimited. |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.password">password</a></code> | <code>string</code> | Password to be used if the PostgreSQL server demands password authentication. |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.port">port</a></code> | <code>number</code> | The PostgreSQL port number to connect to at the server host, or socket file name extension for Unix-domain connections. |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.scheme">scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#scheme PostgresqlProvider#scheme}. |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.sslmode">sslmode</a></code> | <code>string</code> | This option determines whether or with what priority a secure SSL TCP/IP connection will be negotiated with the PostgreSQL server. |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.sslMode">sslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#ssl_mode PostgresqlProvider#ssl_mode}. |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.sslrootcert">sslrootcert</a></code> | <code>string</code> | The SSL server root certificate file path. The file must contain PEM encoded data. |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.superuser">superuser</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specify if the user to connect as is a Postgres superuser or not.If not, some feature might be disabled (e.g.: Refreshing state password from Postgres). |
| <code><a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.username">username</a></code> | <code>string</code> | PostgreSQL user name to connect as. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#alias PostgresqlProvider#alias}

---

##### `awsRdsIamAuth`<sup>Optional</sup> <a name="awsRdsIamAuth" id="@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamAuth"></a>

```typescript
public readonly awsRdsIamAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Use rds_iam instead of password authentication (see: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#aws_rds_iam_auth PostgresqlProvider#aws_rds_iam_auth}

---

##### `awsRdsIamProfile`<sup>Optional</sup> <a name="awsRdsIamProfile" id="@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamProfile"></a>

```typescript
public readonly awsRdsIamProfile: string;
```

- *Type:* string

AWS profile to use for IAM auth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#aws_rds_iam_profile PostgresqlProvider#aws_rds_iam_profile}

---

##### `awsRdsIamProviderRoleArn`<sup>Optional</sup> <a name="awsRdsIamProviderRoleArn" id="@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamProviderRoleArn"></a>

```typescript
public readonly awsRdsIamProviderRoleArn: string;
```

- *Type:* string

AWS IAM role to assume for IAM auth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#aws_rds_iam_provider_role_arn PostgresqlProvider#aws_rds_iam_provider_role_arn}

---

##### `awsRdsIamRegion`<sup>Optional</sup> <a name="awsRdsIamRegion" id="@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamRegion"></a>

```typescript
public readonly awsRdsIamRegion: string;
```

- *Type:* string

AWS region to use for IAM auth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#aws_rds_iam_region PostgresqlProvider#aws_rds_iam_region}

---

##### `azureIdentityAuth`<sup>Optional</sup> <a name="azureIdentityAuth" id="@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.azureIdentityAuth"></a>

```typescript
public readonly azureIdentityAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Use MS Azure identity OAuth token (see: https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-configure-sign-in-azure-ad-authentication).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#azure_identity_auth PostgresqlProvider#azure_identity_auth}

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

MS Azure tenant ID (see: https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/client_config.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#azure_tenant_id PostgresqlProvider#azure_tenant_id}

---

##### `clientcert`<sup>Optional</sup> <a name="clientcert" id="@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.clientcert"></a>

```typescript
public readonly clientcert: PostgresqlProviderClientcert;
```

- *Type:* <a href="#@cdktn/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a>

clientcert block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#clientcert PostgresqlProvider#clientcert}

---

##### `connectTimeout`<sup>Optional</sup> <a name="connectTimeout" id="@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.connectTimeout"></a>

```typescript
public readonly connectTimeout: number;
```

- *Type:* number

Maximum wait for connection, in seconds. Zero or not specified means wait indefinitely.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#connect_timeout PostgresqlProvider#connect_timeout}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The name of the database to connect to in order to connect to (defaults to `postgres`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#database PostgresqlProvider#database}

---

##### `databaseUsername`<sup>Optional</sup> <a name="databaseUsername" id="@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.databaseUsername"></a>

```typescript
public readonly databaseUsername: string;
```

- *Type:* string

Database username associated to the connected user (for user name maps).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#database_username PostgresqlProvider#database_username}

---

##### `expectedVersion`<sup>Optional</sup> <a name="expectedVersion" id="@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.expectedVersion"></a>

```typescript
public readonly expectedVersion: string;
```

- *Type:* string

Specify the expected version of PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#expected_version PostgresqlProvider#expected_version}

---

##### `gcpIamImpersonateServiceAccount`<sup>Optional</sup> <a name="gcpIamImpersonateServiceAccount" id="@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.gcpIamImpersonateServiceAccount"></a>

```typescript
public readonly gcpIamImpersonateServiceAccount: string;
```

- *Type:* string

Service account to impersonate when using GCP IAM authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#gcp_iam_impersonate_service_account PostgresqlProvider#gcp_iam_impersonate_service_account}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Name of PostgreSQL server address to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#host PostgresqlProvider#host}

---

##### `maxConnections`<sup>Optional</sup> <a name="maxConnections" id="@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.maxConnections"></a>

```typescript
public readonly maxConnections: number;
```

- *Type:* number

Maximum number of connections to establish to the database. Zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#max_connections PostgresqlProvider#max_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password to be used if the PostgreSQL server demands password authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#password PostgresqlProvider#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The PostgreSQL port number to connect to at the server host, or socket file name extension for Unix-domain connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#port PostgresqlProvider#port}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#scheme PostgresqlProvider#scheme}.

---

##### `sslmode`<sup>Optional</sup> <a name="sslmode" id="@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.sslmode"></a>

```typescript
public readonly sslmode: string;
```

- *Type:* string

This option determines whether or with what priority a secure SSL TCP/IP connection will be negotiated with the PostgreSQL server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#sslmode PostgresqlProvider#sslmode}

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#ssl_mode PostgresqlProvider#ssl_mode}.

---

##### `sslrootcert`<sup>Optional</sup> <a name="sslrootcert" id="@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.sslrootcert"></a>

```typescript
public readonly sslrootcert: string;
```

- *Type:* string

The SSL server root certificate file path. The file must contain PEM encoded data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#sslrootcert PostgresqlProvider#sslrootcert}

---

##### `superuser`<sup>Optional</sup> <a name="superuser" id="@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.superuser"></a>

```typescript
public readonly superuser: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specify if the user to connect as is a Postgres superuser or not.If not, some feature might be disabled (e.g.: Refreshing state password from Postgres).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#superuser PostgresqlProvider#superuser}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-postgresql.provider.PostgresqlProviderConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

PostgreSQL user name to connect as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#username PostgresqlProvider#username}

---



