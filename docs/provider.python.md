# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-kubernetes.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesProvider <a name="KubernetesProvider" id="@cdktf/provider-kubernetes.provider.KubernetesProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs kubernetes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import provider

provider.KubernetesProvider(
  scope: Construct,
  id: str,
  alias: str = None,
  client_certificate: str = None,
  client_key: str = None,
  cluster_ca_certificate: str = None,
  config_context: str = None,
  config_context_auth_info: str = None,
  config_context_cluster: str = None,
  config_path: str = None,
  config_paths: typing.List[str] = None,
  exec: typing.Union[IResolvable, typing.List[KubernetesProviderExec]] = None,
  experiments: typing.Union[IResolvable, typing.List[KubernetesProviderExperiments]] = None,
  host: str = None,
  ignore_annotations: typing.List[str] = None,
  ignore_labels: typing.List[str] = None,
  insecure: typing.Union[bool, IResolvable] = None,
  password: str = None,
  proxy_url: str = None,
  tls_server_name: str = None,
  token: str = None,
  username: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.clientCertificate">client_certificate</a></code> | <code>str</code> | PEM-encoded client certificate for TLS authentication. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.clientKey">client_key</a></code> | <code>str</code> | PEM-encoded client certificate key for TLS authentication. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.clusterCaCertificate">cluster_ca_certificate</a></code> | <code>str</code> | PEM-encoded root certificates bundle for TLS authentication. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.configContext">config_context</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#config_context KubernetesProvider#config_context}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.configContextAuthInfo">config_context_auth_info</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#config_context_auth_info KubernetesProvider#config_context_auth_info}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.configContextCluster">config_context_cluster</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#config_context_cluster KubernetesProvider#config_context_cluster}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.configPath">config_path</a></code> | <code>str</code> | Path to the kube config file. Can be set with KUBE_CONFIG_PATH. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.configPaths">config_paths</a></code> | <code>typing.List[str]</code> | A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.exec">exec</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a>]]</code> | exec block. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.experiments">experiments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a>]]</code> | experiments block. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.host">host</a></code> | <code>str</code> | The hostname (in form of URI) of Kubernetes master. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.ignoreAnnotations">ignore_annotations</a></code> | <code>typing.List[str]</code> | List of Kubernetes metadata annotations to ignore across all resources handled by this provider for situations where external systems are managing certain resource annotations. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.ignoreLabels">ignore_labels</a></code> | <code>typing.List[str]</code> | List of Kubernetes metadata labels to ignore across all resources handled by this provider for situations where external systems are managing certain resource labels. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether server should be accessed without verifying the TLS certificate. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.password">password</a></code> | <code>str</code> | The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.proxyUrl">proxy_url</a></code> | <code>str</code> | URL to the proxy to be used for all API requests. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.tlsServerName">tls_server_name</a></code> | <code>str</code> | Server name passed to the server for SNI and is used in the client to check server certificates against. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.token">token</a></code> | <code>str</code> | Token to authenticate an service account. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.username">username</a></code> | <code>str</code> | The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#alias KubernetesProvider#alias}

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.clientCertificate"></a>

- *Type:* str

PEM-encoded client certificate for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#client_certificate KubernetesProvider#client_certificate}

---

##### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.clientKey"></a>

- *Type:* str

PEM-encoded client certificate key for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#client_key KubernetesProvider#client_key}

---

##### `cluster_ca_certificate`<sup>Optional</sup> <a name="cluster_ca_certificate" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.clusterCaCertificate"></a>

- *Type:* str

PEM-encoded root certificates bundle for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#cluster_ca_certificate KubernetesProvider#cluster_ca_certificate}

---

##### `config_context`<sup>Optional</sup> <a name="config_context" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.configContext"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#config_context KubernetesProvider#config_context}.

---

##### `config_context_auth_info`<sup>Optional</sup> <a name="config_context_auth_info" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.configContextAuthInfo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#config_context_auth_info KubernetesProvider#config_context_auth_info}.

---

##### `config_context_cluster`<sup>Optional</sup> <a name="config_context_cluster" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.configContextCluster"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#config_context_cluster KubernetesProvider#config_context_cluster}.

---

##### `config_path`<sup>Optional</sup> <a name="config_path" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.configPath"></a>

- *Type:* str

Path to the kube config file. Can be set with KUBE_CONFIG_PATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#config_path KubernetesProvider#config_path}

---

##### `config_paths`<sup>Optional</sup> <a name="config_paths" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.configPaths"></a>

- *Type:* typing.List[str]

A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#config_paths KubernetesProvider#config_paths}

---

##### `exec`<sup>Optional</sup> <a name="exec" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.exec"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a>]]

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#exec KubernetesProvider#exec}

---

##### `experiments`<sup>Optional</sup> <a name="experiments" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.experiments"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a>]]

experiments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#experiments KubernetesProvider#experiments}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.host"></a>

- *Type:* str

The hostname (in form of URI) of Kubernetes master.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#host KubernetesProvider#host}

---

##### `ignore_annotations`<sup>Optional</sup> <a name="ignore_annotations" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.ignoreAnnotations"></a>

- *Type:* typing.List[str]

List of Kubernetes metadata annotations to ignore across all resources handled by this provider for situations where external systems are managing certain resource annotations.

Each item is a regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#ignore_annotations KubernetesProvider#ignore_annotations}

---

##### `ignore_labels`<sup>Optional</sup> <a name="ignore_labels" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.ignoreLabels"></a>

- *Type:* typing.List[str]

List of Kubernetes metadata labels to ignore across all resources handled by this provider for situations where external systems are managing certain resource labels.

Each item is a regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#ignore_labels KubernetesProvider#ignore_labels}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.insecure"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether server should be accessed without verifying the TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#insecure KubernetesProvider#insecure}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.password"></a>

- *Type:* str

The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#password KubernetesProvider#password}

---

##### `proxy_url`<sup>Optional</sup> <a name="proxy_url" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.proxyUrl"></a>

- *Type:* str

URL to the proxy to be used for all API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#proxy_url KubernetesProvider#proxy_url}

---

##### `tls_server_name`<sup>Optional</sup> <a name="tls_server_name" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.tlsServerName"></a>

- *Type:* str

Server name passed to the server for SNI and is used in the client to check server certificates against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#tls_server_name KubernetesProvider#tls_server_name}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.token"></a>

- *Type:* str

Token to authenticate an service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#token KubernetesProvider#token}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.Initializer.parameter.username"></a>

- *Type:* str

The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#username KubernetesProvider#username}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetClientCertificate">reset_client_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetClientKey">reset_client_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetClusterCaCertificate">reset_cluster_ca_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigContext">reset_config_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigContextAuthInfo">reset_config_context_auth_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigContextCluster">reset_config_context_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigPath">reset_config_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigPaths">reset_config_paths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetExec">reset_exec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetExperiments">reset_experiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetIgnoreAnnotations">reset_ignore_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetIgnoreLabels">reset_ignore_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetInsecure">reset_insecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetProxyUrl">reset_proxy_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetTlsServerName">reset_tls_server_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetToken">reset_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.resetUsername">reset_username</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_client_certificate` <a name="reset_client_certificate" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetClientCertificate"></a>

```python
def reset_client_certificate() -> None
```

##### `reset_client_key` <a name="reset_client_key" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetClientKey"></a>

```python
def reset_client_key() -> None
```

##### `reset_cluster_ca_certificate` <a name="reset_cluster_ca_certificate" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetClusterCaCertificate"></a>

```python
def reset_cluster_ca_certificate() -> None
```

##### `reset_config_context` <a name="reset_config_context" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigContext"></a>

```python
def reset_config_context() -> None
```

##### `reset_config_context_auth_info` <a name="reset_config_context_auth_info" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigContextAuthInfo"></a>

```python
def reset_config_context_auth_info() -> None
```

##### `reset_config_context_cluster` <a name="reset_config_context_cluster" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigContextCluster"></a>

```python
def reset_config_context_cluster() -> None
```

##### `reset_config_path` <a name="reset_config_path" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigPath"></a>

```python
def reset_config_path() -> None
```

##### `reset_config_paths` <a name="reset_config_paths" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetConfigPaths"></a>

```python
def reset_config_paths() -> None
```

##### `reset_exec` <a name="reset_exec" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetExec"></a>

```python
def reset_exec() -> None
```

##### `reset_experiments` <a name="reset_experiments" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetExperiments"></a>

```python
def reset_experiments() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_ignore_annotations` <a name="reset_ignore_annotations" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetIgnoreAnnotations"></a>

```python
def reset_ignore_annotations() -> None
```

##### `reset_ignore_labels` <a name="reset_ignore_labels" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetIgnoreLabels"></a>

```python
def reset_ignore_labels() -> None
```

##### `reset_insecure` <a name="reset_insecure" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetInsecure"></a>

```python
def reset_insecure() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_proxy_url` <a name="reset_proxy_url" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetProxyUrl"></a>

```python
def reset_proxy_url() -> None
```

##### `reset_tls_server_name` <a name="reset_tls_server_name" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetTlsServerName"></a>

```python
def reset_tls_server_name() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetToken"></a>

```python
def reset_token() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.resetUsername"></a>

```python
def reset_username() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KubernetesProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import provider

provider.KubernetesProvider.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import provider

provider.KubernetesProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_kubernetes import provider

provider.KubernetesProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_kubernetes import provider

provider.KubernetesProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KubernetesProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KubernetesProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KubernetesProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientCertificateInput">client_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientKeyInput">client_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clusterCaCertificateInput">cluster_ca_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextAuthInfoInput">config_context_auth_info_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextClusterInput">config_context_cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextInput">config_context_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPathInput">config_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPathsInput">config_paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.execInput">exec_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.experimentsInput">experiments_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreAnnotationsInput">ignore_annotations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreLabelsInput">ignore_labels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.insecureInput">insecure_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.proxyUrlInput">proxy_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tlsServerNameInput">tls_server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientCertificate">client_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientKey">client_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clusterCaCertificate">cluster_ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContext">config_context</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextAuthInfo">config_context_auth_info</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextCluster">config_context_cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPath">config_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPaths">config_paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.exec">exec</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.experiments">experiments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreAnnotations">ignore_annotations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreLabels">ignore_labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.proxyUrl">proxy_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tlsServerName">tls_server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `client_certificate_input`<sup>Optional</sup> <a name="client_certificate_input" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientCertificateInput"></a>

```python
client_certificate_input: str
```

- *Type:* str

---

##### `client_key_input`<sup>Optional</sup> <a name="client_key_input" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientKeyInput"></a>

```python
client_key_input: str
```

- *Type:* str

---

##### `cluster_ca_certificate_input`<sup>Optional</sup> <a name="cluster_ca_certificate_input" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clusterCaCertificateInput"></a>

```python
cluster_ca_certificate_input: str
```

- *Type:* str

---

##### `config_context_auth_info_input`<sup>Optional</sup> <a name="config_context_auth_info_input" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextAuthInfoInput"></a>

```python
config_context_auth_info_input: str
```

- *Type:* str

---

##### `config_context_cluster_input`<sup>Optional</sup> <a name="config_context_cluster_input" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextClusterInput"></a>

```python
config_context_cluster_input: str
```

- *Type:* str

---

##### `config_context_input`<sup>Optional</sup> <a name="config_context_input" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextInput"></a>

```python
config_context_input: str
```

- *Type:* str

---

##### `config_path_input`<sup>Optional</sup> <a name="config_path_input" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPathInput"></a>

```python
config_path_input: str
```

- *Type:* str

---

##### `config_paths_input`<sup>Optional</sup> <a name="config_paths_input" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPathsInput"></a>

```python
config_paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exec_input`<sup>Optional</sup> <a name="exec_input" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.execInput"></a>

```python
exec_input: typing.Union[IResolvable, typing.List[KubernetesProviderExec]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a>]]

---

##### `experiments_input`<sup>Optional</sup> <a name="experiments_input" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.experimentsInput"></a>

```python
experiments_input: typing.Union[IResolvable, typing.List[KubernetesProviderExperiments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a>]]

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `ignore_annotations_input`<sup>Optional</sup> <a name="ignore_annotations_input" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreAnnotationsInput"></a>

```python
ignore_annotations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ignore_labels_input`<sup>Optional</sup> <a name="ignore_labels_input" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreLabelsInput"></a>

```python
ignore_labels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `insecure_input`<sup>Optional</sup> <a name="insecure_input" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.insecureInput"></a>

```python
insecure_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `proxy_url_input`<sup>Optional</sup> <a name="proxy_url_input" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.proxyUrlInput"></a>

```python
proxy_url_input: str
```

- *Type:* str

---

##### `tls_server_name_input`<sup>Optional</sup> <a name="tls_server_name_input" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tlsServerNameInput"></a>

```python
tls_server_name_input: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

---

##### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

---

##### `cluster_ca_certificate`<sup>Optional</sup> <a name="cluster_ca_certificate" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.clusterCaCertificate"></a>

```python
cluster_ca_certificate: str
```

- *Type:* str

---

##### `config_context`<sup>Optional</sup> <a name="config_context" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContext"></a>

```python
config_context: str
```

- *Type:* str

---

##### `config_context_auth_info`<sup>Optional</sup> <a name="config_context_auth_info" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextAuthInfo"></a>

```python
config_context_auth_info: str
```

- *Type:* str

---

##### `config_context_cluster`<sup>Optional</sup> <a name="config_context_cluster" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configContextCluster"></a>

```python
config_context_cluster: str
```

- *Type:* str

---

##### `config_path`<sup>Optional</sup> <a name="config_path" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPath"></a>

```python
config_path: str
```

- *Type:* str

---

##### `config_paths`<sup>Optional</sup> <a name="config_paths" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.configPaths"></a>

```python
config_paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exec`<sup>Optional</sup> <a name="exec" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.exec"></a>

```python
exec: typing.Union[IResolvable, typing.List[KubernetesProviderExec]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a>]]

---

##### `experiments`<sup>Optional</sup> <a name="experiments" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.experiments"></a>

```python
experiments: typing.Union[IResolvable, typing.List[KubernetesProviderExperiments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a>]]

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `ignore_annotations`<sup>Optional</sup> <a name="ignore_annotations" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreAnnotations"></a>

```python
ignore_annotations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ignore_labels`<sup>Optional</sup> <a name="ignore_labels" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.ignoreLabels"></a>

```python
ignore_labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.insecure"></a>

```python
insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `proxy_url`<sup>Optional</sup> <a name="proxy_url" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.proxyUrl"></a>

```python
proxy_url: str
```

- *Type:* str

---

##### `tls_server_name`<sup>Optional</sup> <a name="tls_server_name" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tlsServerName"></a>

```python
tls_server_name: str
```

- *Type:* str

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.provider.KubernetesProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesProviderConfig <a name="KubernetesProviderConfig" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import provider

provider.KubernetesProviderConfig(
  alias: str = None,
  client_certificate: str = None,
  client_key: str = None,
  cluster_ca_certificate: str = None,
  config_context: str = None,
  config_context_auth_info: str = None,
  config_context_cluster: str = None,
  config_path: str = None,
  config_paths: typing.List[str] = None,
  exec: typing.Union[IResolvable, typing.List[KubernetesProviderExec]] = None,
  experiments: typing.Union[IResolvable, typing.List[KubernetesProviderExperiments]] = None,
  host: str = None,
  ignore_annotations: typing.List[str] = None,
  ignore_labels: typing.List[str] = None,
  insecure: typing.Union[bool, IResolvable] = None,
  password: str = None,
  proxy_url: str = None,
  tls_server_name: str = None,
  token: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clientCertificate">client_certificate</a></code> | <code>str</code> | PEM-encoded client certificate for TLS authentication. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clientKey">client_key</a></code> | <code>str</code> | PEM-encoded client certificate key for TLS authentication. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clusterCaCertificate">cluster_ca_certificate</a></code> | <code>str</code> | PEM-encoded root certificates bundle for TLS authentication. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContext">config_context</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#config_context KubernetesProvider#config_context}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContextAuthInfo">config_context_auth_info</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#config_context_auth_info KubernetesProvider#config_context_auth_info}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContextCluster">config_context_cluster</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#config_context_cluster KubernetesProvider#config_context_cluster}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configPath">config_path</a></code> | <code>str</code> | Path to the kube config file. Can be set with KUBE_CONFIG_PATH. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configPaths">config_paths</a></code> | <code>typing.List[str]</code> | A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.exec">exec</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a>]]</code> | exec block. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.experiments">experiments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a>]]</code> | experiments block. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.host">host</a></code> | <code>str</code> | The hostname (in form of URI) of Kubernetes master. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.ignoreAnnotations">ignore_annotations</a></code> | <code>typing.List[str]</code> | List of Kubernetes metadata annotations to ignore across all resources handled by this provider for situations where external systems are managing certain resource annotations. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.ignoreLabels">ignore_labels</a></code> | <code>typing.List[str]</code> | List of Kubernetes metadata labels to ignore across all resources handled by this provider for situations where external systems are managing certain resource labels. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether server should be accessed without verifying the TLS certificate. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.password">password</a></code> | <code>str</code> | The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.proxyUrl">proxy_url</a></code> | <code>str</code> | URL to the proxy to be used for all API requests. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.tlsServerName">tls_server_name</a></code> | <code>str</code> | Server name passed to the server for SNI and is used in the client to check server certificates against. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.token">token</a></code> | <code>str</code> | Token to authenticate an service account. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.username">username</a></code> | <code>str</code> | The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#alias KubernetesProvider#alias}

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

PEM-encoded client certificate for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#client_certificate KubernetesProvider#client_certificate}

---

##### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

PEM-encoded client certificate key for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#client_key KubernetesProvider#client_key}

---

##### `cluster_ca_certificate`<sup>Optional</sup> <a name="cluster_ca_certificate" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.clusterCaCertificate"></a>

```python
cluster_ca_certificate: str
```

- *Type:* str

PEM-encoded root certificates bundle for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#cluster_ca_certificate KubernetesProvider#cluster_ca_certificate}

---

##### `config_context`<sup>Optional</sup> <a name="config_context" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContext"></a>

```python
config_context: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#config_context KubernetesProvider#config_context}.

---

##### `config_context_auth_info`<sup>Optional</sup> <a name="config_context_auth_info" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContextAuthInfo"></a>

```python
config_context_auth_info: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#config_context_auth_info KubernetesProvider#config_context_auth_info}.

---

##### `config_context_cluster`<sup>Optional</sup> <a name="config_context_cluster" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configContextCluster"></a>

```python
config_context_cluster: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#config_context_cluster KubernetesProvider#config_context_cluster}.

---

##### `config_path`<sup>Optional</sup> <a name="config_path" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configPath"></a>

```python
config_path: str
```

- *Type:* str

Path to the kube config file. Can be set with KUBE_CONFIG_PATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#config_path KubernetesProvider#config_path}

---

##### `config_paths`<sup>Optional</sup> <a name="config_paths" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.configPaths"></a>

```python
config_paths: typing.List[str]
```

- *Type:* typing.List[str]

A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#config_paths KubernetesProvider#config_paths}

---

##### `exec`<sup>Optional</sup> <a name="exec" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.exec"></a>

```python
exec: typing.Union[IResolvable, typing.List[KubernetesProviderExec]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec">KubernetesProviderExec</a>]]

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#exec KubernetesProvider#exec}

---

##### `experiments`<sup>Optional</sup> <a name="experiments" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.experiments"></a>

```python
experiments: typing.Union[IResolvable, typing.List[KubernetesProviderExperiments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments">KubernetesProviderExperiments</a>]]

experiments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#experiments KubernetesProvider#experiments}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.host"></a>

```python
host: str
```

- *Type:* str

The hostname (in form of URI) of Kubernetes master.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#host KubernetesProvider#host}

---

##### `ignore_annotations`<sup>Optional</sup> <a name="ignore_annotations" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.ignoreAnnotations"></a>

```python
ignore_annotations: typing.List[str]
```

- *Type:* typing.List[str]

List of Kubernetes metadata annotations to ignore across all resources handled by this provider for situations where external systems are managing certain resource annotations.

Each item is a regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#ignore_annotations KubernetesProvider#ignore_annotations}

---

##### `ignore_labels`<sup>Optional</sup> <a name="ignore_labels" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.ignoreLabels"></a>

```python
ignore_labels: typing.List[str]
```

- *Type:* typing.List[str]

List of Kubernetes metadata labels to ignore across all resources handled by this provider for situations where external systems are managing certain resource labels.

Each item is a regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#ignore_labels KubernetesProvider#ignore_labels}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.insecure"></a>

```python
insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether server should be accessed without verifying the TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#insecure KubernetesProvider#insecure}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.password"></a>

```python
password: str
```

- *Type:* str

The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#password KubernetesProvider#password}

---

##### `proxy_url`<sup>Optional</sup> <a name="proxy_url" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.proxyUrl"></a>

```python
proxy_url: str
```

- *Type:* str

URL to the proxy to be used for all API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#proxy_url KubernetesProvider#proxy_url}

---

##### `tls_server_name`<sup>Optional</sup> <a name="tls_server_name" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.tlsServerName"></a>

```python
tls_server_name: str
```

- *Type:* str

Server name passed to the server for SNI and is used in the client to check server certificates against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#tls_server_name KubernetesProvider#tls_server_name}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Token to authenticate an service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#token KubernetesProvider#token}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-kubernetes.provider.KubernetesProviderConfig.property.username"></a>

```python
username: str
```

- *Type:* str

The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#username KubernetesProvider#username}

---

### KubernetesProviderExec <a name="KubernetesProviderExec" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import provider

provider.KubernetesProviderExec(
  api_version: str,
  command: str,
  args: typing.List[str] = None,
  env: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.apiVersion">api_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#api_version KubernetesProvider#api_version}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.command">command</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#command KubernetesProvider#command}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.args">args</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#args KubernetesProvider#args}. |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.env">env</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#env KubernetesProvider#env}. |

---

##### `api_version`<sup>Required</sup> <a name="api_version" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.apiVersion"></a>

```python
api_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#api_version KubernetesProvider#api_version}.

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.command"></a>

```python
command: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#command KubernetesProvider#command}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#args KubernetesProvider#args}.

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExec.property.env"></a>

```python
env: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#env KubernetesProvider#env}.

---

### KubernetesProviderExperiments <a name="KubernetesProviderExperiments" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import provider

provider.KubernetesProviderExperiments(
  manifest_resource: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments.property.manifestResource">manifest_resource</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the `kubernetes_manifest` resource. |

---

##### `manifest_resource`<sup>Optional</sup> <a name="manifest_resource" id="@cdktf/provider-kubernetes.provider.KubernetesProviderExperiments.property.manifestResource"></a>

```python
manifest_resource: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the `kubernetes_manifest` resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs#manifest_resource KubernetesProvider#manifest_resource}

---



