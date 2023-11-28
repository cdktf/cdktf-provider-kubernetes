# `provider`

Refer to the Terraform Registory for docs: [`kubernetes`](https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-kubernetes.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesProvider <a name="KubernetesProvider" id="@cdktf/provider-kubernetes.provider.KubernetesProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs kubernetes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.provider.KubernetesProvider;

KubernetesProvider.Builder.create(Construct scope, java.lang.String id)
//  .alias(java.lang.String)
//  .clientCertificate(java.lang.String)
//  .clientKey(java.lang.String)
//  .clusterCaCertificate(java.lang.String)
//  .configContext(java.lang.String)
//  .configContextAuthInfo(java.lang.String)
//  .configContextCluster(java.lang.String)
//  .configPath(java.lang.String)
//  .configPaths(java.util.List<java.lang.String>)
//  .exec(KubernetesProviderExec)
//  .experiments(KubernetesProviderExperiments)
//  .host(java.lang.String)
//  .ignoreAnnotations(java.util.List<java.lang.String>)
//  .ignoreLabels(java.util.List<java.lang.String>)
//  .insecure(java.lang.Boolean)
//  .insecure(IResolvable)
//  .password(java.lang.String)
//  .proxyUrl(java.lang.String)
//  .tlsServerName(java.lang.String)
//  .token(java.lang.String)
//  .username(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | PEM-encoded client certificate for TLS authentication. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.clientKey">clientKey</a></code> | <code>java.lang.String</code> | PEM-encoded client certificate key for TLS authentication. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.clusterCaCertificate">clusterCaCertificate</a></code> | <code>java.lang.String</code> | PEM-encoded root certificates bundle for TLS authentication. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.configContext">configContext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#config_context KubernetesProvider#config_context}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.configContextAuthInfo">configContextAuthInfo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#config_context_auth_info KubernetesProvider#config_context_auth_info}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.configContextCluster">configContextCluster</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#config_context_cluster KubernetesProvider#config_context_cluster}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.configPath">configPath</a></code> | <code>java.lang.String</code> | Path to the kube config file. Can be set with KUBE_CONFIG_PATH. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.configPaths">configPaths</a></code> | <code>java.util.List<java.lang.String></code> | A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.exec">exec</a></code> | <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a></code> | exec block. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.experiments">experiments</a></code> | <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a></code> | experiments block. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.host">host</a></code> | <code>java.lang.String</code> | The hostname (in form of URI) of Kubernetes master. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.ignoreAnnotations">ignoreAnnotations</a></code> | <code>java.util.List<java.lang.String></code> | List of Kubernetes metadata annotations to ignore across all resources handled by this provider for situations where external systems are managing certain resource annotations. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.ignoreLabels">ignoreLabels</a></code> | <code>java.util.List<java.lang.String></code> | List of Kubernetes metadata labels to ignore across all resources handled by this provider for situations where external systems are managing certain resource labels. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether server should be accessed without verifying the TLS certificate. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.proxyUrl">proxyUrl</a></code> | <code>java.lang.String</code> | URL to the proxy to be used for all API requests. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.tlsServerName">tlsServerName</a></code> | <code>java.lang.String</code> | Server name passed to the server for SNI and is used in the client to check server certificates against. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | Token to authenticate an service account. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#alias KubernetesProvider#alias}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.clientCertificate"></a>

- *Type:* java.lang.String

PEM-encoded client certificate for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#client_certificate KubernetesProvider#client_certificate}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.clientKey"></a>

- *Type:* java.lang.String

PEM-encoded client certificate key for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#client_key KubernetesProvider#client_key}

---

##### `clusterCaCertificate`<sup>Optional</sup> <a name="clusterCaCertificate" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.clusterCaCertificate"></a>

- *Type:* java.lang.String

PEM-encoded root certificates bundle for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#cluster_ca_certificate KubernetesProvider#cluster_ca_certificate}

---

##### `configContext`<sup>Optional</sup> <a name="configContext" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.configContext"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#config_context KubernetesProvider#config_context}.

---

##### `configContextAuthInfo`<sup>Optional</sup> <a name="configContextAuthInfo" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.configContextAuthInfo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#config_context_auth_info KubernetesProvider#config_context_auth_info}.

---

##### `configContextCluster`<sup>Optional</sup> <a name="configContextCluster" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.configContextCluster"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#config_context_cluster KubernetesProvider#config_context_cluster}.

---

##### `configPath`<sup>Optional</sup> <a name="configPath" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.configPath"></a>

- *Type:* java.lang.String

Path to the kube config file. Can be set with KUBE_CONFIG_PATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#config_path KubernetesProvider#config_path}

---

##### `configPaths`<sup>Optional</sup> <a name="configPaths" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.configPaths"></a>

- *Type:* java.util.List<java.lang.String>

A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#config_paths KubernetesProvider#config_paths}

---

##### `exec`<sup>Optional</sup> <a name="exec" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.exec"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a>

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#exec KubernetesProvider#exec}

---

##### `experiments`<sup>Optional</sup> <a name="experiments" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.experiments"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a>

experiments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#experiments KubernetesProvider#experiments}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.host"></a>

- *Type:* java.lang.String

The hostname (in form of URI) of Kubernetes master.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#host KubernetesProvider#host}

---

##### `ignoreAnnotations`<sup>Optional</sup> <a name="ignoreAnnotations" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.ignoreAnnotations"></a>

- *Type:* java.util.List<java.lang.String>

List of Kubernetes metadata annotations to ignore across all resources handled by this provider for situations where external systems are managing certain resource annotations.

Each item is a regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#ignore_annotations KubernetesProvider#ignore_annotations}

---

##### `ignoreLabels`<sup>Optional</sup> <a name="ignoreLabels" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.ignoreLabels"></a>

- *Type:* java.util.List<java.lang.String>

List of Kubernetes metadata labels to ignore across all resources handled by this provider for situations where external systems are managing certain resource labels.

Each item is a regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#ignore_labels KubernetesProvider#ignore_labels}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.insecure"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether server should be accessed without verifying the TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#insecure KubernetesProvider#insecure}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.password"></a>

- *Type:* java.lang.String

The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#password KubernetesProvider#password}

---

##### `proxyUrl`<sup>Optional</sup> <a name="proxyUrl" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.proxyUrl"></a>

- *Type:* java.lang.String

URL to the proxy to be used for all API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#proxy_url KubernetesProvider#proxy_url}

---

##### `tlsServerName`<sup>Optional</sup> <a name="tlsServerName" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.tlsServerName"></a>

- *Type:* java.lang.String

Server name passed to the server for SNI and is used in the client to check server certificates against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#tls_server_name KubernetesProvider#tls_server_name}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.token"></a>

- *Type:* java.lang.String

Token to authenticate an service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#token KubernetesProvider#token}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.username"></a>

- *Type:* java.lang.String

The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#username KubernetesProvider#username}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetClientCertificate"></a>

```java
public void resetClientCertificate()
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetClientKey"></a>

```java
public void resetClientKey()
```

##### `resetClusterCaCertificate` <a name="resetClusterCaCertificate" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetClusterCaCertificate"></a>

```java
public void resetClusterCaCertificate()
```

##### `resetConfigContext` <a name="resetConfigContext" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigContext"></a>

```java
public void resetConfigContext()
```

##### `resetConfigContextAuthInfo` <a name="resetConfigContextAuthInfo" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigContextAuthInfo"></a>

```java
public void resetConfigContextAuthInfo()
```

##### `resetConfigContextCluster` <a name="resetConfigContextCluster" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigContextCluster"></a>

```java
public void resetConfigContextCluster()
```

##### `resetConfigPath` <a name="resetConfigPath" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigPath"></a>

```java
public void resetConfigPath()
```

##### `resetConfigPaths` <a name="resetConfigPaths" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigPaths"></a>

```java
public void resetConfigPaths()
```

##### `resetExec` <a name="resetExec" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetExec"></a>

```java
public void resetExec()
```

##### `resetExperiments` <a name="resetExperiments" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetExperiments"></a>

```java
public void resetExperiments()
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetHost"></a>

```java
public void resetHost()
```

##### `resetIgnoreAnnotations` <a name="resetIgnoreAnnotations" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetIgnoreAnnotations"></a>

```java
public void resetIgnoreAnnotations()
```

##### `resetIgnoreLabels` <a name="resetIgnoreLabels" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetIgnoreLabels"></a>

```java
public void resetIgnoreLabels()
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetInsecure"></a>

```java
public void resetInsecure()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetProxyUrl` <a name="resetProxyUrl" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetProxyUrl"></a>

```java
public void resetProxyUrl()
```

##### `resetTlsServerName` <a name="resetTlsServerName" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetTlsServerName"></a>

```java
public void resetTlsServerName()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetToken"></a>

```java
public void resetToken()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetUsername"></a>

```java
public void resetUsername()
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

```java
import com.hashicorp.cdktf.providers.kubernetes.provider.KubernetesProvider;

KubernetesProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.provider.KubernetesProvider;

KubernetesProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.provider.KubernetesProvider;

KubernetesProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.provider.KubernetesProvider;

KubernetesProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KubernetesProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a KubernetesProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KubernetesProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KubernetesProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientCertificateInput">clientCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientKeyInput">clientKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clusterCaCertificateInput">clusterCaCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextAuthInfoInput">configContextAuthInfoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextClusterInput">configContextClusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextInput">configContextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPathInput">configPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPathsInput">configPathsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.execInput">execInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.experimentsInput">experimentsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreAnnotationsInput">ignoreAnnotationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreLabelsInput">ignoreLabelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.insecureInput">insecureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.proxyUrlInput">proxyUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tlsServerNameInput">tlsServerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clusterCaCertificate">clusterCaCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContext">configContext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextAuthInfo">configContextAuthInfo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextCluster">configContextCluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPath">configPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPaths">configPaths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.exec">exec</a></code> | <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.experiments">experiments</a></code> | <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreAnnotations">ignoreAnnotations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreLabels">ignoreLabels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.proxyUrl">proxyUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tlsServerName">tlsServerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientCertificateInput"></a>

```java
public java.lang.String getClientCertificateInput();
```

- *Type:* java.lang.String

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientKeyInput"></a>

```java
public java.lang.String getClientKeyInput();
```

- *Type:* java.lang.String

---

##### `clusterCaCertificateInput`<sup>Optional</sup> <a name="clusterCaCertificateInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clusterCaCertificateInput"></a>

```java
public java.lang.String getClusterCaCertificateInput();
```

- *Type:* java.lang.String

---

##### `configContextAuthInfoInput`<sup>Optional</sup> <a name="configContextAuthInfoInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextAuthInfoInput"></a>

```java
public java.lang.String getConfigContextAuthInfoInput();
```

- *Type:* java.lang.String

---

##### `configContextClusterInput`<sup>Optional</sup> <a name="configContextClusterInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextClusterInput"></a>

```java
public java.lang.String getConfigContextClusterInput();
```

- *Type:* java.lang.String

---

##### `configContextInput`<sup>Optional</sup> <a name="configContextInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextInput"></a>

```java
public java.lang.String getConfigContextInput();
```

- *Type:* java.lang.String

---

##### `configPathInput`<sup>Optional</sup> <a name="configPathInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPathInput"></a>

```java
public java.lang.String getConfigPathInput();
```

- *Type:* java.lang.String

---

##### `configPathsInput`<sup>Optional</sup> <a name="configPathsInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPathsInput"></a>

```java
public java.util.List<java.lang.String> getConfigPathsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `execInput`<sup>Optional</sup> <a name="execInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.execInput"></a>

```java
public KubernetesProviderExec getExecInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a>

---

##### `experimentsInput`<sup>Optional</sup> <a name="experimentsInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.experimentsInput"></a>

```java
public KubernetesProviderExperiments getExperimentsInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a>

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `ignoreAnnotationsInput`<sup>Optional</sup> <a name="ignoreAnnotationsInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreAnnotationsInput"></a>

```java
public java.util.List<java.lang.String> getIgnoreAnnotationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ignoreLabelsInput`<sup>Optional</sup> <a name="ignoreLabelsInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreLabelsInput"></a>

```java
public java.util.List<java.lang.String> getIgnoreLabelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.insecureInput"></a>

```java
public java.lang.Object getInsecureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `proxyUrlInput`<sup>Optional</sup> <a name="proxyUrlInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.proxyUrlInput"></a>

```java
public java.lang.String getProxyUrlInput();
```

- *Type:* java.lang.String

---

##### `tlsServerNameInput`<sup>Optional</sup> <a name="tlsServerNameInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tlsServerNameInput"></a>

```java
public java.lang.String getTlsServerNameInput();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

---

##### `clusterCaCertificate`<sup>Optional</sup> <a name="clusterCaCertificate" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clusterCaCertificate"></a>

```java
public java.lang.String getClusterCaCertificate();
```

- *Type:* java.lang.String

---

##### `configContext`<sup>Optional</sup> <a name="configContext" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContext"></a>

```java
public java.lang.String getConfigContext();
```

- *Type:* java.lang.String

---

##### `configContextAuthInfo`<sup>Optional</sup> <a name="configContextAuthInfo" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextAuthInfo"></a>

```java
public java.lang.String getConfigContextAuthInfo();
```

- *Type:* java.lang.String

---

##### `configContextCluster`<sup>Optional</sup> <a name="configContextCluster" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextCluster"></a>

```java
public java.lang.String getConfigContextCluster();
```

- *Type:* java.lang.String

---

##### `configPath`<sup>Optional</sup> <a name="configPath" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPath"></a>

```java
public java.lang.String getConfigPath();
```

- *Type:* java.lang.String

---

##### `configPaths`<sup>Optional</sup> <a name="configPaths" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPaths"></a>

```java
public java.util.List<java.lang.String> getConfigPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exec`<sup>Optional</sup> <a name="exec" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.exec"></a>

```java
public KubernetesProviderExec getExec();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a>

---

##### `experiments`<sup>Optional</sup> <a name="experiments" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.experiments"></a>

```java
public KubernetesProviderExperiments getExperiments();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a>

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `ignoreAnnotations`<sup>Optional</sup> <a name="ignoreAnnotations" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreAnnotations"></a>

```java
public java.util.List<java.lang.String> getIgnoreAnnotations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ignoreLabels`<sup>Optional</sup> <a name="ignoreLabels" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreLabels"></a>

```java
public java.util.List<java.lang.String> getIgnoreLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.insecure"></a>

```java
public java.lang.Object getInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `proxyUrl`<sup>Optional</sup> <a name="proxyUrl" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.proxyUrl"></a>

```java
public java.lang.String getProxyUrl();
```

- *Type:* java.lang.String

---

##### `tlsServerName`<sup>Optional</sup> <a name="tlsServerName" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tlsServerName"></a>

```java
public java.lang.String getTlsServerName();
```

- *Type:* java.lang.String

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesProviderConfig <a name="KubernetesProviderConfig" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.provider.KubernetesProviderConfig;

KubernetesProviderConfig.builder()
//  .alias(java.lang.String)
//  .clientCertificate(java.lang.String)
//  .clientKey(java.lang.String)
//  .clusterCaCertificate(java.lang.String)
//  .configContext(java.lang.String)
//  .configContextAuthInfo(java.lang.String)
//  .configContextCluster(java.lang.String)
//  .configPath(java.lang.String)
//  .configPaths(java.util.List<java.lang.String>)
//  .exec(KubernetesProviderExec)
//  .experiments(KubernetesProviderExperiments)
//  .host(java.lang.String)
//  .ignoreAnnotations(java.util.List<java.lang.String>)
//  .ignoreLabels(java.util.List<java.lang.String>)
//  .insecure(java.lang.Boolean)
//  .insecure(IResolvable)
//  .password(java.lang.String)
//  .proxyUrl(java.lang.String)
//  .tlsServerName(java.lang.String)
//  .token(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | PEM-encoded client certificate for TLS authentication. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | PEM-encoded client certificate key for TLS authentication. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clusterCaCertificate">clusterCaCertificate</a></code> | <code>java.lang.String</code> | PEM-encoded root certificates bundle for TLS authentication. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContext">configContext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#config_context KubernetesProvider#config_context}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContextAuthInfo">configContextAuthInfo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#config_context_auth_info KubernetesProvider#config_context_auth_info}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContextCluster">configContextCluster</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#config_context_cluster KubernetesProvider#config_context_cluster}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configPath">configPath</a></code> | <code>java.lang.String</code> | Path to the kube config file. Can be set with KUBE_CONFIG_PATH. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configPaths">configPaths</a></code> | <code>java.util.List<java.lang.String></code> | A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.exec">exec</a></code> | <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a></code> | exec block. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.experiments">experiments</a></code> | <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a></code> | experiments block. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.host">host</a></code> | <code>java.lang.String</code> | The hostname (in form of URI) of Kubernetes master. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.ignoreAnnotations">ignoreAnnotations</a></code> | <code>java.util.List<java.lang.String></code> | List of Kubernetes metadata annotations to ignore across all resources handled by this provider for situations where external systems are managing certain resource annotations. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.ignoreLabels">ignoreLabels</a></code> | <code>java.util.List<java.lang.String></code> | List of Kubernetes metadata labels to ignore across all resources handled by this provider for situations where external systems are managing certain resource labels. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether server should be accessed without verifying the TLS certificate. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.password">password</a></code> | <code>java.lang.String</code> | The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.proxyUrl">proxyUrl</a></code> | <code>java.lang.String</code> | URL to the proxy to be used for all API requests. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.tlsServerName">tlsServerName</a></code> | <code>java.lang.String</code> | Server name passed to the server for SNI and is used in the client to check server certificates against. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.token">token</a></code> | <code>java.lang.String</code> | Token to authenticate an service account. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.username">username</a></code> | <code>java.lang.String</code> | The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#alias KubernetesProvider#alias}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

PEM-encoded client certificate for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#client_certificate KubernetesProvider#client_certificate}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

PEM-encoded client certificate key for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#client_key KubernetesProvider#client_key}

---

##### `clusterCaCertificate`<sup>Optional</sup> <a name="clusterCaCertificate" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clusterCaCertificate"></a>

```java
public java.lang.String getClusterCaCertificate();
```

- *Type:* java.lang.String

PEM-encoded root certificates bundle for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#cluster_ca_certificate KubernetesProvider#cluster_ca_certificate}

---

##### `configContext`<sup>Optional</sup> <a name="configContext" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContext"></a>

```java
public java.lang.String getConfigContext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#config_context KubernetesProvider#config_context}.

---

##### `configContextAuthInfo`<sup>Optional</sup> <a name="configContextAuthInfo" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContextAuthInfo"></a>

```java
public java.lang.String getConfigContextAuthInfo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#config_context_auth_info KubernetesProvider#config_context_auth_info}.

---

##### `configContextCluster`<sup>Optional</sup> <a name="configContextCluster" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContextCluster"></a>

```java
public java.lang.String getConfigContextCluster();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#config_context_cluster KubernetesProvider#config_context_cluster}.

---

##### `configPath`<sup>Optional</sup> <a name="configPath" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configPath"></a>

```java
public java.lang.String getConfigPath();
```

- *Type:* java.lang.String

Path to the kube config file. Can be set with KUBE_CONFIG_PATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#config_path KubernetesProvider#config_path}

---

##### `configPaths`<sup>Optional</sup> <a name="configPaths" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configPaths"></a>

```java
public java.util.List<java.lang.String> getConfigPaths();
```

- *Type:* java.util.List<java.lang.String>

A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#config_paths KubernetesProvider#config_paths}

---

##### `exec`<sup>Optional</sup> <a name="exec" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.exec"></a>

```java
public KubernetesProviderExec getExec();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a>

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#exec KubernetesProvider#exec}

---

##### `experiments`<sup>Optional</sup> <a name="experiments" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.experiments"></a>

```java
public KubernetesProviderExperiments getExperiments();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a>

experiments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#experiments KubernetesProvider#experiments}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The hostname (in form of URI) of Kubernetes master.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#host KubernetesProvider#host}

---

##### `ignoreAnnotations`<sup>Optional</sup> <a name="ignoreAnnotations" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.ignoreAnnotations"></a>

```java
public java.util.List<java.lang.String> getIgnoreAnnotations();
```

- *Type:* java.util.List<java.lang.String>

List of Kubernetes metadata annotations to ignore across all resources handled by this provider for situations where external systems are managing certain resource annotations.

Each item is a regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#ignore_annotations KubernetesProvider#ignore_annotations}

---

##### `ignoreLabels`<sup>Optional</sup> <a name="ignoreLabels" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.ignoreLabels"></a>

```java
public java.util.List<java.lang.String> getIgnoreLabels();
```

- *Type:* java.util.List<java.lang.String>

List of Kubernetes metadata labels to ignore across all resources handled by this provider for situations where external systems are managing certain resource labels.

Each item is a regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#ignore_labels KubernetesProvider#ignore_labels}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.insecure"></a>

```java
public java.lang.Object getInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether server should be accessed without verifying the TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#insecure KubernetesProvider#insecure}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#password KubernetesProvider#password}

---

##### `proxyUrl`<sup>Optional</sup> <a name="proxyUrl" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.proxyUrl"></a>

```java
public java.lang.String getProxyUrl();
```

- *Type:* java.lang.String

URL to the proxy to be used for all API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#proxy_url KubernetesProvider#proxy_url}

---

##### `tlsServerName`<sup>Optional</sup> <a name="tlsServerName" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.tlsServerName"></a>

```java
public java.lang.String getTlsServerName();
```

- *Type:* java.lang.String

Server name passed to the server for SNI and is used in the client to check server certificates against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#tls_server_name KubernetesProvider#tls_server_name}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Token to authenticate an service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#token KubernetesProvider#token}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#username KubernetesProvider#username}

---

### KubernetesProviderExec <a name="KubernetesProviderExec" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.provider.KubernetesProviderExec;

KubernetesProviderExec.builder()
    .apiVersion(java.lang.String)
    .command(java.lang.String)
//  .args(java.util.List<java.lang.String>)
//  .env(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#api_version KubernetesProvider#api_version}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.command">command</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#command KubernetesProvider#command}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#args KubernetesProvider#args}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.env">env</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#env KubernetesProvider#env}. |

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.apiVersion"></a>

```java
public java.lang.String getApiVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#api_version KubernetesProvider#api_version}.

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.command"></a>

```java
public java.lang.String getCommand();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#command KubernetesProvider#command}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#args KubernetesProvider#args}.

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.env"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnv();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#env KubernetesProvider#env}.

---

### KubernetesProviderExperiments <a name="KubernetesProviderExperiments" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.provider.KubernetesProviderExperiments;

KubernetesProviderExperiments.builder()
//  .manifestResource(java.lang.Boolean)
//  .manifestResource(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments.property.manifestResource">manifestResource</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable the `kubernetes_manifest` resource. |

---

##### `manifestResource`<sup>Optional</sup> <a name="manifestResource" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments.property.manifestResource"></a>

```java
public java.lang.Object getManifestResource();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable the `kubernetes_manifest` resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs#manifest_resource KubernetesProvider#manifest_resource}

---



