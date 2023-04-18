# `kubernetes_persistent_volume_claim_v1`

Refer to the Terraform Registory for docs: [`kubernetes_persistent_volume_claim_v1`](https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1).

# `persistentVolumeClaimV1` Submodule <a name="`persistentVolumeClaimV1` Submodule" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersistentVolumeClaimV1 <a name="PersistentVolumeClaimV1" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1 kubernetes_persistent_volume_claim_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim_v1

persistentVolumeClaimV1.PersistentVolumeClaimV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: PersistentVolumeClaimV1Metadata,
  spec: PersistentVolumeClaimV1Spec,
  id: str = None,
  timeouts: PersistentVolumeClaimV1Timeouts = None,
  wait_until_bound: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata">PersistentVolumeClaimV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec">PersistentVolumeClaimV1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#id PersistentVolumeClaimV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts">PersistentVolumeClaimV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.waitUntilBound">wait_until_bound</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to wait for the claim to reach `Bound` state (to find volume in which to claim the space). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata">PersistentVolumeClaimV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#metadata PersistentVolumeClaimV1#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec">PersistentVolumeClaimV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#spec PersistentVolumeClaimV1#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#id PersistentVolumeClaimV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts">PersistentVolumeClaimV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#timeouts PersistentVolumeClaimV1#timeouts}

---

##### `wait_until_bound`<sup>Optional</sup> <a name="wait_until_bound" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.waitUntilBound"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to wait for the claim to reach `Bound` state (to find volume in which to claim the space).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#wait_until_bound PersistentVolumeClaimV1#wait_until_bound}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.resetWaitUntilBound">reset_wait_until_bound</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putMetadata"></a>

```python
def put_metadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  namespace: str = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putMetadata.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#annotations PersistentVolumeClaimV1#annotations}

---

###### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putMetadata.parameter.generateName"></a>

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#generate_name PersistentVolumeClaimV1#generate_name}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#labels PersistentVolumeClaimV1#labels}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putMetadata.parameter.name"></a>

- *Type:* str

Name of the persistent volume claim, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#name PersistentVolumeClaimV1#name}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putMetadata.parameter.namespace"></a>

- *Type:* str

Namespace defines the space within which name of the persistent volume claim must be unique.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#namespace PersistentVolumeClaimV1#namespace}

---

##### `put_spec` <a name="put_spec" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putSpec"></a>

```python
def put_spec(
  access_modes: typing.List[str],
  resources: PersistentVolumeClaimV1SpecResources,
  selector: PersistentVolumeClaimV1SpecSelector = None,
  storage_class_name: str = None,
  volume_name: str = None
) -> None
```

###### `access_modes`<sup>Required</sup> <a name="access_modes" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putSpec.parameter.accessModes"></a>

- *Type:* typing.List[str]

A set of the desired access modes the volume should have. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#access-modes-1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#access_modes PersistentVolumeClaimV1#access_modes}

---

###### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putSpec.parameter.resources"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources">PersistentVolumeClaimV1SpecResources</a>

resources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#resources PersistentVolumeClaimV1#resources}

---

###### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putSpec.parameter.selector"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector">PersistentVolumeClaimV1SpecSelector</a>

selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#selector PersistentVolumeClaimV1#selector}

---

###### `storage_class_name`<sup>Optional</sup> <a name="storage_class_name" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putSpec.parameter.storageClassName"></a>

- *Type:* str

Name of the storage class requested by the claim.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#storage_class_name PersistentVolumeClaimV1#storage_class_name}

---

###### `volume_name`<sup>Optional</sup> <a name="volume_name" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putSpec.parameter.volumeName"></a>

- *Type:* str

The binding reference to the PersistentVolume backing this claim.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#volume_name PersistentVolumeClaimV1#volume_name}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#create PersistentVolumeClaimV1#create}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_wait_until_bound` <a name="reset_wait_until_bound" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.resetWaitUntilBound"></a>

```python
def reset_wait_until_bound() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim_v1

persistentVolumeClaimV1.PersistentVolumeClaimV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim_v1

persistentVolumeClaimV1.PersistentVolumeClaimV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim_v1

persistentVolumeClaimV1.PersistentVolumeClaimV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference">PersistentVolumeClaimV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference">PersistentVolumeClaimV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference">PersistentVolumeClaimV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata">PersistentVolumeClaimV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.specInput">spec_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec">PersistentVolumeClaimV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts">PersistentVolumeClaimV1Timeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.waitUntilBoundInput">wait_until_bound_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.waitUntilBound">wait_until_bound</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.metadata"></a>

```python
metadata: PersistentVolumeClaimV1MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference">PersistentVolumeClaimV1MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.spec"></a>

```python
spec: PersistentVolumeClaimV1SpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference">PersistentVolumeClaimV1SpecOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.timeouts"></a>

```python
timeouts: PersistentVolumeClaimV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference">PersistentVolumeClaimV1TimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.metadataInput"></a>

```python
metadata_input: PersistentVolumeClaimV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata">PersistentVolumeClaimV1Metadata</a>

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.specInput"></a>

```python
spec_input: PersistentVolumeClaimV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec">PersistentVolumeClaimV1Spec</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[PersistentVolumeClaimV1Timeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts">PersistentVolumeClaimV1Timeouts</a>, cdktf.IResolvable]

---

##### `wait_until_bound_input`<sup>Optional</sup> <a name="wait_until_bound_input" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.waitUntilBoundInput"></a>

```python
wait_until_bound_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `wait_until_bound`<sup>Required</sup> <a name="wait_until_bound" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.waitUntilBound"></a>

```python
wait_until_bound: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PersistentVolumeClaimV1Config <a name="PersistentVolumeClaimV1Config" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim_v1

persistentVolumeClaimV1.PersistentVolumeClaimV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: PersistentVolumeClaimV1Metadata,
  spec: PersistentVolumeClaimV1Spec,
  id: str = None,
  timeouts: PersistentVolumeClaimV1Timeouts = None,
  wait_until_bound: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata">PersistentVolumeClaimV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec">PersistentVolumeClaimV1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#id PersistentVolumeClaimV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts">PersistentVolumeClaimV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.waitUntilBound">wait_until_bound</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to wait for the claim to reach `Bound` state (to find volume in which to claim the space). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.metadata"></a>

```python
metadata: PersistentVolumeClaimV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata">PersistentVolumeClaimV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#metadata PersistentVolumeClaimV1#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.spec"></a>

```python
spec: PersistentVolumeClaimV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec">PersistentVolumeClaimV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#spec PersistentVolumeClaimV1#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#id PersistentVolumeClaimV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.timeouts"></a>

```python
timeouts: PersistentVolumeClaimV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts">PersistentVolumeClaimV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#timeouts PersistentVolumeClaimV1#timeouts}

---

##### `wait_until_bound`<sup>Optional</sup> <a name="wait_until_bound" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.waitUntilBound"></a>

```python
wait_until_bound: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to wait for the claim to reach `Bound` state (to find volume in which to claim the space).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#wait_until_bound PersistentVolumeClaimV1#wait_until_bound}

---

### PersistentVolumeClaimV1Metadata <a name="PersistentVolumeClaimV1Metadata" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim_v1

persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata(
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
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.generateName">generate_name</a></code> | <code>str</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.name">name</a></code> | <code>str</code> | Name of the persistent volume claim, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.namespace">namespace</a></code> | <code>str</code> | Namespace defines the space within which name of the persistent volume claim must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#annotations PersistentVolumeClaimV1#annotations}

---

##### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#generate_name PersistentVolumeClaimV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#labels PersistentVolumeClaimV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the persistent volume claim, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#name PersistentVolumeClaimV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace defines the space within which name of the persistent volume claim must be unique.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#namespace PersistentVolumeClaimV1#namespace}

---

### PersistentVolumeClaimV1Spec <a name="PersistentVolumeClaimV1Spec" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim_v1

persistentVolumeClaimV1.PersistentVolumeClaimV1Spec(
  access_modes: typing.List[str],
  resources: PersistentVolumeClaimV1SpecResources,
  selector: PersistentVolumeClaimV1SpecSelector = None,
  storage_class_name: str = None,
  volume_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.accessModes">access_modes</a></code> | <code>typing.List[str]</code> | A set of the desired access modes the volume should have. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#access-modes-1. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources">PersistentVolumeClaimV1SpecResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector">PersistentVolumeClaimV1SpecSelector</a></code> | selector block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.storageClassName">storage_class_name</a></code> | <code>str</code> | Name of the storage class requested by the claim. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.volumeName">volume_name</a></code> | <code>str</code> | The binding reference to the PersistentVolume backing this claim. |

---

##### `access_modes`<sup>Required</sup> <a name="access_modes" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.accessModes"></a>

```python
access_modes: typing.List[str]
```

- *Type:* typing.List[str]

A set of the desired access modes the volume should have. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#access-modes-1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#access_modes PersistentVolumeClaimV1#access_modes}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.resources"></a>

```python
resources: PersistentVolumeClaimV1SpecResources
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources">PersistentVolumeClaimV1SpecResources</a>

resources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#resources PersistentVolumeClaimV1#resources}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.selector"></a>

```python
selector: PersistentVolumeClaimV1SpecSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector">PersistentVolumeClaimV1SpecSelector</a>

selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#selector PersistentVolumeClaimV1#selector}

---

##### `storage_class_name`<sup>Optional</sup> <a name="storage_class_name" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.storageClassName"></a>

```python
storage_class_name: str
```

- *Type:* str

Name of the storage class requested by the claim.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#storage_class_name PersistentVolumeClaimV1#storage_class_name}

---

##### `volume_name`<sup>Optional</sup> <a name="volume_name" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.volumeName"></a>

```python
volume_name: str
```

- *Type:* str

The binding reference to the PersistentVolume backing this claim.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#volume_name PersistentVolumeClaimV1#volume_name}

---

### PersistentVolumeClaimV1SpecResources <a name="PersistentVolumeClaimV1SpecResources" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim_v1

persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources(
  limits: typing.Mapping[str] = None,
  requests: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources.property.limits">limits</a></code> | <code>typing.Mapping[str]</code> | Map describing the maximum amount of compute resources allowed. More info: http://kubernetes.io/docs/user-guide/compute-resources/. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources.property.requests">requests</a></code> | <code>typing.Mapping[str]</code> | Map describing the minimum amount of compute resources required. |

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources.property.limits"></a>

```python
limits: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map describing the maximum amount of compute resources allowed. More info: http://kubernetes.io/docs/user-guide/compute-resources/.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#limits PersistentVolumeClaimV1#limits}

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources.property.requests"></a>

```python
requests: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map describing the minimum amount of compute resources required.

If this is omitted for a container, it defaults to `limits` if that is explicitly specified, otherwise to an implementation-defined value. More info: http://kubernetes.io/docs/user-guide/compute-resources/

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#requests PersistentVolumeClaimV1#requests}

---

### PersistentVolumeClaimV1SpecSelector <a name="PersistentVolumeClaimV1SpecSelector" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim_v1

persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector(
  match_expressions: typing.Union[IResolvable, typing.List[PersistentVolumeClaimV1SpecSelectorMatchExpressions]] = None,
  match_labels: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector.property.matchExpressions">match_expressions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions">PersistentVolumeClaimV1SpecSelectorMatchExpressions</a>]]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector.property.matchLabels">match_labels</a></code> | <code>typing.Mapping[str]</code> | A map of {key,value} pairs. |

---

##### `match_expressions`<sup>Optional</sup> <a name="match_expressions" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector.property.matchExpressions"></a>

```python
match_expressions: typing.Union[IResolvable, typing.List[PersistentVolumeClaimV1SpecSelectorMatchExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions">PersistentVolumeClaimV1SpecSelectorMatchExpressions</a>]]

match_expressions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#match_expressions PersistentVolumeClaimV1#match_expressions}

---

##### `match_labels`<sup>Optional</sup> <a name="match_labels" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector.property.matchLabels"></a>

```python
match_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#match_labels PersistentVolumeClaimV1#match_labels}

---

### PersistentVolumeClaimV1SpecSelectorMatchExpressions <a name="PersistentVolumeClaimV1SpecSelectorMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim_v1

persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions(
  key: str = None,
  operator: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions.property.key">key</a></code> | <code>str</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions.property.operator">operator</a></code> | <code>str</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions.property.values">values</a></code> | <code>typing.List[str]</code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions.property.key"></a>

```python
key: str
```

- *Type:* str

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#key PersistentVolumeClaimV1#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions.property.operator"></a>

```python
operator: str
```

- *Type:* str

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#operator PersistentVolumeClaimV1#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#values PersistentVolumeClaimV1#values}

---

### PersistentVolumeClaimV1Timeouts <a name="PersistentVolumeClaimV1Timeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim_v1

persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#create PersistentVolumeClaimV1#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#create PersistentVolumeClaimV1#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### PersistentVolumeClaimV1MetadataOutputReference <a name="PersistentVolumeClaimV1MetadataOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim_v1

persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetGenerateName">reset_generate_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_generate_name` <a name="reset_generate_name" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetGenerateName"></a>

```python
def reset_generate_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.generateNameInput">generate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.generateName">generate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata">PersistentVolumeClaimV1Metadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name_input`<sup>Optional</sup> <a name="generate_name_input" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.generateNameInput"></a>

```python
generate_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name`<sup>Required</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeClaimV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata">PersistentVolumeClaimV1Metadata</a>

---


### PersistentVolumeClaimV1SpecOutputReference <a name="PersistentVolumeClaimV1SpecOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim_v1

persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.putResources">put_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.putSelector">put_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resetSelector">reset_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resetStorageClassName">reset_storage_class_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resetVolumeName">reset_volume_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_resources` <a name="put_resources" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.putResources"></a>

```python
def put_resources(
  limits: typing.Mapping[str] = None,
  requests: typing.Mapping[str] = None
) -> None
```

###### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.putResources.parameter.limits"></a>

- *Type:* typing.Mapping[str]

Map describing the maximum amount of compute resources allowed. More info: http://kubernetes.io/docs/user-guide/compute-resources/.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#limits PersistentVolumeClaimV1#limits}

---

###### `requests`<sup>Optional</sup> <a name="requests" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.putResources.parameter.requests"></a>

- *Type:* typing.Mapping[str]

Map describing the minimum amount of compute resources required.

If this is omitted for a container, it defaults to `limits` if that is explicitly specified, otherwise to an implementation-defined value. More info: http://kubernetes.io/docs/user-guide/compute-resources/

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#requests PersistentVolumeClaimV1#requests}

---

##### `put_selector` <a name="put_selector" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.putSelector"></a>

```python
def put_selector(
  match_expressions: typing.Union[IResolvable, typing.List[PersistentVolumeClaimV1SpecSelectorMatchExpressions]] = None,
  match_labels: typing.Mapping[str] = None
) -> None
```

###### `match_expressions`<sup>Optional</sup> <a name="match_expressions" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.putSelector.parameter.matchExpressions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions">PersistentVolumeClaimV1SpecSelectorMatchExpressions</a>]]

match_expressions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#match_expressions PersistentVolumeClaimV1#match_expressions}

---

###### `match_labels`<sup>Optional</sup> <a name="match_labels" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.putSelector.parameter.matchLabels"></a>

- *Type:* typing.Mapping[str]

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim_v1#match_labels PersistentVolumeClaimV1#match_labels}

---

##### `reset_selector` <a name="reset_selector" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resetSelector"></a>

```python
def reset_selector() -> None
```

##### `reset_storage_class_name` <a name="reset_storage_class_name" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resetStorageClassName"></a>

```python
def reset_storage_class_name() -> None
```

##### `reset_volume_name` <a name="reset_volume_name" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resetVolumeName"></a>

```python
def reset_volume_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference">PersistentVolumeClaimV1SpecResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference">PersistentVolumeClaimV1SpecSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.accessModesInput">access_modes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.resourcesInput">resources_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources">PersistentVolumeClaimV1SpecResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.selectorInput">selector_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector">PersistentVolumeClaimV1SpecSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.storageClassNameInput">storage_class_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.volumeNameInput">volume_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.accessModes">access_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.storageClassName">storage_class_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.volumeName">volume_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec">PersistentVolumeClaimV1Spec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.resources"></a>

```python
resources: PersistentVolumeClaimV1SpecResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference">PersistentVolumeClaimV1SpecResourcesOutputReference</a>

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.selector"></a>

```python
selector: PersistentVolumeClaimV1SpecSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference">PersistentVolumeClaimV1SpecSelectorOutputReference</a>

---

##### `access_modes_input`<sup>Optional</sup> <a name="access_modes_input" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.accessModesInput"></a>

```python
access_modes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.resourcesInput"></a>

```python
resources_input: PersistentVolumeClaimV1SpecResources
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources">PersistentVolumeClaimV1SpecResources</a>

---

##### `selector_input`<sup>Optional</sup> <a name="selector_input" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.selectorInput"></a>

```python
selector_input: PersistentVolumeClaimV1SpecSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector">PersistentVolumeClaimV1SpecSelector</a>

---

##### `storage_class_name_input`<sup>Optional</sup> <a name="storage_class_name_input" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.storageClassNameInput"></a>

```python
storage_class_name_input: str
```

- *Type:* str

---

##### `volume_name_input`<sup>Optional</sup> <a name="volume_name_input" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.volumeNameInput"></a>

```python
volume_name_input: str
```

- *Type:* str

---

##### `access_modes`<sup>Required</sup> <a name="access_modes" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.accessModes"></a>

```python
access_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_class_name`<sup>Required</sup> <a name="storage_class_name" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.storageClassName"></a>

```python
storage_class_name: str
```

- *Type:* str

---

##### `volume_name`<sup>Required</sup> <a name="volume_name" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.volumeName"></a>

```python
volume_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeClaimV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec">PersistentVolumeClaimV1Spec</a>

---


### PersistentVolumeClaimV1SpecResourcesOutputReference <a name="PersistentVolumeClaimV1SpecResourcesOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim_v1

persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.resetLimits">reset_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.resetRequests">reset_requests</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_limits` <a name="reset_limits" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.resetLimits"></a>

```python
def reset_limits() -> None
```

##### `reset_requests` <a name="reset_requests" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.resetRequests"></a>

```python
def reset_requests() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.limitsInput">limits_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.requestsInput">requests_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.limits">limits</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.requests">requests</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources">PersistentVolumeClaimV1SpecResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `limits_input`<sup>Optional</sup> <a name="limits_input" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.limitsInput"></a>

```python
limits_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `requests_input`<sup>Optional</sup> <a name="requests_input" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.requestsInput"></a>

```python
requests_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.limits"></a>

```python
limits: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.requests"></a>

```python
requests: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeClaimV1SpecResources
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources">PersistentVolumeClaimV1SpecResources</a>

---


### PersistentVolumeClaimV1SpecSelectorMatchExpressionsList <a name="PersistentVolumeClaimV1SpecSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim_v1

persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions">PersistentVolumeClaimV1SpecSelectorMatchExpressions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PersistentVolumeClaimV1SpecSelectorMatchExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions">PersistentVolumeClaimV1SpecSelectorMatchExpressions</a>]]

---


### PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference <a name="PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim_v1

persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions">PersistentVolumeClaimV1SpecSelectorMatchExpressions</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[PersistentVolumeClaimV1SpecSelectorMatchExpressions, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions">PersistentVolumeClaimV1SpecSelectorMatchExpressions</a>, cdktf.IResolvable]

---


### PersistentVolumeClaimV1SpecSelectorOutputReference <a name="PersistentVolumeClaimV1SpecSelectorOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim_v1

persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.putMatchExpressions">put_match_expressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.resetMatchExpressions">reset_match_expressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.resetMatchLabels">reset_match_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match_expressions` <a name="put_match_expressions" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.putMatchExpressions"></a>

```python
def put_match_expressions(
  value: typing.Union[IResolvable, typing.List[PersistentVolumeClaimV1SpecSelectorMatchExpressions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions">PersistentVolumeClaimV1SpecSelectorMatchExpressions</a>]]

---

##### `reset_match_expressions` <a name="reset_match_expressions" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.resetMatchExpressions"></a>

```python
def reset_match_expressions() -> None
```

##### `reset_match_labels` <a name="reset_match_labels" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.resetMatchLabels"></a>

```python
def reset_match_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.matchExpressions">match_expressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList">PersistentVolumeClaimV1SpecSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.matchExpressionsInput">match_expressions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions">PersistentVolumeClaimV1SpecSelectorMatchExpressions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.matchLabelsInput">match_labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.matchLabels">match_labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector">PersistentVolumeClaimV1SpecSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_expressions`<sup>Required</sup> <a name="match_expressions" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.matchExpressions"></a>

```python
match_expressions: PersistentVolumeClaimV1SpecSelectorMatchExpressionsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList">PersistentVolumeClaimV1SpecSelectorMatchExpressionsList</a>

---

##### `match_expressions_input`<sup>Optional</sup> <a name="match_expressions_input" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.matchExpressionsInput"></a>

```python
match_expressions_input: typing.Union[IResolvable, typing.List[PersistentVolumeClaimV1SpecSelectorMatchExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions">PersistentVolumeClaimV1SpecSelectorMatchExpressions</a>]]

---

##### `match_labels_input`<sup>Optional</sup> <a name="match_labels_input" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.matchLabelsInput"></a>

```python
match_labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `match_labels`<sup>Required</sup> <a name="match_labels" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.matchLabels"></a>

```python
match_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeClaimV1SpecSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector">PersistentVolumeClaimV1SpecSelector</a>

---


### PersistentVolumeClaimV1TimeoutsOutputReference <a name="PersistentVolumeClaimV1TimeoutsOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim_v1

persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts">PersistentVolumeClaimV1Timeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[PersistentVolumeClaimV1Timeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts">PersistentVolumeClaimV1Timeouts</a>, cdktf.IResolvable]

---



