# `provider`

Refer to the Terraform Registory for docs: [`kubernetes`](https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-kubernetes.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesProvider <a name="KubernetesProvider" id="@cdktf/provider-kubernetes.provider.KubernetesProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs kubernetes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new KubernetesProvider(Construct Scope, string Id, KubernetesProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig">KubernetesProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig">KubernetesProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
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
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetClientCertificate"></a>

```csharp
private void ResetClientCertificate()
```

##### `ResetClientKey` <a name="ResetClientKey" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetClientKey"></a>

```csharp
private void ResetClientKey()
```

##### `ResetClusterCaCertificate` <a name="ResetClusterCaCertificate" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetClusterCaCertificate"></a>

```csharp
private void ResetClusterCaCertificate()
```

##### `ResetConfigContext` <a name="ResetConfigContext" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigContext"></a>

```csharp
private void ResetConfigContext()
```

##### `ResetConfigContextAuthInfo` <a name="ResetConfigContextAuthInfo" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigContextAuthInfo"></a>

```csharp
private void ResetConfigContextAuthInfo()
```

##### `ResetConfigContextCluster` <a name="ResetConfigContextCluster" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigContextCluster"></a>

```csharp
private void ResetConfigContextCluster()
```

##### `ResetConfigPath` <a name="ResetConfigPath" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigPath"></a>

```csharp
private void ResetConfigPath()
```

##### `ResetConfigPaths` <a name="ResetConfigPaths" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigPaths"></a>

```csharp
private void ResetConfigPaths()
```

##### `ResetExec` <a name="ResetExec" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetExec"></a>

```csharp
private void ResetExec()
```

##### `ResetExperiments` <a name="ResetExperiments" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetExperiments"></a>

```csharp
private void ResetExperiments()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetIgnoreAnnotations` <a name="ResetIgnoreAnnotations" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetIgnoreAnnotations"></a>

```csharp
private void ResetIgnoreAnnotations()
```

##### `ResetIgnoreLabels` <a name="ResetIgnoreLabels" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetIgnoreLabels"></a>

```csharp
private void ResetIgnoreLabels()
```

##### `ResetInsecure` <a name="ResetInsecure" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetInsecure"></a>

```csharp
private void ResetInsecure()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetProxyUrl` <a name="ResetProxyUrl" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetProxyUrl"></a>

```csharp
private void ResetProxyUrl()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetToken"></a>

```csharp
private void ResetToken()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetUsername"></a>

```csharp
private void ResetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

KubernetesProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

KubernetesProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

KubernetesProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientCertificateInput">ClientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientKeyInput">ClientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clusterCaCertificateInput">ClusterCaCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextAuthInfoInput">ConfigContextAuthInfoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextClusterInput">ConfigContextClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextInput">ConfigContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPathInput">ConfigPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPathsInput">ConfigPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.execInput">ExecInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.experimentsInput">ExperimentsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreAnnotationsInput">IgnoreAnnotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreLabelsInput">IgnoreLabelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.insecureInput">InsecureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.proxyUrlInput">ProxyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientCertificate">ClientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientKey">ClientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clusterCaCertificate">ClusterCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContext">ConfigContext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextAuthInfo">ConfigContextAuthInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextCluster">ConfigContextCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPath">ConfigPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPaths">ConfigPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.exec">Exec</a></code> | <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.experiments">Experiments</a></code> | <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreAnnotations">IgnoreAnnotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreLabels">IgnoreLabels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.insecure">Insecure</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.proxyUrl">ProxyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientCertificateInput"></a>

```csharp
public string ClientCertificateInput { get; }
```

- *Type:* string

---

##### `ClientKeyInput`<sup>Optional</sup> <a name="ClientKeyInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientKeyInput"></a>

```csharp
public string ClientKeyInput { get; }
```

- *Type:* string

---

##### `ClusterCaCertificateInput`<sup>Optional</sup> <a name="ClusterCaCertificateInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clusterCaCertificateInput"></a>

```csharp
public string ClusterCaCertificateInput { get; }
```

- *Type:* string

---

##### `ConfigContextAuthInfoInput`<sup>Optional</sup> <a name="ConfigContextAuthInfoInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextAuthInfoInput"></a>

```csharp
public string ConfigContextAuthInfoInput { get; }
```

- *Type:* string

---

##### `ConfigContextClusterInput`<sup>Optional</sup> <a name="ConfigContextClusterInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextClusterInput"></a>

```csharp
public string ConfigContextClusterInput { get; }
```

- *Type:* string

---

##### `ConfigContextInput`<sup>Optional</sup> <a name="ConfigContextInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextInput"></a>

```csharp
public string ConfigContextInput { get; }
```

- *Type:* string

---

##### `ConfigPathInput`<sup>Optional</sup> <a name="ConfigPathInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPathInput"></a>

```csharp
public string ConfigPathInput { get; }
```

- *Type:* string

---

##### `ConfigPathsInput`<sup>Optional</sup> <a name="ConfigPathsInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPathsInput"></a>

```csharp
public string[] ConfigPathsInput { get; }
```

- *Type:* string[]

---

##### `ExecInput`<sup>Optional</sup> <a name="ExecInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.execInput"></a>

```csharp
public KubernetesProviderExec ExecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a>

---

##### `ExperimentsInput`<sup>Optional</sup> <a name="ExperimentsInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.experimentsInput"></a>

```csharp
public KubernetesProviderExperiments ExperimentsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a>

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `IgnoreAnnotationsInput`<sup>Optional</sup> <a name="IgnoreAnnotationsInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreAnnotationsInput"></a>

```csharp
public string[] IgnoreAnnotationsInput { get; }
```

- *Type:* string[]

---

##### `IgnoreLabelsInput`<sup>Optional</sup> <a name="IgnoreLabelsInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreLabelsInput"></a>

```csharp
public string[] IgnoreLabelsInput { get; }
```

- *Type:* string[]

---

##### `InsecureInput`<sup>Optional</sup> <a name="InsecureInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.insecureInput"></a>

```csharp
public object InsecureInput { get; }
```

- *Type:* object

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ProxyUrlInput`<sup>Optional</sup> <a name="ProxyUrlInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.proxyUrlInput"></a>

```csharp
public string ProxyUrlInput { get; }
```

- *Type:* string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientCertificate"></a>

```csharp
public string ClientCertificate { get; }
```

- *Type:* string

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientKey"></a>

```csharp
public string ClientKey { get; }
```

- *Type:* string

---

##### `ClusterCaCertificate`<sup>Optional</sup> <a name="ClusterCaCertificate" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clusterCaCertificate"></a>

```csharp
public string ClusterCaCertificate { get; }
```

- *Type:* string

---

##### `ConfigContext`<sup>Optional</sup> <a name="ConfigContext" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContext"></a>

```csharp
public string ConfigContext { get; }
```

- *Type:* string

---

##### `ConfigContextAuthInfo`<sup>Optional</sup> <a name="ConfigContextAuthInfo" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextAuthInfo"></a>

```csharp
public string ConfigContextAuthInfo { get; }
```

- *Type:* string

---

##### `ConfigContextCluster`<sup>Optional</sup> <a name="ConfigContextCluster" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextCluster"></a>

```csharp
public string ConfigContextCluster { get; }
```

- *Type:* string

---

##### `ConfigPath`<sup>Optional</sup> <a name="ConfigPath" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPath"></a>

```csharp
public string ConfigPath { get; }
```

- *Type:* string

---

##### `ConfigPaths`<sup>Optional</sup> <a name="ConfigPaths" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPaths"></a>

```csharp
public string[] ConfigPaths { get; }
```

- *Type:* string[]

---

##### `Exec`<sup>Optional</sup> <a name="Exec" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.exec"></a>

```csharp
public KubernetesProviderExec Exec { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a>

---

##### `Experiments`<sup>Optional</sup> <a name="Experiments" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.experiments"></a>

```csharp
public KubernetesProviderExperiments Experiments { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a>

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `IgnoreAnnotations`<sup>Optional</sup> <a name="IgnoreAnnotations" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreAnnotations"></a>

```csharp
public string[] IgnoreAnnotations { get; }
```

- *Type:* string[]

---

##### `IgnoreLabels`<sup>Optional</sup> <a name="IgnoreLabels" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreLabels"></a>

```csharp
public string[] IgnoreLabels { get; }
```

- *Type:* string[]

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.insecure"></a>

```csharp
public object Insecure { get; }
```

- *Type:* object

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `ProxyUrl`<sup>Optional</sup> <a name="ProxyUrl" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.proxyUrl"></a>

```csharp
public string ProxyUrl { get; }
```

- *Type:* string

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesProviderConfig <a name="KubernetesProviderConfig" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new KubernetesProviderConfig {
    string Alias = null,
    string ClientCertificate = null,
    string ClientKey = null,
    string ClusterCaCertificate = null,
    string ConfigContext = null,
    string ConfigContextAuthInfo = null,
    string ConfigContextCluster = null,
    string ConfigPath = null,
    string[] ConfigPaths = null,
    KubernetesProviderExec Exec = null,
    KubernetesProviderExperiments Experiments = null,
    string Host = null,
    string[] IgnoreAnnotations = null,
    string[] IgnoreLabels = null,
    object Insecure = null,
    string Password = null,
    string ProxyUrl = null,
    string Token = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clientCertificate">ClientCertificate</a></code> | <code>string</code> | PEM-encoded client certificate for TLS authentication. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clientKey">ClientKey</a></code> | <code>string</code> | PEM-encoded client certificate key for TLS authentication. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clusterCaCertificate">ClusterCaCertificate</a></code> | <code>string</code> | PEM-encoded root certificates bundle for TLS authentication. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContext">ConfigContext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#config_context KubernetesProvider#config_context}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContextAuthInfo">ConfigContextAuthInfo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#config_context_auth_info KubernetesProvider#config_context_auth_info}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContextCluster">ConfigContextCluster</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#config_context_cluster KubernetesProvider#config_context_cluster}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configPath">ConfigPath</a></code> | <code>string</code> | Path to the kube config file. Can be set with KUBE_CONFIG_PATH. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configPaths">ConfigPaths</a></code> | <code>string[]</code> | A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.exec">Exec</a></code> | <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a></code> | exec block. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.experiments">Experiments</a></code> | <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a></code> | experiments block. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.host">Host</a></code> | <code>string</code> | The hostname (in form of URI) of Kubernetes master. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.ignoreAnnotations">IgnoreAnnotations</a></code> | <code>string[]</code> | List of Kubernetes metadata annotations to ignore across all resources handled by this provider for situations where external systems are managing certain resource annotations. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.ignoreLabels">IgnoreLabels</a></code> | <code>string[]</code> | List of Kubernetes metadata labels to ignore across all resources handled by this provider for situations where external systems are managing certain resource labels. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.insecure">Insecure</a></code> | <code>object</code> | Whether server should be accessed without verifying the TLS certificate. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.password">Password</a></code> | <code>string</code> | The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.proxyUrl">ProxyUrl</a></code> | <code>string</code> | URL to the proxy to be used for all API requests. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.token">Token</a></code> | <code>string</code> | Token to authenticate an service account. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.username">Username</a></code> | <code>string</code> | The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#alias KubernetesProvider#alias}

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clientCertificate"></a>

```csharp
public string ClientCertificate { get; set; }
```

- *Type:* string

PEM-encoded client certificate for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#client_certificate KubernetesProvider#client_certificate}

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clientKey"></a>

```csharp
public string ClientKey { get; set; }
```

- *Type:* string

PEM-encoded client certificate key for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#client_key KubernetesProvider#client_key}

---

##### `ClusterCaCertificate`<sup>Optional</sup> <a name="ClusterCaCertificate" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clusterCaCertificate"></a>

```csharp
public string ClusterCaCertificate { get; set; }
```

- *Type:* string

PEM-encoded root certificates bundle for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#cluster_ca_certificate KubernetesProvider#cluster_ca_certificate}

---

##### `ConfigContext`<sup>Optional</sup> <a name="ConfigContext" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContext"></a>

```csharp
public string ConfigContext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#config_context KubernetesProvider#config_context}.

---

##### `ConfigContextAuthInfo`<sup>Optional</sup> <a name="ConfigContextAuthInfo" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContextAuthInfo"></a>

```csharp
public string ConfigContextAuthInfo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#config_context_auth_info KubernetesProvider#config_context_auth_info}.

---

##### `ConfigContextCluster`<sup>Optional</sup> <a name="ConfigContextCluster" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContextCluster"></a>

```csharp
public string ConfigContextCluster { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#config_context_cluster KubernetesProvider#config_context_cluster}.

---

##### `ConfigPath`<sup>Optional</sup> <a name="ConfigPath" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configPath"></a>

```csharp
public string ConfigPath { get; set; }
```

- *Type:* string

Path to the kube config file. Can be set with KUBE_CONFIG_PATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#config_path KubernetesProvider#config_path}

---

##### `ConfigPaths`<sup>Optional</sup> <a name="ConfigPaths" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configPaths"></a>

```csharp
public string[] ConfigPaths { get; set; }
```

- *Type:* string[]

A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#config_paths KubernetesProvider#config_paths}

---

##### `Exec`<sup>Optional</sup> <a name="Exec" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.exec"></a>

```csharp
public KubernetesProviderExec Exec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a>

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#exec KubernetesProvider#exec}

---

##### `Experiments`<sup>Optional</sup> <a name="Experiments" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.experiments"></a>

```csharp
public KubernetesProviderExperiments Experiments { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a>

experiments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#experiments KubernetesProvider#experiments}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The hostname (in form of URI) of Kubernetes master.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#host KubernetesProvider#host}

---

##### `IgnoreAnnotations`<sup>Optional</sup> <a name="IgnoreAnnotations" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.ignoreAnnotations"></a>

```csharp
public string[] IgnoreAnnotations { get; set; }
```

- *Type:* string[]

List of Kubernetes metadata annotations to ignore across all resources handled by this provider for situations where external systems are managing certain resource annotations.

Each item is a regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#ignore_annotations KubernetesProvider#ignore_annotations}

---

##### `IgnoreLabels`<sup>Optional</sup> <a name="IgnoreLabels" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.ignoreLabels"></a>

```csharp
public string[] IgnoreLabels { get; set; }
```

- *Type:* string[]

List of Kubernetes metadata labels to ignore across all resources handled by this provider for situations where external systems are managing certain resource labels.

Each item is a regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#ignore_labels KubernetesProvider#ignore_labels}

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.insecure"></a>

```csharp
public object Insecure { get; set; }
```

- *Type:* object

Whether server should be accessed without verifying the TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#insecure KubernetesProvider#insecure}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#password KubernetesProvider#password}

---

##### `ProxyUrl`<sup>Optional</sup> <a name="ProxyUrl" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.proxyUrl"></a>

```csharp
public string ProxyUrl { get; set; }
```

- *Type:* string

URL to the proxy to be used for all API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#proxy_url KubernetesProvider#proxy_url}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

Token to authenticate an service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#token KubernetesProvider#token}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#username KubernetesProvider#username}

---

### KubernetesProviderExec <a name="KubernetesProviderExec" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new KubernetesProviderExec {
    string ApiVersion,
    string Command,
    string[] Args = null,
    System.Collections.Generic.IDictionary<string, string> Env = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.apiVersion">ApiVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#api_version KubernetesProvider#api_version}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.command">Command</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#command KubernetesProvider#command}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.args">Args</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#args KubernetesProvider#args}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.env">Env</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#env KubernetesProvider#env}. |

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.apiVersion"></a>

```csharp
public string ApiVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#api_version KubernetesProvider#api_version}.

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.command"></a>

```csharp
public string Command { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#command KubernetesProvider#command}.

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#args KubernetesProvider#args}.

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.env"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Env { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#env KubernetesProvider#env}.

---

### KubernetesProviderExperiments <a name="KubernetesProviderExperiments" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new KubernetesProviderExperiments {
    object ManifestResource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments.property.manifestResource">ManifestResource</a></code> | <code>object</code> | Enable the `kubernetes_manifest` resource. |

---

##### `ManifestResource`<sup>Optional</sup> <a name="ManifestResource" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments.property.manifestResource"></a>

```csharp
public object ManifestResource { get; set; }
```

- *Type:* object

Enable the `kubernetes_manifest` resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs#manifest_resource KubernetesProvider#manifest_resource}

---



