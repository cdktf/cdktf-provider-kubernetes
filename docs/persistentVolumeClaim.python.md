# `kubernetes_persistent_volume_claim`

Refer to the Terraform Registory for docs: [`kubernetes_persistent_volume_claim`](https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim).

# `persistentVolumeClaim` Submodule <a name="`persistentVolumeClaim` Submodule" id="@cdktf/provider-kubernetes.persistentVolumeClaim"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersistentVolumeClaim <a name="PersistentVolumeClaim" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim kubernetes_persistent_volume_claim}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim

persistentVolumeClaim.PersistentVolumeClaim(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: PersistentVolumeClaimMetadata,
  spec: PersistentVolumeClaimSpec,
  id: str = None,
  timeouts: PersistentVolumeClaimTimeouts = None,
  wait_until_bound: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata">PersistentVolumeClaimMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec">PersistentVolumeClaimSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#id PersistentVolumeClaim#id}. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeouts">PersistentVolumeClaimTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.waitUntilBound">wait_until_bound</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to wait for the claim to reach `Bound` state (to find volume in which to claim the space). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata">PersistentVolumeClaimMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#metadata PersistentVolumeClaim#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec">PersistentVolumeClaimSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#spec PersistentVolumeClaim#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#id PersistentVolumeClaim#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeouts">PersistentVolumeClaimTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#timeouts PersistentVolumeClaim#timeouts}

---

##### `wait_until_bound`<sup>Optional</sup> <a name="wait_until_bound" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.waitUntilBound"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to wait for the claim to reach `Bound` state (to find volume in which to claim the space).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#wait_until_bound PersistentVolumeClaim#wait_until_bound}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.resetWaitUntilBound">reset_wait_until_bound</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.putMetadata"></a>

```python
def put_metadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  namespace: str = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.putMetadata.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#annotations PersistentVolumeClaim#annotations}

---

###### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.putMetadata.parameter.generateName"></a>

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#generate_name PersistentVolumeClaim#generate_name}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#labels PersistentVolumeClaim#labels}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.putMetadata.parameter.name"></a>

- *Type:* str

Name of the persistent volume claim, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#name PersistentVolumeClaim#name}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.putMetadata.parameter.namespace"></a>

- *Type:* str

Namespace defines the space within which name of the persistent volume claim must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#namespace PersistentVolumeClaim#namespace}

---

##### `put_spec` <a name="put_spec" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.putSpec"></a>

```python
def put_spec(
  access_modes: typing.List[str],
  resources: PersistentVolumeClaimSpecResources,
  selector: PersistentVolumeClaimSpecSelector = None,
  storage_class_name: str = None,
  volume_name: str = None
) -> None
```

###### `access_modes`<sup>Required</sup> <a name="access_modes" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.putSpec.parameter.accessModes"></a>

- *Type:* typing.List[str]

A set of the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#access_modes PersistentVolumeClaim#access_modes}

---

###### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.putSpec.parameter.resources"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResources">PersistentVolumeClaimSpecResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#resources PersistentVolumeClaim#resources}

---

###### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.putSpec.parameter.selector"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelector">PersistentVolumeClaimSpecSelector</a>

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#selector PersistentVolumeClaim#selector}

---

###### `storage_class_name`<sup>Optional</sup> <a name="storage_class_name" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.putSpec.parameter.storageClassName"></a>

- *Type:* str

Name of the storage class requested by the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#storage_class_name PersistentVolumeClaim#storage_class_name}

---

###### `volume_name`<sup>Optional</sup> <a name="volume_name" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.putSpec.parameter.volumeName"></a>

- *Type:* str

The binding reference to the PersistentVolume backing this claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#volume_name PersistentVolumeClaim#volume_name}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#create PersistentVolumeClaim#create}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_wait_until_bound` <a name="reset_wait_until_bound" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.resetWaitUntilBound"></a>

```python
def reset_wait_until_bound() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PersistentVolumeClaim resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim

persistentVolumeClaim.PersistentVolumeClaim.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim

persistentVolumeClaim.PersistentVolumeClaim.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim

persistentVolumeClaim.PersistentVolumeClaim.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim

persistentVolumeClaim.PersistentVolumeClaim.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PersistentVolumeClaim resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PersistentVolumeClaim to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PersistentVolumeClaim that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PersistentVolumeClaim to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference">PersistentVolumeClaimMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference">PersistentVolumeClaimSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference">PersistentVolumeClaimTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata">PersistentVolumeClaimMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.specInput">spec_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec">PersistentVolumeClaimSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeouts">PersistentVolumeClaimTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.waitUntilBoundInput">wait_until_bound_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.waitUntilBound">wait_until_bound</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.metadata"></a>

```python
metadata: PersistentVolumeClaimMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference">PersistentVolumeClaimMetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.spec"></a>

```python
spec: PersistentVolumeClaimSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference">PersistentVolumeClaimSpecOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.timeouts"></a>

```python
timeouts: PersistentVolumeClaimTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference">PersistentVolumeClaimTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.metadataInput"></a>

```python
metadata_input: PersistentVolumeClaimMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata">PersistentVolumeClaimMetadata</a>

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.specInput"></a>

```python
spec_input: PersistentVolumeClaimSpec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec">PersistentVolumeClaimSpec</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, PersistentVolumeClaimTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeouts">PersistentVolumeClaimTimeouts</a>]

---

##### `wait_until_bound_input`<sup>Optional</sup> <a name="wait_until_bound_input" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.waitUntilBoundInput"></a>

```python
wait_until_bound_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `wait_until_bound`<sup>Required</sup> <a name="wait_until_bound" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.waitUntilBound"></a>

```python
wait_until_bound: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PersistentVolumeClaimConfig <a name="PersistentVolumeClaimConfig" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim

persistentVolumeClaim.PersistentVolumeClaimConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: PersistentVolumeClaimMetadata,
  spec: PersistentVolumeClaimSpec,
  id: str = None,
  timeouts: PersistentVolumeClaimTimeouts = None,
  wait_until_bound: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata">PersistentVolumeClaimMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec">PersistentVolumeClaimSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#id PersistentVolumeClaim#id}. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeouts">PersistentVolumeClaimTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.waitUntilBound">wait_until_bound</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to wait for the claim to reach `Bound` state (to find volume in which to claim the space). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.metadata"></a>

```python
metadata: PersistentVolumeClaimMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata">PersistentVolumeClaimMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#metadata PersistentVolumeClaim#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.spec"></a>

```python
spec: PersistentVolumeClaimSpec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec">PersistentVolumeClaimSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#spec PersistentVolumeClaim#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#id PersistentVolumeClaim#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.timeouts"></a>

```python
timeouts: PersistentVolumeClaimTimeouts
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeouts">PersistentVolumeClaimTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#timeouts PersistentVolumeClaim#timeouts}

---

##### `wait_until_bound`<sup>Optional</sup> <a name="wait_until_bound" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.waitUntilBound"></a>

```python
wait_until_bound: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to wait for the claim to reach `Bound` state (to find volume in which to claim the space).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#wait_until_bound PersistentVolumeClaim#wait_until_bound}

---

### PersistentVolumeClaimMetadata <a name="PersistentVolumeClaimMetadata" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim

persistentVolumeClaim.PersistentVolumeClaimMetadata(
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
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata.property.generateName">generate_name</a></code> | <code>str</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata.property.name">name</a></code> | <code>str</code> | Name of the persistent volume claim, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata.property.namespace">namespace</a></code> | <code>str</code> | Namespace defines the space within which name of the persistent volume claim must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#annotations PersistentVolumeClaim#annotations}

---

##### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#generate_name PersistentVolumeClaim#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#labels PersistentVolumeClaim#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the persistent volume claim, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#name PersistentVolumeClaim#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace defines the space within which name of the persistent volume claim must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#namespace PersistentVolumeClaim#namespace}

---

### PersistentVolumeClaimSpec <a name="PersistentVolumeClaimSpec" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim

persistentVolumeClaim.PersistentVolumeClaimSpec(
  access_modes: typing.List[str],
  resources: PersistentVolumeClaimSpecResources,
  selector: PersistentVolumeClaimSpecSelector = None,
  storage_class_name: str = None,
  volume_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec.property.accessModes">access_modes</a></code> | <code>typing.List[str]</code> | A set of the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResources">PersistentVolumeClaimSpecResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelector">PersistentVolumeClaimSpecSelector</a></code> | selector block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec.property.storageClassName">storage_class_name</a></code> | <code>str</code> | Name of the storage class requested by the claim. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec.property.volumeName">volume_name</a></code> | <code>str</code> | The binding reference to the PersistentVolume backing this claim. |

---

##### `access_modes`<sup>Required</sup> <a name="access_modes" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec.property.accessModes"></a>

```python
access_modes: typing.List[str]
```

- *Type:* typing.List[str]

A set of the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#access_modes PersistentVolumeClaim#access_modes}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec.property.resources"></a>

```python
resources: PersistentVolumeClaimSpecResources
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResources">PersistentVolumeClaimSpecResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#resources PersistentVolumeClaim#resources}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec.property.selector"></a>

```python
selector: PersistentVolumeClaimSpecSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelector">PersistentVolumeClaimSpecSelector</a>

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#selector PersistentVolumeClaim#selector}

---

##### `storage_class_name`<sup>Optional</sup> <a name="storage_class_name" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec.property.storageClassName"></a>

```python
storage_class_name: str
```

- *Type:* str

Name of the storage class requested by the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#storage_class_name PersistentVolumeClaim#storage_class_name}

---

##### `volume_name`<sup>Optional</sup> <a name="volume_name" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec.property.volumeName"></a>

```python
volume_name: str
```

- *Type:* str

The binding reference to the PersistentVolume backing this claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#volume_name PersistentVolumeClaim#volume_name}

---

### PersistentVolumeClaimSpecResources <a name="PersistentVolumeClaimSpecResources" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResources.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim

persistentVolumeClaim.PersistentVolumeClaimSpecResources(
  limits: typing.Mapping[str] = None,
  requests: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResources.property.limits">limits</a></code> | <code>typing.Mapping[str]</code> | Map describing the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResources.property.requests">requests</a></code> | <code>typing.Mapping[str]</code> | Map describing the minimum amount of compute resources required. |

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResources.property.limits"></a>

```python
limits: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map describing the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#limits PersistentVolumeClaim#limits}

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResources.property.requests"></a>

```python
requests: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map describing the minimum amount of compute resources required.

If this is omitted for a container, it defaults to `limits` if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#requests PersistentVolumeClaim#requests}

---

### PersistentVolumeClaimSpecSelector <a name="PersistentVolumeClaimSpecSelector" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim

persistentVolumeClaim.PersistentVolumeClaimSpecSelector(
  match_expressions: typing.Union[IResolvable, typing.List[PersistentVolumeClaimSpecSelectorMatchExpressions]] = None,
  match_labels: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelector.property.matchExpressions">match_expressions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions">PersistentVolumeClaimSpecSelectorMatchExpressions</a>]]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelector.property.matchLabels">match_labels</a></code> | <code>typing.Mapping[str]</code> | A map of {key,value} pairs. |

---

##### `match_expressions`<sup>Optional</sup> <a name="match_expressions" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelector.property.matchExpressions"></a>

```python
match_expressions: typing.Union[IResolvable, typing.List[PersistentVolumeClaimSpecSelectorMatchExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions">PersistentVolumeClaimSpecSelectorMatchExpressions</a>]]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#match_expressions PersistentVolumeClaim#match_expressions}

---

##### `match_labels`<sup>Optional</sup> <a name="match_labels" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelector.property.matchLabels"></a>

```python
match_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#match_labels PersistentVolumeClaim#match_labels}

---

### PersistentVolumeClaimSpecSelectorMatchExpressions <a name="PersistentVolumeClaimSpecSelectorMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim

persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions(
  key: str = None,
  operator: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions.property.key">key</a></code> | <code>str</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions.property.operator">operator</a></code> | <code>str</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions.property.values">values</a></code> | <code>typing.List[str]</code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions.property.key"></a>

```python
key: str
```

- *Type:* str

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#key PersistentVolumeClaim#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions.property.operator"></a>

```python
operator: str
```

- *Type:* str

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#operator PersistentVolumeClaim#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#values PersistentVolumeClaim#values}

---

### PersistentVolumeClaimTimeouts <a name="PersistentVolumeClaimTimeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim

persistentVolumeClaim.PersistentVolumeClaimTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#create PersistentVolumeClaim#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#create PersistentVolumeClaim#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### PersistentVolumeClaimMetadataOutputReference <a name="PersistentVolumeClaimMetadataOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim

persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.resetGenerateName">reset_generate_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_generate_name` <a name="reset_generate_name" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.resetGenerateName"></a>

```python
def reset_generate_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.generateNameInput">generate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.generateName">generate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata">PersistentVolumeClaimMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name_input`<sup>Optional</sup> <a name="generate_name_input" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.generateNameInput"></a>

```python
generate_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name`<sup>Required</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeClaimMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata">PersistentVolumeClaimMetadata</a>

---


### PersistentVolumeClaimSpecOutputReference <a name="PersistentVolumeClaimSpecOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim

persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.putResources">put_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.putSelector">put_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.resetSelector">reset_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.resetStorageClassName">reset_storage_class_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.resetVolumeName">reset_volume_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_resources` <a name="put_resources" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.putResources"></a>

```python
def put_resources(
  limits: typing.Mapping[str] = None,
  requests: typing.Mapping[str] = None
) -> None
```

###### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.putResources.parameter.limits"></a>

- *Type:* typing.Mapping[str]

Map describing the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#limits PersistentVolumeClaim#limits}

---

###### `requests`<sup>Optional</sup> <a name="requests" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.putResources.parameter.requests"></a>

- *Type:* typing.Mapping[str]

Map describing the minimum amount of compute resources required.

If this is omitted for a container, it defaults to `limits` if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#requests PersistentVolumeClaim#requests}

---

##### `put_selector` <a name="put_selector" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.putSelector"></a>

```python
def put_selector(
  match_expressions: typing.Union[IResolvable, typing.List[PersistentVolumeClaimSpecSelectorMatchExpressions]] = None,
  match_labels: typing.Mapping[str] = None
) -> None
```

###### `match_expressions`<sup>Optional</sup> <a name="match_expressions" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.putSelector.parameter.matchExpressions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions">PersistentVolumeClaimSpecSelectorMatchExpressions</a>]]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#match_expressions PersistentVolumeClaim#match_expressions}

---

###### `match_labels`<sup>Optional</sup> <a name="match_labels" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.putSelector.parameter.matchLabels"></a>

- *Type:* typing.Mapping[str]

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/persistent_volume_claim#match_labels PersistentVolumeClaim#match_labels}

---

##### `reset_selector` <a name="reset_selector" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.resetSelector"></a>

```python
def reset_selector() -> None
```

##### `reset_storage_class_name` <a name="reset_storage_class_name" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.resetStorageClassName"></a>

```python
def reset_storage_class_name() -> None
```

##### `reset_volume_name` <a name="reset_volume_name" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.resetVolumeName"></a>

```python
def reset_volume_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference">PersistentVolumeClaimSpecResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference">PersistentVolumeClaimSpecSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.accessModesInput">access_modes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.resourcesInput">resources_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResources">PersistentVolumeClaimSpecResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.selectorInput">selector_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelector">PersistentVolumeClaimSpecSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.storageClassNameInput">storage_class_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.volumeNameInput">volume_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.accessModes">access_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.storageClassName">storage_class_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.volumeName">volume_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec">PersistentVolumeClaimSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.resources"></a>

```python
resources: PersistentVolumeClaimSpecResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference">PersistentVolumeClaimSpecResourcesOutputReference</a>

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.selector"></a>

```python
selector: PersistentVolumeClaimSpecSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference">PersistentVolumeClaimSpecSelectorOutputReference</a>

---

##### `access_modes_input`<sup>Optional</sup> <a name="access_modes_input" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.accessModesInput"></a>

```python
access_modes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.resourcesInput"></a>

```python
resources_input: PersistentVolumeClaimSpecResources
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResources">PersistentVolumeClaimSpecResources</a>

---

##### `selector_input`<sup>Optional</sup> <a name="selector_input" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.selectorInput"></a>

```python
selector_input: PersistentVolumeClaimSpecSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelector">PersistentVolumeClaimSpecSelector</a>

---

##### `storage_class_name_input`<sup>Optional</sup> <a name="storage_class_name_input" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.storageClassNameInput"></a>

```python
storage_class_name_input: str
```

- *Type:* str

---

##### `volume_name_input`<sup>Optional</sup> <a name="volume_name_input" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.volumeNameInput"></a>

```python
volume_name_input: str
```

- *Type:* str

---

##### `access_modes`<sup>Required</sup> <a name="access_modes" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.accessModes"></a>

```python
access_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_class_name`<sup>Required</sup> <a name="storage_class_name" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.storageClassName"></a>

```python
storage_class_name: str
```

- *Type:* str

---

##### `volume_name`<sup>Required</sup> <a name="volume_name" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.volumeName"></a>

```python
volume_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeClaimSpec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec">PersistentVolumeClaimSpec</a>

---


### PersistentVolumeClaimSpecResourcesOutputReference <a name="PersistentVolumeClaimSpecResourcesOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim

persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.resetLimits">reset_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.resetRequests">reset_requests</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_limits` <a name="reset_limits" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.resetLimits"></a>

```python
def reset_limits() -> None
```

##### `reset_requests` <a name="reset_requests" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.resetRequests"></a>

```python
def reset_requests() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.limitsInput">limits_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.requestsInput">requests_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.limits">limits</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.requests">requests</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResources">PersistentVolumeClaimSpecResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `limits_input`<sup>Optional</sup> <a name="limits_input" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.limitsInput"></a>

```python
limits_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `requests_input`<sup>Optional</sup> <a name="requests_input" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.requestsInput"></a>

```python
requests_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.limits"></a>

```python
limits: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.requests"></a>

```python
requests: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeClaimSpecResources
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResources">PersistentVolumeClaimSpecResources</a>

---


### PersistentVolumeClaimSpecSelectorMatchExpressionsList <a name="PersistentVolumeClaimSpecSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim

persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions">PersistentVolumeClaimSpecSelectorMatchExpressions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PersistentVolumeClaimSpecSelectorMatchExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions">PersistentVolumeClaimSpecSelectorMatchExpressions</a>]]

---


### PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference <a name="PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim

persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions">PersistentVolumeClaimSpecSelectorMatchExpressions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PersistentVolumeClaimSpecSelectorMatchExpressions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions">PersistentVolumeClaimSpecSelectorMatchExpressions</a>]

---


### PersistentVolumeClaimSpecSelectorOutputReference <a name="PersistentVolumeClaimSpecSelectorOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim

persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.putMatchExpressions">put_match_expressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.resetMatchExpressions">reset_match_expressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.resetMatchLabels">reset_match_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match_expressions` <a name="put_match_expressions" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.putMatchExpressions"></a>

```python
def put_match_expressions(
  value: typing.Union[IResolvable, typing.List[PersistentVolumeClaimSpecSelectorMatchExpressions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions">PersistentVolumeClaimSpecSelectorMatchExpressions</a>]]

---

##### `reset_match_expressions` <a name="reset_match_expressions" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.resetMatchExpressions"></a>

```python
def reset_match_expressions() -> None
```

##### `reset_match_labels` <a name="reset_match_labels" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.resetMatchLabels"></a>

```python
def reset_match_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.matchExpressions">match_expressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList">PersistentVolumeClaimSpecSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.matchExpressionsInput">match_expressions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions">PersistentVolumeClaimSpecSelectorMatchExpressions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.matchLabelsInput">match_labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.matchLabels">match_labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelector">PersistentVolumeClaimSpecSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_expressions`<sup>Required</sup> <a name="match_expressions" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.matchExpressions"></a>

```python
match_expressions: PersistentVolumeClaimSpecSelectorMatchExpressionsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList">PersistentVolumeClaimSpecSelectorMatchExpressionsList</a>

---

##### `match_expressions_input`<sup>Optional</sup> <a name="match_expressions_input" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.matchExpressionsInput"></a>

```python
match_expressions_input: typing.Union[IResolvable, typing.List[PersistentVolumeClaimSpecSelectorMatchExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions">PersistentVolumeClaimSpecSelectorMatchExpressions</a>]]

---

##### `match_labels_input`<sup>Optional</sup> <a name="match_labels_input" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.matchLabelsInput"></a>

```python
match_labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `match_labels`<sup>Required</sup> <a name="match_labels" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.matchLabels"></a>

```python
match_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeClaimSpecSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelector">PersistentVolumeClaimSpecSelector</a>

---


### PersistentVolumeClaimTimeoutsOutputReference <a name="PersistentVolumeClaimTimeoutsOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume_claim

persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeouts">PersistentVolumeClaimTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PersistentVolumeClaimTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeouts">PersistentVolumeClaimTimeouts</a>]

---



