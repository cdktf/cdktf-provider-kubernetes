# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-kubernetes.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesProvider <a name="KubernetesProvider" id="@cdktf/provider-kubernetes.provider.KubernetesProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs kubernetes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-kubernetes'

new provider.KubernetesProvider(scope: Construct, id: string, config?: KubernetesProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig">KubernetesProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig">KubernetesProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetClientKey">resetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetClusterCaCertificate">resetClusterCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigContext">resetConfigContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigContextAuthInfo">resetConfigContextAuthInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigContextCluster">resetConfigContextCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigPath">resetConfigPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigPaths">resetConfigPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetExec">resetExec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetExperiments">resetExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetIgnoreAnnotations">resetIgnoreAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetIgnoreLabels">resetIgnoreLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetInsecure">resetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetProxyUrl">resetProxyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetTlsServerName">resetTlsServerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetClientCertificate"></a>

```typescript
public resetClientCertificate(): void
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetClientKey"></a>

```typescript
public resetClientKey(): void
```

##### `resetClusterCaCertificate` <a name="resetClusterCaCertificate" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetClusterCaCertificate"></a>

```typescript
public resetClusterCaCertificate(): void
```

##### `resetConfigContext` <a name="resetConfigContext" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigContext"></a>

```typescript
public resetConfigContext(): void
```

##### `resetConfigContextAuthInfo` <a name="resetConfigContextAuthInfo" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigContextAuthInfo"></a>

```typescript
public resetConfigContextAuthInfo(): void
```

##### `resetConfigContextCluster` <a name="resetConfigContextCluster" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigContextCluster"></a>

```typescript
public resetConfigContextCluster(): void
```

##### `resetConfigPath` <a name="resetConfigPath" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigPath"></a>

```typescript
public resetConfigPath(): void
```

##### `resetConfigPaths` <a name="resetConfigPaths" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigPaths"></a>

```typescript
public resetConfigPaths(): void
```

##### `resetExec` <a name="resetExec" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetExec"></a>

```typescript
public resetExec(): void
```

##### `resetExperiments` <a name="resetExperiments" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetExperiments"></a>

```typescript
public resetExperiments(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetIgnoreAnnotations` <a name="resetIgnoreAnnotations" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetIgnoreAnnotations"></a>

```typescript
public resetIgnoreAnnotations(): void
```

##### `resetIgnoreLabels` <a name="resetIgnoreLabels" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetIgnoreLabels"></a>

```typescript
public resetIgnoreLabels(): void
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetInsecure"></a>

```typescript
public resetInsecure(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetProxyUrl` <a name="resetProxyUrl" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetProxyUrl"></a>

```typescript
public resetProxyUrl(): void
```

##### `resetTlsServerName` <a name="resetTlsServerName" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetTlsServerName"></a>

```typescript
public resetTlsServerName(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetUsername"></a>

```typescript
public resetUsername(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-kubernetes'

provider.KubernetesProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-kubernetes'

provider.KubernetesProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-kubernetes'

provider.KubernetesProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktf/provider-kubernetes'

provider.KubernetesProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KubernetesProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KubernetesProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KubernetesProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientCertificateInput">clientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientKeyInput">clientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clusterCaCertificateInput">clusterCaCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextAuthInfoInput">configContextAuthInfoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextClusterInput">configContextClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextInput">configContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPathInput">configPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPathsInput">configPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.execInput">execInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.experimentsInput">experimentsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreAnnotationsInput">ignoreAnnotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreLabelsInput">ignoreLabelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.insecureInput">insecureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.proxyUrlInput">proxyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tlsServerNameInput">tlsServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clusterCaCertificate">clusterCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContext">configContext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextAuthInfo">configContextAuthInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextCluster">configContextCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPath">configPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPaths">configPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.exec">exec</a></code> | <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.experiments">experiments</a></code> | <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreAnnotations">ignoreAnnotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreLabels">ignoreLabels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.proxyUrl">proxyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tlsServerName">tlsServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientCertificateInput"></a>

```typescript
public readonly clientCertificateInput: string;
```

- *Type:* string

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientKeyInput"></a>

```typescript
public readonly clientKeyInput: string;
```

- *Type:* string

---

##### `clusterCaCertificateInput`<sup>Optional</sup> <a name="clusterCaCertificateInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clusterCaCertificateInput"></a>

```typescript
public readonly clusterCaCertificateInput: string;
```

- *Type:* string

---

##### `configContextAuthInfoInput`<sup>Optional</sup> <a name="configContextAuthInfoInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextAuthInfoInput"></a>

```typescript
public readonly configContextAuthInfoInput: string;
```

- *Type:* string

---

##### `configContextClusterInput`<sup>Optional</sup> <a name="configContextClusterInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextClusterInput"></a>

```typescript
public readonly configContextClusterInput: string;
```

- *Type:* string

---

##### `configContextInput`<sup>Optional</sup> <a name="configContextInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextInput"></a>

```typescript
public readonly configContextInput: string;
```

- *Type:* string

---

##### `configPathInput`<sup>Optional</sup> <a name="configPathInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPathInput"></a>

```typescript
public readonly configPathInput: string;
```

- *Type:* string

---

##### `configPathsInput`<sup>Optional</sup> <a name="configPathsInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPathsInput"></a>

```typescript
public readonly configPathsInput: string[];
```

- *Type:* string[]

---

##### `execInput`<sup>Optional</sup> <a name="execInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.execInput"></a>

```typescript
public readonly execInput: KubernetesProviderExec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a>

---

##### `experimentsInput`<sup>Optional</sup> <a name="experimentsInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.experimentsInput"></a>

```typescript
public readonly experimentsInput: KubernetesProviderExperiments;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a>

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `ignoreAnnotationsInput`<sup>Optional</sup> <a name="ignoreAnnotationsInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreAnnotationsInput"></a>

```typescript
public readonly ignoreAnnotationsInput: string[];
```

- *Type:* string[]

---

##### `ignoreLabelsInput`<sup>Optional</sup> <a name="ignoreLabelsInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreLabelsInput"></a>

```typescript
public readonly ignoreLabelsInput: string[];
```

- *Type:* string[]

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.insecureInput"></a>

```typescript
public readonly insecureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `proxyUrlInput`<sup>Optional</sup> <a name="proxyUrlInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.proxyUrlInput"></a>

```typescript
public readonly proxyUrlInput: string;
```

- *Type:* string

---

##### `tlsServerNameInput`<sup>Optional</sup> <a name="tlsServerNameInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tlsServerNameInput"></a>

```typescript
public readonly tlsServerNameInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `clusterCaCertificate`<sup>Optional</sup> <a name="clusterCaCertificate" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clusterCaCertificate"></a>

```typescript
public readonly clusterCaCertificate: string;
```

- *Type:* string

---

##### `configContext`<sup>Optional</sup> <a name="configContext" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContext"></a>

```typescript
public readonly configContext: string;
```

- *Type:* string

---

##### `configContextAuthInfo`<sup>Optional</sup> <a name="configContextAuthInfo" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextAuthInfo"></a>

```typescript
public readonly configContextAuthInfo: string;
```

- *Type:* string

---

##### `configContextCluster`<sup>Optional</sup> <a name="configContextCluster" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextCluster"></a>

```typescript
public readonly configContextCluster: string;
```

- *Type:* string

---

##### `configPath`<sup>Optional</sup> <a name="configPath" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPath"></a>

```typescript
public readonly configPath: string;
```

- *Type:* string

---

##### `configPaths`<sup>Optional</sup> <a name="configPaths" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPaths"></a>

```typescript
public readonly configPaths: string[];
```

- *Type:* string[]

---

##### `exec`<sup>Optional</sup> <a name="exec" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.exec"></a>

```typescript
public readonly exec: KubernetesProviderExec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a>

---

##### `experiments`<sup>Optional</sup> <a name="experiments" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.experiments"></a>

```typescript
public readonly experiments: KubernetesProviderExperiments;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a>

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `ignoreAnnotations`<sup>Optional</sup> <a name="ignoreAnnotations" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreAnnotations"></a>

```typescript
public readonly ignoreAnnotations: string[];
```

- *Type:* string[]

---

##### `ignoreLabels`<sup>Optional</sup> <a name="ignoreLabels" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreLabels"></a>

```typescript
public readonly ignoreLabels: string[];
```

- *Type:* string[]

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `proxyUrl`<sup>Optional</sup> <a name="proxyUrl" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.proxyUrl"></a>

```typescript
public readonly proxyUrl: string;
```

- *Type:* string

---

##### `tlsServerName`<sup>Optional</sup> <a name="tlsServerName" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tlsServerName"></a>

```typescript
public readonly tlsServerName: string;
```

- *Type:* string

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesProviderConfig <a name="KubernetesProviderConfig" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-kubernetes'

const kubernetesProviderConfig: provider.KubernetesProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | PEM-encoded client certificate for TLS authentication. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clientKey">clientKey</a></code> | <code>string</code> | PEM-encoded client certificate key for TLS authentication. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clusterCaCertificate">clusterCaCertificate</a></code> | <code>string</code> | PEM-encoded root certificates bundle for TLS authentication. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContext">configContext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#config_context KubernetesProvider#config_context}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContextAuthInfo">configContextAuthInfo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#config_context_auth_info KubernetesProvider#config_context_auth_info}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContextCluster">configContextCluster</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#config_context_cluster KubernetesProvider#config_context_cluster}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configPath">configPath</a></code> | <code>string</code> | Path to the kube config file. Can be set with KUBE_CONFIG_PATH. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configPaths">configPaths</a></code> | <code>string[]</code> | A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.exec">exec</a></code> | <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a></code> | exec block. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.experiments">experiments</a></code> | <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a></code> | experiments block. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.host">host</a></code> | <code>string</code> | The hostname (in form of URI) of Kubernetes master. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.ignoreAnnotations">ignoreAnnotations</a></code> | <code>string[]</code> | List of Kubernetes metadata annotations to ignore across all resources handled by this provider for situations where external systems are managing certain resource annotations. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.ignoreLabels">ignoreLabels</a></code> | <code>string[]</code> | List of Kubernetes metadata labels to ignore across all resources handled by this provider for situations where external systems are managing certain resource labels. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether server should be accessed without verifying the TLS certificate. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.password">password</a></code> | <code>string</code> | The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.proxyUrl">proxyUrl</a></code> | <code>string</code> | URL to the proxy to be used for all API requests. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.tlsServerName">tlsServerName</a></code> | <code>string</code> | Server name passed to the server for SNI and is used in the client to check server certificates against. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.token">token</a></code> | <code>string</code> | Token to authenticate an service account. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.username">username</a></code> | <code>string</code> | The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#alias KubernetesProvider#alias}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

PEM-encoded client certificate for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#client_certificate KubernetesProvider#client_certificate}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

PEM-encoded client certificate key for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#client_key KubernetesProvider#client_key}

---

##### `clusterCaCertificate`<sup>Optional</sup> <a name="clusterCaCertificate" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clusterCaCertificate"></a>

```typescript
public readonly clusterCaCertificate: string;
```

- *Type:* string

PEM-encoded root certificates bundle for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#cluster_ca_certificate KubernetesProvider#cluster_ca_certificate}

---

##### `configContext`<sup>Optional</sup> <a name="configContext" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContext"></a>

```typescript
public readonly configContext: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#config_context KubernetesProvider#config_context}.

---

##### `configContextAuthInfo`<sup>Optional</sup> <a name="configContextAuthInfo" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContextAuthInfo"></a>

```typescript
public readonly configContextAuthInfo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#config_context_auth_info KubernetesProvider#config_context_auth_info}.

---

##### `configContextCluster`<sup>Optional</sup> <a name="configContextCluster" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContextCluster"></a>

```typescript
public readonly configContextCluster: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#config_context_cluster KubernetesProvider#config_context_cluster}.

---

##### `configPath`<sup>Optional</sup> <a name="configPath" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configPath"></a>

```typescript
public readonly configPath: string;
```

- *Type:* string

Path to the kube config file. Can be set with KUBE_CONFIG_PATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#config_path KubernetesProvider#config_path}

---

##### `configPaths`<sup>Optional</sup> <a name="configPaths" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configPaths"></a>

```typescript
public readonly configPaths: string[];
```

- *Type:* string[]

A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#config_paths KubernetesProvider#config_paths}

---

##### `exec`<sup>Optional</sup> <a name="exec" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.exec"></a>

```typescript
public readonly exec: KubernetesProviderExec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a>

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#exec KubernetesProvider#exec}

---

##### `experiments`<sup>Optional</sup> <a name="experiments" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.experiments"></a>

```typescript
public readonly experiments: KubernetesProviderExperiments;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a>

experiments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#experiments KubernetesProvider#experiments}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The hostname (in form of URI) of Kubernetes master.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#host KubernetesProvider#host}

---

##### `ignoreAnnotations`<sup>Optional</sup> <a name="ignoreAnnotations" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.ignoreAnnotations"></a>

```typescript
public readonly ignoreAnnotations: string[];
```

- *Type:* string[]

List of Kubernetes metadata annotations to ignore across all resources handled by this provider for situations where external systems are managing certain resource annotations.

Each item is a regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#ignore_annotations KubernetesProvider#ignore_annotations}

---

##### `ignoreLabels`<sup>Optional</sup> <a name="ignoreLabels" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.ignoreLabels"></a>

```typescript
public readonly ignoreLabels: string[];
```

- *Type:* string[]

List of Kubernetes metadata labels to ignore across all resources handled by this provider for situations where external systems are managing certain resource labels.

Each item is a regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#ignore_labels KubernetesProvider#ignore_labels}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether server should be accessed without verifying the TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#insecure KubernetesProvider#insecure}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#password KubernetesProvider#password}

---

##### `proxyUrl`<sup>Optional</sup> <a name="proxyUrl" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.proxyUrl"></a>

```typescript
public readonly proxyUrl: string;
```

- *Type:* string

URL to the proxy to be used for all API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#proxy_url KubernetesProvider#proxy_url}

---

##### `tlsServerName`<sup>Optional</sup> <a name="tlsServerName" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.tlsServerName"></a>

```typescript
public readonly tlsServerName: string;
```

- *Type:* string

Server name passed to the server for SNI and is used in the client to check server certificates against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#tls_server_name KubernetesProvider#tls_server_name}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Token to authenticate an service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#token KubernetesProvider#token}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#username KubernetesProvider#username}

---

### KubernetesProviderExec <a name="KubernetesProviderExec" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-kubernetes'

const kubernetesProviderExec: provider.KubernetesProviderExec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.apiVersion">apiVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#api_version KubernetesProvider#api_version}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.command">command</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#command KubernetesProvider#command}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.args">args</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#args KubernetesProvider#args}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#env KubernetesProvider#env}. |

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#api_version KubernetesProvider#api_version}.

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#command KubernetesProvider#command}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#args KubernetesProvider#args}.

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#env KubernetesProvider#env}.

---

### KubernetesProviderExperiments <a name="KubernetesProviderExperiments" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-kubernetes'

const kubernetesProviderExperiments: provider.KubernetesProviderExperiments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments.property.manifestResource">manifestResource</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable the `kubernetes_manifest` resource. |

---

##### `manifestResource`<sup>Optional</sup> <a name="manifestResource" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments.property.manifestResource"></a>

```typescript
public readonly manifestResource: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable the `kubernetes_manifest` resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#manifest_resource KubernetesProvider#manifest_resource}

---



