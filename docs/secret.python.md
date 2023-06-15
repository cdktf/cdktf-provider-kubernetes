# `kubernetes_secret`

Refer to the Terraform Registory for docs: [`kubernetes_secret`](https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret).

# `secret` Submodule <a name="`secret` Submodule" id="@cdktf/provider-kubernetes.secret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Secret <a name="Secret" id="@cdktf/provider-kubernetes.secret.Secret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret kubernetes_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.secret.Secret.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import secret

secret.Secret(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: SecretMetadata,
  binary_data: typing.Mapping[str] = None,
  data: typing.Mapping[str] = None,
  id: str = None,
  immutable: typing.Union[bool, IResolvable] = None,
  timeouts: SecretTimeouts = None,
  type: str = None,
  wait_for_service_account_token: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadata">SecretMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.binaryData">binary_data</a></code> | <code>typing.Mapping[str]</code> | A map of the secret data in base64 encoding. Use this for binary data. |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.data">data</a></code> | <code>typing.Mapping[str]</code> | A map of the secret data. |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#id Secret#id}. |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.immutable">immutable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ensures that data stored in the Secret cannot be updated (only object metadata can be modified). |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.secret.SecretTimeouts">SecretTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.type">type</a></code> | <code>str</code> | Type of secret. |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.waitForServiceAccountToken">wait_for_service_account_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Terraform will wait for the service account token to be created. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.secret.SecretMetadata">SecretMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#metadata Secret#metadata}

---

##### `binary_data`<sup>Optional</sup> <a name="binary_data" id="@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.binaryData"></a>

- *Type:* typing.Mapping[str]

A map of the secret data in base64 encoding. Use this for binary data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#binary_data Secret#binary_data}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.data"></a>

- *Type:* typing.Mapping[str]

A map of the secret data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#data Secret#data}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#id Secret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `immutable`<sup>Optional</sup> <a name="immutable" id="@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.immutable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ensures that data stored in the Secret cannot be updated (only object metadata can be modified).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#immutable Secret#immutable}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.secret.SecretTimeouts">SecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#timeouts Secret#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.type"></a>

- *Type:* str

Type of secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#type Secret#type}

---

##### `wait_for_service_account_token`<sup>Optional</sup> <a name="wait_for_service_account_token" id="@cdktf/provider-kubernetes.secret.Secret.Initializer.parameter.waitForServiceAccountToken"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Terraform will wait for the service account token to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#wait_for_service_account_token Secret#wait_for_service_account_token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.resetBinaryData">reset_binary_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.resetData">reset_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.resetImmutable">reset_immutable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.resetWaitForServiceAccountToken">reset_wait_for_service_account_token</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.secret.Secret.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.secret.Secret.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.secret.Secret.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.secret.Secret.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.secret.Secret.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.secret.Secret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.secret.Secret.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.secret.Secret.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.secret.Secret.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.secret.Secret.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.Secret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.secret.Secret.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.Secret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.secret.Secret.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.Secret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.secret.Secret.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.Secret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.secret.Secret.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.Secret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.secret.Secret.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.Secret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.secret.Secret.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.Secret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.secret.Secret.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.Secret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.secret.Secret.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.Secret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.secret.Secret.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.Secret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-kubernetes.secret.Secret.putMetadata"></a>

```python
def put_metadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  namespace: str = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.secret.Secret.putMetadata.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the secret that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#annotations Secret#annotations}

---

###### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.secret.Secret.putMetadata.parameter.generateName"></a>

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#generate_name Secret#generate_name}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.secret.Secret.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the secret.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#labels Secret#labels}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.secret.Secret.putMetadata.parameter.name"></a>

- *Type:* str

Name of the secret, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#name Secret#name}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.secret.Secret.putMetadata.parameter.namespace"></a>

- *Type:* str

Namespace defines the space within which name of the secret must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#namespace Secret#namespace}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-kubernetes.secret.Secret.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.secret.Secret.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#create Secret#create}.

---

##### `reset_binary_data` <a name="reset_binary_data" id="@cdktf/provider-kubernetes.secret.Secret.resetBinaryData"></a>

```python
def reset_binary_data() -> None
```

##### `reset_data` <a name="reset_data" id="@cdktf/provider-kubernetes.secret.Secret.resetData"></a>

```python
def reset_data() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-kubernetes.secret.Secret.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_immutable` <a name="reset_immutable" id="@cdktf/provider-kubernetes.secret.Secret.resetImmutable"></a>

```python
def reset_immutable() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-kubernetes.secret.Secret.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-kubernetes.secret.Secret.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_wait_for_service_account_token` <a name="reset_wait_for_service_account_token" id="@cdktf/provider-kubernetes.secret.Secret.resetWaitForServiceAccountToken"></a>

```python
def reset_wait_for_service_account_token() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.secret.Secret.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import secret

secret.Secret.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.secret.Secret.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.secret.Secret.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import secret

secret.Secret.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.secret.Secret.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-kubernetes.secret.Secret.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_kubernetes import secret

secret.Secret.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.secret.Secret.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference">SecretMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference">SecretTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.binaryDataInput">binary_data_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.dataInput">data_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.immutableInput">immutable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadata">SecretMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.secret.SecretTimeouts">SecretTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.waitForServiceAccountTokenInput">wait_for_service_account_token_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.binaryData">binary_data</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.data">data</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.immutable">immutable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.waitForServiceAccountToken">wait_for_service_account_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.secret.Secret.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.secret.Secret.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.secret.Secret.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.secret.Secret.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.secret.Secret.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.secret.Secret.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.secret.Secret.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.secret.Secret.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.secret.Secret.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.secret.Secret.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.secret.Secret.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.secret.Secret.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.secret.Secret.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.secret.Secret.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.secret.Secret.property.metadata"></a>

```python
metadata: SecretMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference">SecretMetadataOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.secret.Secret.property.timeouts"></a>

```python
timeouts: SecretTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference">SecretTimeoutsOutputReference</a>

---

##### `binary_data_input`<sup>Optional</sup> <a name="binary_data_input" id="@cdktf/provider-kubernetes.secret.Secret.property.binaryDataInput"></a>

```python
binary_data_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktf/provider-kubernetes.secret.Secret.property.dataInput"></a>

```python
data_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-kubernetes.secret.Secret.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `immutable_input`<sup>Optional</sup> <a name="immutable_input" id="@cdktf/provider-kubernetes.secret.Secret.property.immutableInput"></a>

```python
immutable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-kubernetes.secret.Secret.property.metadataInput"></a>

```python
metadata_input: SecretMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.secret.SecretMetadata">SecretMetadata</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-kubernetes.secret.Secret.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SecretTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.secret.SecretTimeouts">SecretTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-kubernetes.secret.Secret.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `wait_for_service_account_token_input`<sup>Optional</sup> <a name="wait_for_service_account_token_input" id="@cdktf/provider-kubernetes.secret.Secret.property.waitForServiceAccountTokenInput"></a>

```python
wait_for_service_account_token_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `binary_data`<sup>Required</sup> <a name="binary_data" id="@cdktf/provider-kubernetes.secret.Secret.property.binaryData"></a>

```python
binary_data: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-kubernetes.secret.Secret.property.data"></a>

```python
data: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.secret.Secret.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `immutable`<sup>Required</sup> <a name="immutable" id="@cdktf/provider-kubernetes.secret.Secret.property.immutable"></a>

```python
immutable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.secret.Secret.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `wait_for_service_account_token`<sup>Required</sup> <a name="wait_for_service_account_token" id="@cdktf/provider-kubernetes.secret.Secret.property.waitForServiceAccountToken"></a>

```python
wait_for_service_account_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.secret.Secret.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.secret.Secret.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecretConfig <a name="SecretConfig" id="@cdktf/provider-kubernetes.secret.SecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.secret.SecretConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import secret

secret.SecretConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: SecretMetadata,
  binary_data: typing.Mapping[str] = None,
  data: typing.Mapping[str] = None,
  id: str = None,
  immutable: typing.Union[bool, IResolvable] = None,
  timeouts: SecretTimeouts = None,
  type: str = None,
  wait_for_service_account_token: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadata">SecretMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretConfig.property.binaryData">binary_data</a></code> | <code>typing.Mapping[str]</code> | A map of the secret data in base64 encoding. Use this for binary data. |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretConfig.property.data">data</a></code> | <code>typing.Mapping[str]</code> | A map of the secret data. |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#id Secret#id}. |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretConfig.property.immutable">immutable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ensures that data stored in the Secret cannot be updated (only object metadata can be modified). |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.secret.SecretTimeouts">SecretTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretConfig.property.type">type</a></code> | <code>str</code> | Type of secret. |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretConfig.property.waitForServiceAccountToken">wait_for_service_account_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Terraform will wait for the service account token to be created. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.secret.SecretConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.secret.SecretConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.secret.SecretConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.secret.SecretConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.secret.SecretConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.secret.SecretConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.secret.SecretConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.secret.SecretConfig.property.metadata"></a>

```python
metadata: SecretMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.secret.SecretMetadata">SecretMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#metadata Secret#metadata}

---

##### `binary_data`<sup>Optional</sup> <a name="binary_data" id="@cdktf/provider-kubernetes.secret.SecretConfig.property.binaryData"></a>

```python
binary_data: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of the secret data in base64 encoding. Use this for binary data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#binary_data Secret#binary_data}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-kubernetes.secret.SecretConfig.property.data"></a>

```python
data: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of the secret data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#data Secret#data}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.secret.SecretConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#id Secret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `immutable`<sup>Optional</sup> <a name="immutable" id="@cdktf/provider-kubernetes.secret.SecretConfig.property.immutable"></a>

```python
immutable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ensures that data stored in the Secret cannot be updated (only object metadata can be modified).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#immutable Secret#immutable}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.secret.SecretConfig.property.timeouts"></a>

```python
timeouts: SecretTimeouts
```

- *Type:* <a href="#@cdktf/provider-kubernetes.secret.SecretTimeouts">SecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#timeouts Secret#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-kubernetes.secret.SecretConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Type of secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#type Secret#type}

---

##### `wait_for_service_account_token`<sup>Optional</sup> <a name="wait_for_service_account_token" id="@cdktf/provider-kubernetes.secret.SecretConfig.property.waitForServiceAccountToken"></a>

```python
wait_for_service_account_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Terraform will wait for the service account token to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#wait_for_service_account_token Secret#wait_for_service_account_token}

---

### SecretMetadata <a name="SecretMetadata" id="@cdktf/provider-kubernetes.secret.SecretMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.secret.SecretMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import secret

secret.SecretMetadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | An unstructured key value map stored with the secret that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadata.property.generateName">generate_name</a></code> | <code>str</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the secret. |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadata.property.name">name</a></code> | <code>str</code> | Name of the secret, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadata.property.namespace">namespace</a></code> | <code>str</code> | Namespace defines the space within which name of the secret must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.secret.SecretMetadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the secret that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#annotations Secret#annotations}

---

##### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.secret.SecretMetadata.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#generate_name Secret#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.secret.SecretMetadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the secret.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#labels Secret#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.secret.SecretMetadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the secret, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#name Secret#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.secret.SecretMetadata.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace defines the space within which name of the secret must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#namespace Secret#namespace}

---

### SecretTimeouts <a name="SecretTimeouts" id="@cdktf/provider-kubernetes.secret.SecretTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.secret.SecretTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import secret

secret.SecretTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#create Secret#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.secret.SecretTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/secret#create Secret#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretMetadataOutputReference <a name="SecretMetadataOutputReference" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import secret

secret.SecretMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.resetGenerateName">reset_generate_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_generate_name` <a name="reset_generate_name" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.resetGenerateName"></a>

```python
def reset_generate_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.generateNameInput">generate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.generateName">generate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.secret.SecretMetadata">SecretMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name_input`<sup>Optional</sup> <a name="generate_name_input" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.generateNameInput"></a>

```python
generate_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name`<sup>Required</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.secret.SecretMetadataOutputReference.property.internalValue"></a>

```python
internal_value: SecretMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.secret.SecretMetadata">SecretMetadata</a>

---


### SecretTimeoutsOutputReference <a name="SecretTimeoutsOutputReference" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import secret

secret.SecretTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.secret.SecretTimeouts">SecretTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.secret.SecretTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SecretTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.secret.SecretTimeouts">SecretTimeouts</a>]

---



