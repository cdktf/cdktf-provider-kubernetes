# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-kubernetes.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesProvider <a name="KubernetesProvider" id="@cdktf/provider-kubernetes.provider.KubernetesProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs kubernetes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/provider"

provider.NewKubernetesProvider(scope Construct, id *string, config KubernetesProviderConfig) KubernetesProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig">KubernetesProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig">KubernetesProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetClientCertificate">ResetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetClientKey">ResetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetClusterCaCertificate">ResetClusterCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigContext">ResetConfigContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigContextAuthInfo">ResetConfigContextAuthInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigContextCluster">ResetConfigContextCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigPath">ResetConfigPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigPaths">ResetConfigPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetExec">ResetExec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetExperiments">ResetExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetIgnoreAnnotations">ResetIgnoreAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetIgnoreLabels">ResetIgnoreLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetInsecure">ResetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetProxyUrl">ResetProxyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetTlsServerName">ResetTlsServerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetClientCertificate"></a>

```go
func ResetClientCertificate()
```

##### `ResetClientKey` <a name="ResetClientKey" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetClientKey"></a>

```go
func ResetClientKey()
```

##### `ResetClusterCaCertificate` <a name="ResetClusterCaCertificate" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetClusterCaCertificate"></a>

```go
func ResetClusterCaCertificate()
```

##### `ResetConfigContext` <a name="ResetConfigContext" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigContext"></a>

```go
func ResetConfigContext()
```

##### `ResetConfigContextAuthInfo` <a name="ResetConfigContextAuthInfo" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigContextAuthInfo"></a>

```go
func ResetConfigContextAuthInfo()
```

##### `ResetConfigContextCluster` <a name="ResetConfigContextCluster" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigContextCluster"></a>

```go
func ResetConfigContextCluster()
```

##### `ResetConfigPath` <a name="ResetConfigPath" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigPath"></a>

```go
func ResetConfigPath()
```

##### `ResetConfigPaths` <a name="ResetConfigPaths" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigPaths"></a>

```go
func ResetConfigPaths()
```

##### `ResetExec` <a name="ResetExec" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetExec"></a>

```go
func ResetExec()
```

##### `ResetExperiments` <a name="ResetExperiments" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetExperiments"></a>

```go
func ResetExperiments()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetHost"></a>

```go
func ResetHost()
```

##### `ResetIgnoreAnnotations` <a name="ResetIgnoreAnnotations" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetIgnoreAnnotations"></a>

```go
func ResetIgnoreAnnotations()
```

##### `ResetIgnoreLabels` <a name="ResetIgnoreLabels" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetIgnoreLabels"></a>

```go
func ResetIgnoreLabels()
```

##### `ResetInsecure` <a name="ResetInsecure" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetInsecure"></a>

```go
func ResetInsecure()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetProxyUrl` <a name="ResetProxyUrl" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetProxyUrl"></a>

```go
func ResetProxyUrl()
```

##### `ResetTlsServerName` <a name="ResetTlsServerName" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetTlsServerName"></a>

```go
func ResetTlsServerName()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetToken"></a>

```go
func ResetToken()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetUsername"></a>

```go
func ResetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/provider"

provider.KubernetesProvider_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/provider"

provider.KubernetesProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/provider"

provider.KubernetesProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/provider"

provider.KubernetesProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KubernetesProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KubernetesProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KubernetesProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientCertificateInput">ClientCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientKeyInput">ClientKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clusterCaCertificateInput">ClusterCaCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextAuthInfoInput">ConfigContextAuthInfoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextClusterInput">ConfigContextClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextInput">ConfigContextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPathInput">ConfigPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPathsInput">ConfigPathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.execInput">ExecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.experimentsInput">ExperimentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreAnnotationsInput">IgnoreAnnotationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreLabelsInput">IgnoreLabelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.insecureInput">InsecureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.proxyUrlInput">ProxyUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tlsServerNameInput">TlsServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientKey">ClientKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clusterCaCertificate">ClusterCaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContext">ConfigContext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextAuthInfo">ConfigContextAuthInfo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextCluster">ConfigContextCluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPath">ConfigPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPaths">ConfigPaths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.exec">Exec</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.experiments">Experiments</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreAnnotations">IgnoreAnnotations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreLabels">IgnoreLabels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.insecure">Insecure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.proxyUrl">ProxyUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tlsServerName">TlsServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientCertificateInput"></a>

```go
func ClientCertificateInput() *string
```

- *Type:* *string

---

##### `ClientKeyInput`<sup>Optional</sup> <a name="ClientKeyInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientKeyInput"></a>

```go
func ClientKeyInput() *string
```

- *Type:* *string

---

##### `ClusterCaCertificateInput`<sup>Optional</sup> <a name="ClusterCaCertificateInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clusterCaCertificateInput"></a>

```go
func ClusterCaCertificateInput() *string
```

- *Type:* *string

---

##### `ConfigContextAuthInfoInput`<sup>Optional</sup> <a name="ConfigContextAuthInfoInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextAuthInfoInput"></a>

```go
func ConfigContextAuthInfoInput() *string
```

- *Type:* *string

---

##### `ConfigContextClusterInput`<sup>Optional</sup> <a name="ConfigContextClusterInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextClusterInput"></a>

```go
func ConfigContextClusterInput() *string
```

- *Type:* *string

---

##### `ConfigContextInput`<sup>Optional</sup> <a name="ConfigContextInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextInput"></a>

```go
func ConfigContextInput() *string
```

- *Type:* *string

---

##### `ConfigPathInput`<sup>Optional</sup> <a name="ConfigPathInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPathInput"></a>

```go
func ConfigPathInput() *string
```

- *Type:* *string

---

##### `ConfigPathsInput`<sup>Optional</sup> <a name="ConfigPathsInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPathsInput"></a>

```go
func ConfigPathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExecInput`<sup>Optional</sup> <a name="ExecInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.execInput"></a>

```go
func ExecInput() interface{}
```

- *Type:* interface{}

---

##### `ExperimentsInput`<sup>Optional</sup> <a name="ExperimentsInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.experimentsInput"></a>

```go
func ExperimentsInput() interface{}
```

- *Type:* interface{}

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `IgnoreAnnotationsInput`<sup>Optional</sup> <a name="IgnoreAnnotationsInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreAnnotationsInput"></a>

```go
func IgnoreAnnotationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IgnoreLabelsInput`<sup>Optional</sup> <a name="IgnoreLabelsInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreLabelsInput"></a>

```go
func IgnoreLabelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `InsecureInput`<sup>Optional</sup> <a name="InsecureInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.insecureInput"></a>

```go
func InsecureInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `ProxyUrlInput`<sup>Optional</sup> <a name="ProxyUrlInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.proxyUrlInput"></a>

```go
func ProxyUrlInput() *string
```

- *Type:* *string

---

##### `TlsServerNameInput`<sup>Optional</sup> <a name="TlsServerNameInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tlsServerNameInput"></a>

```go
func TlsServerNameInput() *string
```

- *Type:* *string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientCertificate"></a>

```go
func ClientCertificate() *string
```

- *Type:* *string

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientKey"></a>

```go
func ClientKey() *string
```

- *Type:* *string

---

##### `ClusterCaCertificate`<sup>Optional</sup> <a name="ClusterCaCertificate" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clusterCaCertificate"></a>

```go
func ClusterCaCertificate() *string
```

- *Type:* *string

---

##### `ConfigContext`<sup>Optional</sup> <a name="ConfigContext" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContext"></a>

```go
func ConfigContext() *string
```

- *Type:* *string

---

##### `ConfigContextAuthInfo`<sup>Optional</sup> <a name="ConfigContextAuthInfo" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextAuthInfo"></a>

```go
func ConfigContextAuthInfo() *string
```

- *Type:* *string

---

##### `ConfigContextCluster`<sup>Optional</sup> <a name="ConfigContextCluster" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextCluster"></a>

```go
func ConfigContextCluster() *string
```

- *Type:* *string

---

##### `ConfigPath`<sup>Optional</sup> <a name="ConfigPath" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPath"></a>

```go
func ConfigPath() *string
```

- *Type:* *string

---

##### `ConfigPaths`<sup>Optional</sup> <a name="ConfigPaths" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPaths"></a>

```go
func ConfigPaths() *[]*string
```

- *Type:* *[]*string

---

##### `Exec`<sup>Optional</sup> <a name="Exec" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.exec"></a>

```go
func Exec() interface{}
```

- *Type:* interface{}

---

##### `Experiments`<sup>Optional</sup> <a name="Experiments" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.experiments"></a>

```go
func Experiments() interface{}
```

- *Type:* interface{}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `IgnoreAnnotations`<sup>Optional</sup> <a name="IgnoreAnnotations" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreAnnotations"></a>

```go
func IgnoreAnnotations() *[]*string
```

- *Type:* *[]*string

---

##### `IgnoreLabels`<sup>Optional</sup> <a name="IgnoreLabels" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreLabels"></a>

```go
func IgnoreLabels() *[]*string
```

- *Type:* *[]*string

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.insecure"></a>

```go
func Insecure() interface{}
```

- *Type:* interface{}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `ProxyUrl`<sup>Optional</sup> <a name="ProxyUrl" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.proxyUrl"></a>

```go
func ProxyUrl() *string
```

- *Type:* *string

---

##### `TlsServerName`<sup>Optional</sup> <a name="TlsServerName" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tlsServerName"></a>

```go
func TlsServerName() *string
```

- *Type:* *string

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesProviderConfig <a name="KubernetesProviderConfig" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/provider"

&provider.KubernetesProviderConfig {
	Alias: *string,
	ClientCertificate: *string,
	ClientKey: *string,
	ClusterCaCertificate: *string,
	ConfigContext: *string,
	ConfigContextAuthInfo: *string,
	ConfigContextCluster: *string,
	ConfigPath: *string,
	ConfigPaths: *[]*string,
	Exec: interface{},
	Experiments: interface{},
	Host: *string,
	IgnoreAnnotations: *[]*string,
	IgnoreLabels: *[]*string,
	Insecure: interface{},
	Password: *string,
	ProxyUrl: *string,
	TlsServerName: *string,
	Token: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | PEM-encoded client certificate for TLS authentication. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clientKey">ClientKey</a></code> | <code>*string</code> | PEM-encoded client certificate key for TLS authentication. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clusterCaCertificate">ClusterCaCertificate</a></code> | <code>*string</code> | PEM-encoded root certificates bundle for TLS authentication. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContext">ConfigContext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#config_context KubernetesProvider#config_context}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContextAuthInfo">ConfigContextAuthInfo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#config_context_auth_info KubernetesProvider#config_context_auth_info}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContextCluster">ConfigContextCluster</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#config_context_cluster KubernetesProvider#config_context_cluster}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configPath">ConfigPath</a></code> | <code>*string</code> | Path to the kube config file. Can be set with KUBE_CONFIG_PATH. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configPaths">ConfigPaths</a></code> | <code>*[]*string</code> | A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.exec">Exec</a></code> | <code>interface{}</code> | exec block. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.experiments">Experiments</a></code> | <code>interface{}</code> | experiments block. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.host">Host</a></code> | <code>*string</code> | The hostname (in form of URI) of Kubernetes master. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.ignoreAnnotations">IgnoreAnnotations</a></code> | <code>*[]*string</code> | List of Kubernetes metadata annotations to ignore across all resources handled by this provider for situations where external systems are managing certain resource annotations. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.ignoreLabels">IgnoreLabels</a></code> | <code>*[]*string</code> | List of Kubernetes metadata labels to ignore across all resources handled by this provider for situations where external systems are managing certain resource labels. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.insecure">Insecure</a></code> | <code>interface{}</code> | Whether server should be accessed without verifying the TLS certificate. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.password">Password</a></code> | <code>*string</code> | The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.proxyUrl">ProxyUrl</a></code> | <code>*string</code> | URL to the proxy to be used for all API requests. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.tlsServerName">TlsServerName</a></code> | <code>*string</code> | Server name passed to the server for SNI and is used in the client to check server certificates against. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.token">Token</a></code> | <code>*string</code> | Token to authenticate an service account. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.username">Username</a></code> | <code>*string</code> | The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#alias KubernetesProvider#alias}

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clientCertificate"></a>

```go
ClientCertificate *string
```

- *Type:* *string

PEM-encoded client certificate for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#client_certificate KubernetesProvider#client_certificate}

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clientKey"></a>

```go
ClientKey *string
```

- *Type:* *string

PEM-encoded client certificate key for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#client_key KubernetesProvider#client_key}

---

##### `ClusterCaCertificate`<sup>Optional</sup> <a name="ClusterCaCertificate" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clusterCaCertificate"></a>

```go
ClusterCaCertificate *string
```

- *Type:* *string

PEM-encoded root certificates bundle for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#cluster_ca_certificate KubernetesProvider#cluster_ca_certificate}

---

##### `ConfigContext`<sup>Optional</sup> <a name="ConfigContext" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContext"></a>

```go
ConfigContext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#config_context KubernetesProvider#config_context}.

---

##### `ConfigContextAuthInfo`<sup>Optional</sup> <a name="ConfigContextAuthInfo" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContextAuthInfo"></a>

```go
ConfigContextAuthInfo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#config_context_auth_info KubernetesProvider#config_context_auth_info}.

---

##### `ConfigContextCluster`<sup>Optional</sup> <a name="ConfigContextCluster" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContextCluster"></a>

```go
ConfigContextCluster *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#config_context_cluster KubernetesProvider#config_context_cluster}.

---

##### `ConfigPath`<sup>Optional</sup> <a name="ConfigPath" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configPath"></a>

```go
ConfigPath *string
```

- *Type:* *string

Path to the kube config file. Can be set with KUBE_CONFIG_PATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#config_path KubernetesProvider#config_path}

---

##### `ConfigPaths`<sup>Optional</sup> <a name="ConfigPaths" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configPaths"></a>

```go
ConfigPaths *[]*string
```

- *Type:* *[]*string

A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#config_paths KubernetesProvider#config_paths}

---

##### `Exec`<sup>Optional</sup> <a name="Exec" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.exec"></a>

```go
Exec interface{}
```

- *Type:* interface{}

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#exec KubernetesProvider#exec}

---

##### `Experiments`<sup>Optional</sup> <a name="Experiments" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.experiments"></a>

```go
Experiments interface{}
```

- *Type:* interface{}

experiments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#experiments KubernetesProvider#experiments}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.host"></a>

```go
Host *string
```

- *Type:* *string

The hostname (in form of URI) of Kubernetes master.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#host KubernetesProvider#host}

---

##### `IgnoreAnnotations`<sup>Optional</sup> <a name="IgnoreAnnotations" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.ignoreAnnotations"></a>

```go
IgnoreAnnotations *[]*string
```

- *Type:* *[]*string

List of Kubernetes metadata annotations to ignore across all resources handled by this provider for situations where external systems are managing certain resource annotations.

Each item is a regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#ignore_annotations KubernetesProvider#ignore_annotations}

---

##### `IgnoreLabels`<sup>Optional</sup> <a name="IgnoreLabels" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.ignoreLabels"></a>

```go
IgnoreLabels *[]*string
```

- *Type:* *[]*string

List of Kubernetes metadata labels to ignore across all resources handled by this provider for situations where external systems are managing certain resource labels.

Each item is a regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#ignore_labels KubernetesProvider#ignore_labels}

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.insecure"></a>

```go
Insecure interface{}
```

- *Type:* interface{}

Whether server should be accessed without verifying the TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#insecure KubernetesProvider#insecure}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#password KubernetesProvider#password}

---

##### `ProxyUrl`<sup>Optional</sup> <a name="ProxyUrl" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.proxyUrl"></a>

```go
ProxyUrl *string
```

- *Type:* *string

URL to the proxy to be used for all API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#proxy_url KubernetesProvider#proxy_url}

---

##### `TlsServerName`<sup>Optional</sup> <a name="TlsServerName" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.tlsServerName"></a>

```go
TlsServerName *string
```

- *Type:* *string

Server name passed to the server for SNI and is used in the client to check server certificates against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#tls_server_name KubernetesProvider#tls_server_name}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

Token to authenticate an service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#token KubernetesProvider#token}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#username KubernetesProvider#username}

---

### KubernetesProviderExec <a name="KubernetesProviderExec" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/provider"

&provider.KubernetesProviderExec {
	ApiVersion: *string,
	Command: *string,
	Args: *[]*string,
	Env: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.apiVersion">ApiVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#api_version KubernetesProvider#api_version}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.command">Command</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#command KubernetesProvider#command}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.args">Args</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#args KubernetesProvider#args}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.env">Env</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#env KubernetesProvider#env}. |

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.apiVersion"></a>

```go
ApiVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#api_version KubernetesProvider#api_version}.

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.command"></a>

```go
Command *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#command KubernetesProvider#command}.

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#args KubernetesProvider#args}.

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.env"></a>

```go
Env *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#env KubernetesProvider#env}.

---

### KubernetesProviderExperiments <a name="KubernetesProviderExperiments" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/provider"

&provider.KubernetesProviderExperiments {
	ManifestResource: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments.property.manifestResource">ManifestResource</a></code> | <code>interface{}</code> | Enable the `kubernetes_manifest` resource. |

---

##### `ManifestResource`<sup>Optional</sup> <a name="ManifestResource" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments.property.manifestResource"></a>

```go
ManifestResource interface{}
```

- *Type:* interface{}

Enable the `kubernetes_manifest` resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs#manifest_resource KubernetesProvider#manifest_resource}

---



