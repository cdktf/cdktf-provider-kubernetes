# `kubernetes_persistent_volume`

Refer to the Terraform Registory for docs: [`kubernetes_persistent_volume`](https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume).

# `persistentVolume` Submodule <a name="`persistentVolume` Submodule" id="@cdktf/provider-kubernetes.persistentVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersistentVolume <a name="PersistentVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume"></a>

Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume kubernetes_persistent_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolume(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: PersistentVolumeMetadata,
  spec: typing.Union[IResolvable, typing.List[PersistentVolumeSpec]],
  id: str = None,
  timeouts: PersistentVolumeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.spec">spec</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>]]</code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#id PersistentVolume#id}. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#metadata PersistentVolume#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.spec"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>]]

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#spec PersistentVolume#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#id PersistentVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#timeouts PersistentVolume#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putMetadata"></a>

```python
def put_metadata(
  annotations: typing.Mapping[str] = None,
  labels: typing.Mapping[str] = None,
  name: str = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putMetadata.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the persistent volume that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#annotations PersistentVolume#annotations}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#labels PersistentVolume#labels}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putMetadata.parameter.name"></a>

- *Type:* str

Name of the persistent volume, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#name PersistentVolume#name}

---

##### `put_spec` <a name="put_spec" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putSpec"></a>

```python
def put_spec(
  value: typing.Union[IResolvable, typing.List[PersistentVolumeSpec]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putSpec.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#create PersistentVolume#create}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolume.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolume.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolume.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference">PersistentVolumeMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList">PersistentVolumeSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference">PersistentVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.specInput">spec_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.metadata"></a>

```python
metadata: PersistentVolumeMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference">PersistentVolumeMetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.spec"></a>

```python
spec: PersistentVolumeSpecList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList">PersistentVolumeSpecList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.timeouts"></a>

```python
timeouts: PersistentVolumeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference">PersistentVolumeTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.metadataInput"></a>

```python
metadata_input: PersistentVolumeMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a>

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.specInput"></a>

```python
spec_input: typing.Union[IResolvable, typing.List[PersistentVolumeSpec]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[PersistentVolumeTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PersistentVolumeConfig <a name="PersistentVolumeConfig" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: PersistentVolumeMetadata,
  spec: typing.Union[IResolvable, typing.List[PersistentVolumeSpec]],
  id: str = None,
  timeouts: PersistentVolumeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.spec">spec</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>]]</code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#id PersistentVolume#id}. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.metadata"></a>

```python
metadata: PersistentVolumeMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#metadata PersistentVolume#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.spec"></a>

```python
spec: typing.Union[IResolvable, typing.List[PersistentVolumeSpec]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>]]

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#spec PersistentVolume#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#id PersistentVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.timeouts"></a>

```python
timeouts: PersistentVolumeTimeouts
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#timeouts PersistentVolume#timeouts}

---

### PersistentVolumeMetadata <a name="PersistentVolumeMetadata" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeMetadata(
  annotations: typing.Mapping[str] = None,
  labels: typing.Mapping[str] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | An unstructured key value map stored with the persistent volume that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.property.name">name</a></code> | <code>str</code> | Name of the persistent volume, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the persistent volume that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#annotations PersistentVolume#annotations}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#labels PersistentVolume#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the persistent volume, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#name PersistentVolume#name}

---

### PersistentVolumeSpec <a name="PersistentVolumeSpec" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpec(
  access_modes: typing.List[str],
  capacity: typing.Mapping[str],
  persistent_volume_source: PersistentVolumeSpecPersistentVolumeSource,
  claim_ref: PersistentVolumeSpecClaimRef = None,
  mount_options: typing.List[str] = None,
  node_affinity: PersistentVolumeSpecNodeAffinity = None,
  persistent_volume_reclaim_policy: str = None,
  storage_class_name: str = None,
  volume_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.accessModes">access_modes</a></code> | <code>typing.List[str]</code> | Contains all ways the volume can be mounted. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#access-modes. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.capacity">capacity</a></code> | <code>typing.Mapping[str]</code> | A description of the persistent volume's resources and capacity. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#capacity. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.persistentVolumeSource">persistent_volume_source</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a></code> | persistent_volume_source block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.claimRef">claim_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a></code> | claim_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.mountOptions">mount_options</a></code> | <code>typing.List[str]</code> | A list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.nodeAffinity">node_affinity</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a></code> | node_affinity block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.persistentVolumeReclaimPolicy">persistent_volume_reclaim_policy</a></code> | <code>str</code> | What happens to a persistent volume when released from its claim. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.storageClassName">storage_class_name</a></code> | <code>str</code> | A description of the persistent volume's class. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#class. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.volumeMode">volume_mode</a></code> | <code>str</code> | Defines if a volume is intended to be used with a formatted filesystem. |

---

##### `access_modes`<sup>Required</sup> <a name="access_modes" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.accessModes"></a>

```python
access_modes: typing.List[str]
```

- *Type:* typing.List[str]

Contains all ways the volume can be mounted. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#access-modes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#access_modes PersistentVolume#access_modes}

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.capacity"></a>

```python
capacity: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A description of the persistent volume's resources and capacity. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#capacity.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#capacity PersistentVolume#capacity}

---

##### `persistent_volume_source`<sup>Required</sup> <a name="persistent_volume_source" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.persistentVolumeSource"></a>

```python
persistent_volume_source: PersistentVolumeSpecPersistentVolumeSource
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a>

persistent_volume_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#persistent_volume_source PersistentVolume#persistent_volume_source}

---

##### `claim_ref`<sup>Optional</sup> <a name="claim_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.claimRef"></a>

```python
claim_ref: PersistentVolumeSpecClaimRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a>

claim_ref block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#claim_ref PersistentVolume#claim_ref}

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.mountOptions"></a>

```python
mount_options: typing.List[str]
```

- *Type:* typing.List[str]

A list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#mount_options PersistentVolume#mount_options}

---

##### `node_affinity`<sup>Optional</sup> <a name="node_affinity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.nodeAffinity"></a>

```python
node_affinity: PersistentVolumeSpecNodeAffinity
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a>

node_affinity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#node_affinity PersistentVolume#node_affinity}

---

##### `persistent_volume_reclaim_policy`<sup>Optional</sup> <a name="persistent_volume_reclaim_policy" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.persistentVolumeReclaimPolicy"></a>

```python
persistent_volume_reclaim_policy: str
```

- *Type:* str

What happens to a persistent volume when released from its claim.

Valid options are Retain (default) and Recycle. Recycling must be supported by the volume plugin underlying this persistent volume. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#recycling-policy

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#persistent_volume_reclaim_policy PersistentVolume#persistent_volume_reclaim_policy}

---

##### `storage_class_name`<sup>Optional</sup> <a name="storage_class_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.storageClassName"></a>

```python
storage_class_name: str
```

- *Type:* str

A description of the persistent volume's class. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#class.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#storage_class_name PersistentVolume#storage_class_name}

---

##### `volume_mode`<sup>Optional</sup> <a name="volume_mode" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.volumeMode"></a>

```python
volume_mode: str
```

- *Type:* str

Defines if a volume is intended to be used with a formatted filesystem.

or to remain in raw block state.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#volume_mode PersistentVolume#volume_mode}

---

### PersistentVolumeSpecClaimRef <a name="PersistentVolumeSpecClaimRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecClaimRef(
  name: str,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef.property.name">name</a></code> | <code>str</code> | The name of the PersistentVolumeClaim. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef.property.namespace">namespace</a></code> | <code>str</code> | The namespace of the PersistentVolumeClaim. Uses 'default' namespace if none is specified. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the PersistentVolumeClaim.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#name PersistentVolume#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace of the PersistentVolumeClaim. Uses 'default' namespace if none is specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecNodeAffinity <a name="PersistentVolumeSpecNodeAffinity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecNodeAffinity(
  required: PersistentVolumeSpecNodeAffinityRequired = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity.property.required">required</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a></code> | required block. |

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity.property.required"></a>

```python
required: PersistentVolumeSpecNodeAffinityRequired
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a>

required block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#required PersistentVolume#required}

---

### PersistentVolumeSpecNodeAffinityRequired <a name="PersistentVolumeSpecNodeAffinityRequired" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecNodeAffinityRequired(
  node_selector_term: typing.Union[IResolvable, typing.List[PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired.property.nodeSelectorTerm">node_selector_term</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a>]]</code> | node_selector_term block. |

---

##### `node_selector_term`<sup>Required</sup> <a name="node_selector_term" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired.property.nodeSelectorTerm"></a>

```python
node_selector_term: typing.Union[IResolvable, typing.List[PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a>]]

node_selector_term block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#node_selector_term PersistentVolume#node_selector_term}

---

### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm(
  match_expressions: typing.Union[IResolvable, typing.List[PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions]] = None,
  match_fields: typing.Union[IResolvable, typing.List[PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm.property.matchExpressions">match_expressions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>]]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm.property.matchFields">match_fields</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>]]</code> | match_fields block. |

---

##### `match_expressions`<sup>Optional</sup> <a name="match_expressions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm.property.matchExpressions"></a>

```python
match_expressions: typing.Union[IResolvable, typing.List[PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>]]

match_expressions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#match_expressions PersistentVolume#match_expressions}

---

##### `match_fields`<sup>Optional</sup> <a name="match_fields" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm.property.matchFields"></a>

```python
match_fields: typing.Union[IResolvable, typing.List[PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>]]

match_fields block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#match_fields PersistentVolume#match_fields}

---

### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions(
  key: str,
  operator: str,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.key">key</a></code> | <code>str</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.operator">operator</a></code> | <code>str</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.values">values</a></code> | <code>typing.List[str]</code> | An array of string values. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.key"></a>

```python
key: str
```

- *Type:* str

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#key PersistentVolume#key}

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.operator"></a>

```python
operator: str
```

- *Type:* str

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#operator PersistentVolume#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#values PersistentVolume#values}

---

### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields(
  key: str,
  operator: str,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.key">key</a></code> | <code>str</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.operator">operator</a></code> | <code>str</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.values">values</a></code> | <code>typing.List[str]</code> | An array of string values. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.key"></a>

```python
key: str
```

- *Type:* str

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#key PersistentVolume#key}

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.operator"></a>

```python
operator: str
```

- *Type:* str

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#operator PersistentVolume#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#values PersistentVolume#values}

---

### PersistentVolumeSpecPersistentVolumeSource <a name="PersistentVolumeSpecPersistentVolumeSource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSource(
  aws_elastic_block_store: PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore = None,
  azure_disk: PersistentVolumeSpecPersistentVolumeSourceAzureDisk = None,
  azure_file: PersistentVolumeSpecPersistentVolumeSourceAzureFile = None,
  ceph_fs: PersistentVolumeSpecPersistentVolumeSourceCephFs = None,
  cinder: PersistentVolumeSpecPersistentVolumeSourceCinder = None,
  csi: PersistentVolumeSpecPersistentVolumeSourceCsi = None,
  fc: PersistentVolumeSpecPersistentVolumeSourceFc = None,
  flex_volume: PersistentVolumeSpecPersistentVolumeSourceFlexVolume = None,
  flocker: PersistentVolumeSpecPersistentVolumeSourceFlocker = None,
  gce_persistent_disk: PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk = None,
  glusterfs: PersistentVolumeSpecPersistentVolumeSourceGlusterfs = None,
  host_path: PersistentVolumeSpecPersistentVolumeSourceHostPath = None,
  iscsi: PersistentVolumeSpecPersistentVolumeSourceIscsi = None,
  local: PersistentVolumeSpecPersistentVolumeSourceLocal = None,
  nfs: PersistentVolumeSpecPersistentVolumeSourceNfs = None,
  photon_persistent_disk: PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk = None,
  quobyte: PersistentVolumeSpecPersistentVolumeSourceQuobyte = None,
  rbd: PersistentVolumeSpecPersistentVolumeSourceRbd = None,
  vsphere_volume: PersistentVolumeSpecPersistentVolumeSourceVsphereVolume = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.awsElasticBlockStore">aws_elastic_block_store</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a></code> | aws_elastic_block_store block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.azureDisk">azure_disk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a></code> | azure_disk block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.azureFile">azure_file</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a></code> | azure_file block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.cephFs">ceph_fs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a></code> | ceph_fs block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.cinder">cinder</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a></code> | cinder block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.csi">csi</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a></code> | csi block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.fc">fc</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a></code> | fc block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.flexVolume">flex_volume</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a></code> | flex_volume block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.flocker">flocker</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a></code> | flocker block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.gcePersistentDisk">gce_persistent_disk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a></code> | gce_persistent_disk block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.glusterfs">glusterfs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a></code> | glusterfs block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.hostPath">host_path</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a></code> | host_path block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.iscsi">iscsi</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a></code> | iscsi block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.local">local</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a></code> | local block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a></code> | nfs block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.photonPersistentDisk">photon_persistent_disk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a></code> | photon_persistent_disk block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.quobyte">quobyte</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a></code> | quobyte block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.rbd">rbd</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a></code> | rbd block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.vsphereVolume">vsphere_volume</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a></code> | vsphere_volume block. |

---

##### `aws_elastic_block_store`<sup>Optional</sup> <a name="aws_elastic_block_store" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.awsElasticBlockStore"></a>

```python
aws_elastic_block_store: PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a>

aws_elastic_block_store block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#aws_elastic_block_store PersistentVolume#aws_elastic_block_store}

---

##### `azure_disk`<sup>Optional</sup> <a name="azure_disk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.azureDisk"></a>

```python
azure_disk: PersistentVolumeSpecPersistentVolumeSourceAzureDisk
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a>

azure_disk block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#azure_disk PersistentVolume#azure_disk}

---

##### `azure_file`<sup>Optional</sup> <a name="azure_file" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.azureFile"></a>

```python
azure_file: PersistentVolumeSpecPersistentVolumeSourceAzureFile
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a>

azure_file block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#azure_file PersistentVolume#azure_file}

---

##### `ceph_fs`<sup>Optional</sup> <a name="ceph_fs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.cephFs"></a>

```python
ceph_fs: PersistentVolumeSpecPersistentVolumeSourceCephFs
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a>

ceph_fs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#ceph_fs PersistentVolume#ceph_fs}

---

##### `cinder`<sup>Optional</sup> <a name="cinder" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.cinder"></a>

```python
cinder: PersistentVolumeSpecPersistentVolumeSourceCinder
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a>

cinder block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#cinder PersistentVolume#cinder}

---

##### `csi`<sup>Optional</sup> <a name="csi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.csi"></a>

```python
csi: PersistentVolumeSpecPersistentVolumeSourceCsi
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a>

csi block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#csi PersistentVolume#csi}

---

##### `fc`<sup>Optional</sup> <a name="fc" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.fc"></a>

```python
fc: PersistentVolumeSpecPersistentVolumeSourceFc
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a>

fc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#fc PersistentVolume#fc}

---

##### `flex_volume`<sup>Optional</sup> <a name="flex_volume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.flexVolume"></a>

```python
flex_volume: PersistentVolumeSpecPersistentVolumeSourceFlexVolume
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a>

flex_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#flex_volume PersistentVolume#flex_volume}

---

##### `flocker`<sup>Optional</sup> <a name="flocker" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.flocker"></a>

```python
flocker: PersistentVolumeSpecPersistentVolumeSourceFlocker
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a>

flocker block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#flocker PersistentVolume#flocker}

---

##### `gce_persistent_disk`<sup>Optional</sup> <a name="gce_persistent_disk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.gcePersistentDisk"></a>

```python
gce_persistent_disk: PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a>

gce_persistent_disk block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#gce_persistent_disk PersistentVolume#gce_persistent_disk}

---

##### `glusterfs`<sup>Optional</sup> <a name="glusterfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.glusterfs"></a>

```python
glusterfs: PersistentVolumeSpecPersistentVolumeSourceGlusterfs
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a>

glusterfs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#glusterfs PersistentVolume#glusterfs}

---

##### `host_path`<sup>Optional</sup> <a name="host_path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.hostPath"></a>

```python
host_path: PersistentVolumeSpecPersistentVolumeSourceHostPath
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a>

host_path block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#host_path PersistentVolume#host_path}

---

##### `iscsi`<sup>Optional</sup> <a name="iscsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.iscsi"></a>

```python
iscsi: PersistentVolumeSpecPersistentVolumeSourceIscsi
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a>

iscsi block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#iscsi PersistentVolume#iscsi}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.local"></a>

```python
local: PersistentVolumeSpecPersistentVolumeSourceLocal
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a>

local block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#local PersistentVolume#local}

---

##### `nfs`<sup>Optional</sup> <a name="nfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.nfs"></a>

```python
nfs: PersistentVolumeSpecPersistentVolumeSourceNfs
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a>

nfs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#nfs PersistentVolume#nfs}

---

##### `photon_persistent_disk`<sup>Optional</sup> <a name="photon_persistent_disk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.photonPersistentDisk"></a>

```python
photon_persistent_disk: PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a>

photon_persistent_disk block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#photon_persistent_disk PersistentVolume#photon_persistent_disk}

---

##### `quobyte`<sup>Optional</sup> <a name="quobyte" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.quobyte"></a>

```python
quobyte: PersistentVolumeSpecPersistentVolumeSourceQuobyte
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a>

quobyte block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#quobyte PersistentVolume#quobyte}

---

##### `rbd`<sup>Optional</sup> <a name="rbd" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.rbd"></a>

```python
rbd: PersistentVolumeSpecPersistentVolumeSourceRbd
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a>

rbd block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#rbd PersistentVolume#rbd}

---

##### `vsphere_volume`<sup>Optional</sup> <a name="vsphere_volume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.vsphereVolume"></a>

```python
vsphere_volume: PersistentVolumeSpecPersistentVolumeSourceVsphereVolume
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a>

vsphere_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#vsphere_volume PersistentVolume#vsphere_volume}

---

### PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore <a name="PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore(
  volume_id: str,
  fs_type: str = None,
  partition: typing.Union[int, float] = None,
  read_only: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.volumeId">volume_id</a></code> | <code>str</code> | Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.fsType">fs_type</a></code> | <code>str</code> | Filesystem type of the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.partition">partition</a></code> | <code>typing.Union[int, float]</code> | The partition in the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore. |

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#volume_id PersistentVolume#volume_id}

---

##### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.partition"></a>

```python
partition: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The partition in the volume that you want to mount.

If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#partition PersistentVolume#partition}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceAzureDisk <a name="PersistentVolumeSpecPersistentVolumeSourceAzureDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk(
  caching_mode: str,
  data_disk_uri: str,
  disk_name: str,
  fs_type: str = None,
  kind: str = None,
  read_only: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.cachingMode">caching_mode</a></code> | <code>str</code> | Host Caching mode: None, Read Only, Read Write. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.dataDiskUri">data_disk_uri</a></code> | <code>str</code> | The URI the data disk in the blob storage. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.diskName">disk_name</a></code> | <code>str</code> | The Name of the data disk in the blob storage. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.fsType">fs_type</a></code> | <code>str</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.kind">kind</a></code> | <code>str</code> | The type for the data disk. Expected values: Shared, Dedicated, Managed. Defaults to Shared. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). |

---

##### `caching_mode`<sup>Required</sup> <a name="caching_mode" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.cachingMode"></a>

```python
caching_mode: str
```

- *Type:* str

Host Caching mode: None, Read Only, Read Write.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#caching_mode PersistentVolume#caching_mode}

---

##### `data_disk_uri`<sup>Required</sup> <a name="data_disk_uri" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.dataDiskUri"></a>

```python
data_disk_uri: str
```

- *Type:* str

The URI the data disk in the blob storage.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#data_disk_uri PersistentVolume#data_disk_uri}

---

##### `disk_name`<sup>Required</sup> <a name="disk_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.diskName"></a>

```python
disk_name: str
```

- *Type:* str

The Name of the data disk in the blob storage.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#disk_name PersistentVolume#disk_name}

---

##### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.kind"></a>

```python
kind: str
```

- *Type:* str

The type for the data disk. Expected values: Shared, Dedicated, Managed. Defaults to Shared.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#kind PersistentVolume#kind}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceAzureFile <a name="PersistentVolumeSpecPersistentVolumeSourceAzureFile" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile(
  secret_name: str,
  share_name: str,
  read_only: typing.Union[bool, IResolvable] = None,
  secret_namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.secretName">secret_name</a></code> | <code>str</code> | The name of secret that contains Azure Storage Account Name and Key. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.shareName">share_name</a></code> | <code>str</code> | Share Name. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.secretNamespace">secret_namespace</a></code> | <code>str</code> | The namespace of the secret that contains Azure Storage Account Name and Key. |

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

The name of secret that contains Azure Storage Account Name and Key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#secret_name PersistentVolume#secret_name}

---

##### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

Share Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#share_name PersistentVolume#share_name}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

##### `secret_namespace`<sup>Optional</sup> <a name="secret_namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.secretNamespace"></a>

```python
secret_namespace: str
```

- *Type:* str

The namespace of the secret that contains Azure Storage Account Name and Key.

For Kubernetes up to 1.18.x the default is the same as the Pod. For Kubernetes 1.19.x and later the default is "default" namespace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#secret_namespace PersistentVolume#secret_namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceCephFs <a name="PersistentVolumeSpecPersistentVolumeSourceCephFs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs(
  monitors: typing.List[str],
  path: str = None,
  read_only: typing.Union[bool, IResolvable] = None,
  secret_file: str = None,
  secret_ref: PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef = None,
  user: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.monitors">monitors</a></code> | <code>typing.List[str]</code> | Monitors is a collection of Ceph monitors More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.path">path</a></code> | <code>str</code> | Used as the mounted root, rather than the full Ceph tree, default is /. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to force the read-only setting in VolumeMounts. Defaults to `false` (read/write). More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.secretFile">secret_file</a></code> | <code>str</code> | The path to key ring for User, default is /etc/ceph/user.secret More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.secretRef">secret_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a></code> | secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.user">user</a></code> | <code>str</code> | User is the rados user name, default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it. |

---

##### `monitors`<sup>Required</sup> <a name="monitors" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.monitors"></a>

```python
monitors: typing.List[str]
```

- *Type:* typing.List[str]

Monitors is a collection of Ceph monitors More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#monitors PersistentVolume#monitors}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.path"></a>

```python
path: str
```

- *Type:* str

Used as the mounted root, rather than the full Ceph tree, default is /.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#path PersistentVolume#path}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to force the read-only setting in VolumeMounts. Defaults to `false` (read/write). More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

##### `secret_file`<sup>Optional</sup> <a name="secret_file" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.secretFile"></a>

```python
secret_file: str
```

- *Type:* str

The path to key ring for User, default is /etc/ceph/user.secret More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#secret_file PersistentVolume#secret_file}

---

##### `secret_ref`<sup>Optional</sup> <a name="secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.secretRef"></a>

```python
secret_ref: PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#secret_ref PersistentVolume#secret_ref}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.user"></a>

```python
user: str
```

- *Type:* str

User is the rados user name, default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#user PersistentVolume#user}

---

### PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef(
  name: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef.property.name">name</a></code> | <code>str</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef.property.namespace">namespace</a></code> | <code>str</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#name PersistentVolume#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceCinder <a name="PersistentVolumeSpecPersistentVolumeSourceCinder" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder(
  volume_id: str,
  fs_type: str = None,
  read_only: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.property.volumeId">volume_id</a></code> | <code>str</code> | Volume ID used to identify the volume in Cinder. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.property.fsType">fs_type</a></code> | <code>str</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md. |

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

Volume ID used to identify the volume in Cinder. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#volume_id PersistentVolume#volume_id}

---

##### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceCsi <a name="PersistentVolumeSpecPersistentVolumeSourceCsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi(
  driver: str,
  volume_handle: str,
  controller_expand_secret_ref: PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef = None,
  controller_publish_secret_ref: PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef = None,
  fs_type: str = None,
  node_publish_secret_ref: PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef = None,
  node_stage_secret_ref: PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef = None,
  read_only: typing.Union[bool, IResolvable] = None,
  volume_attributes: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.driver">driver</a></code> | <code>str</code> | the name of the volume driver to use. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.volumeHandle">volume_handle</a></code> | <code>str</code> | A string value that uniquely identifies the volume. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.controllerExpandSecretRef">controller_expand_secret_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a></code> | controller_expand_secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.controllerPublishSecretRef">controller_publish_secret_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a></code> | controller_publish_secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.fsType">fs_type</a></code> | <code>str</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.nodePublishSecretRef">node_publish_secret_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a></code> | node_publish_secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.nodeStageSecretRef">node_stage_secret_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a></code> | node_stage_secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#csi. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.volumeAttributes">volume_attributes</a></code> | <code>typing.Mapping[str]</code> | Attributes of the volume to publish. |

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.driver"></a>

```python
driver: str
```

- *Type:* str

the name of the volume driver to use. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#driver PersistentVolume#driver}

---

##### `volume_handle`<sup>Required</sup> <a name="volume_handle" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.volumeHandle"></a>

```python
volume_handle: str
```

- *Type:* str

A string value that uniquely identifies the volume. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#volume_handle PersistentVolume#volume_handle}

---

##### `controller_expand_secret_ref`<sup>Optional</sup> <a name="controller_expand_secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.controllerExpandSecretRef"></a>

```python
controller_expand_secret_ref: PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a>

controller_expand_secret_ref block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#controller_expand_secret_ref PersistentVolume#controller_expand_secret_ref}

---

##### `controller_publish_secret_ref`<sup>Optional</sup> <a name="controller_publish_secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.controllerPublishSecretRef"></a>

```python
controller_publish_secret_ref: PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a>

controller_publish_secret_ref block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#controller_publish_secret_ref PersistentVolume#controller_publish_secret_ref}

---

##### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `node_publish_secret_ref`<sup>Optional</sup> <a name="node_publish_secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.nodePublishSecretRef"></a>

```python
node_publish_secret_ref: PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a>

node_publish_secret_ref block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#node_publish_secret_ref PersistentVolume#node_publish_secret_ref}

---

##### `node_stage_secret_ref`<sup>Optional</sup> <a name="node_stage_secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.nodeStageSecretRef"></a>

```python
node_stage_secret_ref: PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a>

node_stage_secret_ref block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#node_stage_secret_ref PersistentVolume#node_stage_secret_ref}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#csi.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

##### `volume_attributes`<sup>Optional</sup> <a name="volume_attributes" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.volumeAttributes"></a>

```python
volume_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Attributes of the volume to publish.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#volume_attributes PersistentVolume#volume_attributes}

---

### PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef(
  name: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef.property.name">name</a></code> | <code>str</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef.property.namespace">namespace</a></code> | <code>str</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#name PersistentVolume#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef(
  name: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef.property.name">name</a></code> | <code>str</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef.property.namespace">namespace</a></code> | <code>str</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#name PersistentVolume#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef(
  name: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef.property.name">name</a></code> | <code>str</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef.property.namespace">namespace</a></code> | <code>str</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#name PersistentVolume#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef(
  name: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef.property.name">name</a></code> | <code>str</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef.property.namespace">namespace</a></code> | <code>str</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#name PersistentVolume#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceFc <a name="PersistentVolumeSpecPersistentVolumeSourceFc" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc(
  lun: typing.Union[int, float],
  target_ww_ns: typing.List[str],
  fs_type: str = None,
  read_only: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.lun">lun</a></code> | <code>typing.Union[int, float]</code> | FC target lun number. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.targetWwNs">target_ww_ns</a></code> | <code>typing.List[str]</code> | FC target worldwide names (WWNs). |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.fsType">fs_type</a></code> | <code>str</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). |

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.lun"></a>

```python
lun: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

FC target lun number.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#lun PersistentVolume#lun}

---

##### `target_ww_ns`<sup>Required</sup> <a name="target_ww_ns" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.targetWwNs"></a>

```python
target_ww_ns: typing.List[str]
```

- *Type:* typing.List[str]

FC target worldwide names (WWNs).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#target_ww_ns PersistentVolume#target_ww_ns}

---

##### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceFlexVolume <a name="PersistentVolumeSpecPersistentVolumeSourceFlexVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume(
  driver: str,
  fs_type: str = None,
  options: typing.Mapping[str] = None,
  read_only: typing.Union[bool, IResolvable] = None,
  secret_ref: PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.driver">driver</a></code> | <code>str</code> | Driver is the name of the driver to use for this volume. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.fsType">fs_type</a></code> | <code>str</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.options">options</a></code> | <code>typing.Mapping[str]</code> | Extra command options if any. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to force the ReadOnly setting in VolumeMounts. Defaults to false (read/write). |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.secretRef">secret_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a></code> | secret_ref block. |

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.driver"></a>

```python
driver: str
```

- *Type:* str

Driver is the name of the driver to use for this volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#driver PersistentVolume#driver}

---

##### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Extra command options if any.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#options PersistentVolume#options}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to force the ReadOnly setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

##### `secret_ref`<sup>Optional</sup> <a name="secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.secretRef"></a>

```python
secret_ref: PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#secret_ref PersistentVolume#secret_ref}

---

### PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef(
  name: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef.property.name">name</a></code> | <code>str</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef.property.namespace">namespace</a></code> | <code>str</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#name PersistentVolume#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceFlocker <a name="PersistentVolumeSpecPersistentVolumeSourceFlocker" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker(
  dataset_name: str = None,
  dataset_uuid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker.property.datasetName">dataset_name</a></code> | <code>str</code> | Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker.property.datasetUuid">dataset_uuid</a></code> | <code>str</code> | UUID of the dataset. This is unique identifier of a Flocker dataset. |

---

##### `dataset_name`<sup>Optional</sup> <a name="dataset_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker.property.datasetName"></a>

```python
dataset_name: str
```

- *Type:* str

Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#dataset_name PersistentVolume#dataset_name}

---

##### `dataset_uuid`<sup>Optional</sup> <a name="dataset_uuid" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker.property.datasetUuid"></a>

```python
dataset_uuid: str
```

- *Type:* str

UUID of the dataset. This is unique identifier of a Flocker dataset.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#dataset_uuid PersistentVolume#dataset_uuid}

---

### PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk <a name="PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk(
  pd_name: str,
  fs_type: str = None,
  partition: typing.Union[int, float] = None,
  read_only: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.pdName">pd_name</a></code> | <code>str</code> | Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.fsType">fs_type</a></code> | <code>str</code> | Filesystem type of the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.partition">partition</a></code> | <code>typing.Union[int, float]</code> | The partition in the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to force the ReadOnly setting in VolumeMounts. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk. |

---

##### `pd_name`<sup>Required</sup> <a name="pd_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.pdName"></a>

```python
pd_name: str
```

- *Type:* str

Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#pd_name PersistentVolume#pd_name}

---

##### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.partition"></a>

```python
partition: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The partition in the volume that you want to mount.

If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#partition PersistentVolume#partition}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to force the ReadOnly setting in VolumeMounts. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceGlusterfs <a name="PersistentVolumeSpecPersistentVolumeSourceGlusterfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs(
  endpoints_name: str,
  path: str,
  read_only: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.property.endpointsName">endpoints_name</a></code> | <code>str</code> | The endpoint name that details Glusterfs topology. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.property.path">path</a></code> | <code>str</code> | The Glusterfs volume path. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod. |

---

##### `endpoints_name`<sup>Required</sup> <a name="endpoints_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.property.endpointsName"></a>

```python
endpoints_name: str
```

- *Type:* str

The endpoint name that details Glusterfs topology. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#endpoints_name PersistentVolume#endpoints_name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.property.path"></a>

```python
path: str
```

- *Type:* str

The Glusterfs volume path. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#path PersistentVolume#path}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceHostPath <a name="PersistentVolumeSpecPersistentVolumeSourceHostPath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath(
  path: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath.property.path">path</a></code> | <code>str</code> | Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#hostpath. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath.property.type">type</a></code> | <code>str</code> | Type for HostPath volume. Allowed values are "" (default), DirectoryOrCreate, Directory, FileOrCreate, File, Socket, CharDevice and BlockDevice. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath.property.path"></a>

```python
path: str
```

- *Type:* str

Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#hostpath.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#path PersistentVolume#path}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath.property.type"></a>

```python
type: str
```

- *Type:* str

Type for HostPath volume. Allowed values are "" (default), DirectoryOrCreate, Directory, FileOrCreate, File, Socket, CharDevice and BlockDevice.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#type PersistentVolume#type}

---

### PersistentVolumeSpecPersistentVolumeSourceIscsi <a name="PersistentVolumeSpecPersistentVolumeSourceIscsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi(
  iqn: str,
  target_portal: str,
  fs_type: str = None,
  iscsi_interface: str = None,
  lun: typing.Union[int, float] = None,
  read_only: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.iqn">iqn</a></code> | <code>str</code> | Target iSCSI Qualified Name. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.targetPortal">target_portal</a></code> | <code>str</code> | iSCSI target portal. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.fsType">fs_type</a></code> | <code>str</code> | Filesystem type of the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.iscsiInterface">iscsi_interface</a></code> | <code>str</code> | iSCSI interface name that uses an iSCSI transport. Defaults to 'default' (tcp). |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.lun">lun</a></code> | <code>typing.Union[int, float]</code> | iSCSI target lun number. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false. |

---

##### `iqn`<sup>Required</sup> <a name="iqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.iqn"></a>

```python
iqn: str
```

- *Type:* str

Target iSCSI Qualified Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#iqn PersistentVolume#iqn}

---

##### `target_portal`<sup>Required</sup> <a name="target_portal" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.targetPortal"></a>

```python
target_portal: str
```

- *Type:* str

iSCSI target portal.

The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#target_portal PersistentVolume#target_portal}

---

##### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#iscsi

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `iscsi_interface`<sup>Optional</sup> <a name="iscsi_interface" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.iscsiInterface"></a>

```python
iscsi_interface: str
```

- *Type:* str

iSCSI interface name that uses an iSCSI transport. Defaults to 'default' (tcp).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#iscsi_interface PersistentVolume#iscsi_interface}

---

##### `lun`<sup>Optional</sup> <a name="lun" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.lun"></a>

```python
lun: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

iSCSI target lun number.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#lun PersistentVolume#lun}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to force the read-only setting in VolumeMounts. Defaults to false.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceLocal <a name="PersistentVolumeSpecPersistentVolumeSourceLocal" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal(
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal.property.path">path</a></code> | <code>str</code> | Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#local. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal.property.path"></a>

```python
path: str
```

- *Type:* str

Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#local.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#path PersistentVolume#path}

---

### PersistentVolumeSpecPersistentVolumeSourceNfs <a name="PersistentVolumeSpecPersistentVolumeSourceNfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs(
  path: str,
  server: str,
  read_only: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.property.path">path</a></code> | <code>str</code> | Path that is exported by the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.property.server">server</a></code> | <code>str</code> | Server is the hostname or IP address of the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to force the NFS export to be mounted with read-only permissions. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#nfs. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.property.path"></a>

```python
path: str
```

- *Type:* str

Path that is exported by the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#path PersistentVolume#path}

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.property.server"></a>

```python
server: str
```

- *Type:* str

Server is the hostname or IP address of the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#server PersistentVolume#server}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to force the NFS export to be mounted with read-only permissions. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#nfs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk <a name="PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk(
  pd_id: str,
  fs_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk.property.pdId">pd_id</a></code> | <code>str</code> | ID that identifies Photon Controller persistent disk. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk.property.fsType">fs_type</a></code> | <code>str</code> | Filesystem type to mount. |

---

##### `pd_id`<sup>Required</sup> <a name="pd_id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk.property.pdId"></a>

```python
pd_id: str
```

- *Type:* str

ID that identifies Photon Controller persistent disk.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#pd_id PersistentVolume#pd_id}

---

##### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#fs_type PersistentVolume#fs_type}

---

### PersistentVolumeSpecPersistentVolumeSourceQuobyte <a name="PersistentVolumeSpecPersistentVolumeSourceQuobyte" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte(
  registry: str,
  volume: str,
  group: str = None,
  read_only: typing.Union[bool, IResolvable] = None,
  user: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.registry">registry</a></code> | <code>str</code> | Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.volume">volume</a></code> | <code>str</code> | Volume is a string that references an already created Quobyte volume by name. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.group">group</a></code> | <code>str</code> | Group to map volume access to Default is no group. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to force the Quobyte volume to be mounted with read-only permissions. Defaults to false. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.user">user</a></code> | <code>str</code> | User to map volume access to Defaults to serivceaccount user. |

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.registry"></a>

```python
registry: str
```

- *Type:* str

Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#registry PersistentVolume#registry}

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.volume"></a>

```python
volume: str
```

- *Type:* str

Volume is a string that references an already created Quobyte volume by name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#volume PersistentVolume#volume}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.group"></a>

```python
group: str
```

- *Type:* str

Group to map volume access to Default is no group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#group PersistentVolume#group}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to force the Quobyte volume to be mounted with read-only permissions. Defaults to false.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.user"></a>

```python
user: str
```

- *Type:* str

User to map volume access to Defaults to serivceaccount user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#user PersistentVolume#user}

---

### PersistentVolumeSpecPersistentVolumeSourceRbd <a name="PersistentVolumeSpecPersistentVolumeSourceRbd" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd(
  ceph_monitors: typing.List[str],
  rbd_image: str,
  fs_type: str = None,
  keyring: str = None,
  rados_user: str = None,
  rbd_pool: str = None,
  read_only: typing.Union[bool, IResolvable] = None,
  secret_ref: PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.cephMonitors">ceph_monitors</a></code> | <code>typing.List[str]</code> | A collection of Ceph monitors. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.rbdImage">rbd_image</a></code> | <code>str</code> | The rados image name. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.fsType">fs_type</a></code> | <code>str</code> | Filesystem type of the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.keyring">keyring</a></code> | <code>str</code> | Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.radosUser">rados_user</a></code> | <code>str</code> | The rados user name. Default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.rbdPool">rbd_pool</a></code> | <code>str</code> | The rados pool name. Default is rbd. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.secretRef">secret_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a></code> | secret_ref block. |

---

##### `ceph_monitors`<sup>Required</sup> <a name="ceph_monitors" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.cephMonitors"></a>

```python
ceph_monitors: typing.List[str]
```

- *Type:* typing.List[str]

A collection of Ceph monitors. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#ceph_monitors PersistentVolume#ceph_monitors}

---

##### `rbd_image`<sup>Required</sup> <a name="rbd_image" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.rbdImage"></a>

```python
rbd_image: str
```

- *Type:* str

The rados image name. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#rbd_image PersistentVolume#rbd_image}

---

##### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#rbd

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `keyring`<sup>Optional</sup> <a name="keyring" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.keyring"></a>

```python
keyring: str
```

- *Type:* str

Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#keyring PersistentVolume#keyring}

---

##### `rados_user`<sup>Optional</sup> <a name="rados_user" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.radosUser"></a>

```python
rados_user: str
```

- *Type:* str

The rados user name. Default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#rados_user PersistentVolume#rados_user}

---

##### `rbd_pool`<sup>Optional</sup> <a name="rbd_pool" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.rbdPool"></a>

```python
rbd_pool: str
```

- *Type:* str

The rados pool name. Default is rbd. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#rbd_pool PersistentVolume#rbd_pool}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to force the read-only setting in VolumeMounts. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

##### `secret_ref`<sup>Optional</sup> <a name="secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.secretRef"></a>

```python
secret_ref: PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#secret_ref PersistentVolume#secret_ref}

---

### PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef(
  name: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef.property.name">name</a></code> | <code>str</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef.property.namespace">namespace</a></code> | <code>str</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#name PersistentVolume#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceVsphereVolume <a name="PersistentVolumeSpecPersistentVolumeSourceVsphereVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume(
  volume_path: str,
  fs_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume.property.volumePath">volume_path</a></code> | <code>str</code> | Path that identifies vSphere volume vmdk. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume.property.fsType">fs_type</a></code> | <code>str</code> | Filesystem type to mount. |

---

##### `volume_path`<sup>Required</sup> <a name="volume_path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume.property.volumePath"></a>

```python
volume_path: str
```

- *Type:* str

Path that identifies vSphere volume vmdk.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#volume_path PersistentVolume#volume_path}

---

##### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#fs_type PersistentVolume#fs_type}

---

### PersistentVolumeTimeouts <a name="PersistentVolumeTimeouts" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#create PersistentVolume#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#create PersistentVolume#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### PersistentVolumeMetadataOutputReference <a name="PersistentVolumeMetadataOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a>

---


### PersistentVolumeSpecClaimRefOutputReference <a name="PersistentVolumeSpecClaimRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecClaimRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecClaimRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a>

---


### PersistentVolumeSpecList <a name="PersistentVolumeSpecList" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PersistentVolumeSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PersistentVolumeSpec]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>]]

---


### PersistentVolumeSpecNodeAffinityOutputReference <a name="PersistentVolumeSpecNodeAffinityOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.putRequired">put_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.resetRequired">reset_required</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_required` <a name="put_required" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.putRequired"></a>

```python
def put_required(
  node_selector_term: typing.Union[IResolvable, typing.List[PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm]]
) -> None
```

###### `node_selector_term`<sup>Required</sup> <a name="node_selector_term" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.putRequired.parameter.nodeSelectorTerm"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a>]]

node_selector_term block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#node_selector_term PersistentVolume#node_selector_term}

---

##### `reset_required` <a name="reset_required" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.required">required</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference">PersistentVolumeSpecNodeAffinityRequiredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.requiredInput">required_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.required"></a>

```python
required: PersistentVolumeSpecNodeAffinityRequiredOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference">PersistentVolumeSpecNodeAffinityRequiredOutputReference</a>

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.requiredInput"></a>

```python
required_input: PersistentVolumeSpecNodeAffinityRequired
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecNodeAffinity
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a>

---


### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a>]]

---


### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>]]

---


### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_values` <a name="reset_values" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>, cdktf.IResolvable]

---


### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>]]

---


### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_values` <a name="reset_values" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>, cdktf.IResolvable]

---


### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchExpressions">put_match_expressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchFields">put_match_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resetMatchExpressions">reset_match_expressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resetMatchFields">reset_match_fields</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match_expressions` <a name="put_match_expressions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchExpressions"></a>

```python
def put_match_expressions(
  value: typing.Union[IResolvable, typing.List[PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>]]

---

##### `put_match_fields` <a name="put_match_fields" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchFields"></a>

```python
def put_match_fields(
  value: typing.Union[IResolvable, typing.List[PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchFields.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>]]

---

##### `reset_match_expressions` <a name="reset_match_expressions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resetMatchExpressions"></a>

```python
def reset_match_expressions() -> None
```

##### `reset_match_fields` <a name="reset_match_fields" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resetMatchFields"></a>

```python
def reset_match_fields() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchExpressions">match_expressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchFields">match_fields</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchExpressionsInput">match_expressions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchFieldsInput">match_fields_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_expressions`<sup>Required</sup> <a name="match_expressions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchExpressions"></a>

```python
match_expressions: PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList</a>

---

##### `match_fields`<sup>Required</sup> <a name="match_fields" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchFields"></a>

```python
match_fields: PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList</a>

---

##### `match_expressions_input`<sup>Optional</sup> <a name="match_expressions_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchExpressionsInput"></a>

```python
match_expressions_input: typing.Union[IResolvable, typing.List[PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>]]

---

##### `match_fields_input`<sup>Optional</sup> <a name="match_fields_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchFieldsInput"></a>

```python
match_fields_input: typing.Union[IResolvable, typing.List[PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a>, cdktf.IResolvable]

---


### PersistentVolumeSpecNodeAffinityRequiredOutputReference <a name="PersistentVolumeSpecNodeAffinityRequiredOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.putNodeSelectorTerm">put_node_selector_term</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_node_selector_term` <a name="put_node_selector_term" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.putNodeSelectorTerm"></a>

```python
def put_node_selector_term(
  value: typing.Union[IResolvable, typing.List[PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.putNodeSelectorTerm.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.nodeSelectorTerm">node_selector_term</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.nodeSelectorTermInput">node_selector_term_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_selector_term`<sup>Required</sup> <a name="node_selector_term" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.nodeSelectorTerm"></a>

```python
node_selector_term: PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList</a>

---

##### `node_selector_term_input`<sup>Optional</sup> <a name="node_selector_term_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.nodeSelectorTermInput"></a>

```python
node_selector_term_input: typing.Union[IResolvable, typing.List[PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecNodeAffinityRequired
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a>

---


### PersistentVolumeSpecOutputReference <a name="PersistentVolumeSpecOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putClaimRef">put_claim_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putNodeAffinity">put_node_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource">put_persistent_volume_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetClaimRef">reset_claim_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetMountOptions">reset_mount_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetNodeAffinity">reset_node_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetPersistentVolumeReclaimPolicy">reset_persistent_volume_reclaim_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetStorageClassName">reset_storage_class_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetVolumeMode">reset_volume_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_claim_ref` <a name="put_claim_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putClaimRef"></a>

```python
def put_claim_ref(
  name: str,
  namespace: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putClaimRef.parameter.name"></a>

- *Type:* str

The name of the PersistentVolumeClaim.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#name PersistentVolume#name}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putClaimRef.parameter.namespace"></a>

- *Type:* str

The namespace of the PersistentVolumeClaim. Uses 'default' namespace if none is specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#namespace PersistentVolume#namespace}

---

##### `put_node_affinity` <a name="put_node_affinity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putNodeAffinity"></a>

```python
def put_node_affinity(
  required: PersistentVolumeSpecNodeAffinityRequired = None
) -> None
```

###### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putNodeAffinity.parameter.required"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a>

required block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#required PersistentVolume#required}

---

##### `put_persistent_volume_source` <a name="put_persistent_volume_source" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource"></a>

```python
def put_persistent_volume_source(
  aws_elastic_block_store: PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore = None,
  azure_disk: PersistentVolumeSpecPersistentVolumeSourceAzureDisk = None,
  azure_file: PersistentVolumeSpecPersistentVolumeSourceAzureFile = None,
  ceph_fs: PersistentVolumeSpecPersistentVolumeSourceCephFs = None,
  cinder: PersistentVolumeSpecPersistentVolumeSourceCinder = None,
  csi: PersistentVolumeSpecPersistentVolumeSourceCsi = None,
  fc: PersistentVolumeSpecPersistentVolumeSourceFc = None,
  flex_volume: PersistentVolumeSpecPersistentVolumeSourceFlexVolume = None,
  flocker: PersistentVolumeSpecPersistentVolumeSourceFlocker = None,
  gce_persistent_disk: PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk = None,
  glusterfs: PersistentVolumeSpecPersistentVolumeSourceGlusterfs = None,
  host_path: PersistentVolumeSpecPersistentVolumeSourceHostPath = None,
  iscsi: PersistentVolumeSpecPersistentVolumeSourceIscsi = None,
  local: PersistentVolumeSpecPersistentVolumeSourceLocal = None,
  nfs: PersistentVolumeSpecPersistentVolumeSourceNfs = None,
  photon_persistent_disk: PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk = None,
  quobyte: PersistentVolumeSpecPersistentVolumeSourceQuobyte = None,
  rbd: PersistentVolumeSpecPersistentVolumeSourceRbd = None,
  vsphere_volume: PersistentVolumeSpecPersistentVolumeSourceVsphereVolume = None
) -> None
```

###### `aws_elastic_block_store`<sup>Optional</sup> <a name="aws_elastic_block_store" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource.parameter.awsElasticBlockStore"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a>

aws_elastic_block_store block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#aws_elastic_block_store PersistentVolume#aws_elastic_block_store}

---

###### `azure_disk`<sup>Optional</sup> <a name="azure_disk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource.parameter.azureDisk"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a>

azure_disk block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#azure_disk PersistentVolume#azure_disk}

---

###### `azure_file`<sup>Optional</sup> <a name="azure_file" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource.parameter.azureFile"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a>

azure_file block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#azure_file PersistentVolume#azure_file}

---

###### `ceph_fs`<sup>Optional</sup> <a name="ceph_fs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource.parameter.cephFs"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a>

ceph_fs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#ceph_fs PersistentVolume#ceph_fs}

---

###### `cinder`<sup>Optional</sup> <a name="cinder" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource.parameter.cinder"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a>

cinder block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#cinder PersistentVolume#cinder}

---

###### `csi`<sup>Optional</sup> <a name="csi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource.parameter.csi"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a>

csi block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#csi PersistentVolume#csi}

---

###### `fc`<sup>Optional</sup> <a name="fc" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource.parameter.fc"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a>

fc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#fc PersistentVolume#fc}

---

###### `flex_volume`<sup>Optional</sup> <a name="flex_volume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource.parameter.flexVolume"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a>

flex_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#flex_volume PersistentVolume#flex_volume}

---

###### `flocker`<sup>Optional</sup> <a name="flocker" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource.parameter.flocker"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a>

flocker block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#flocker PersistentVolume#flocker}

---

###### `gce_persistent_disk`<sup>Optional</sup> <a name="gce_persistent_disk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource.parameter.gcePersistentDisk"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a>

gce_persistent_disk block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#gce_persistent_disk PersistentVolume#gce_persistent_disk}

---

###### `glusterfs`<sup>Optional</sup> <a name="glusterfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource.parameter.glusterfs"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a>

glusterfs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#glusterfs PersistentVolume#glusterfs}

---

###### `host_path`<sup>Optional</sup> <a name="host_path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource.parameter.hostPath"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a>

host_path block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#host_path PersistentVolume#host_path}

---

###### `iscsi`<sup>Optional</sup> <a name="iscsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource.parameter.iscsi"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a>

iscsi block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#iscsi PersistentVolume#iscsi}

---

###### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource.parameter.local"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a>

local block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#local PersistentVolume#local}

---

###### `nfs`<sup>Optional</sup> <a name="nfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource.parameter.nfs"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a>

nfs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#nfs PersistentVolume#nfs}

---

###### `photon_persistent_disk`<sup>Optional</sup> <a name="photon_persistent_disk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource.parameter.photonPersistentDisk"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a>

photon_persistent_disk block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#photon_persistent_disk PersistentVolume#photon_persistent_disk}

---

###### `quobyte`<sup>Optional</sup> <a name="quobyte" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource.parameter.quobyte"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a>

quobyte block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#quobyte PersistentVolume#quobyte}

---

###### `rbd`<sup>Optional</sup> <a name="rbd" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource.parameter.rbd"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a>

rbd block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#rbd PersistentVolume#rbd}

---

###### `vsphere_volume`<sup>Optional</sup> <a name="vsphere_volume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource.parameter.vsphereVolume"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a>

vsphere_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#vsphere_volume PersistentVolume#vsphere_volume}

---

##### `reset_claim_ref` <a name="reset_claim_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetClaimRef"></a>

```python
def reset_claim_ref() -> None
```

##### `reset_mount_options` <a name="reset_mount_options" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetMountOptions"></a>

```python
def reset_mount_options() -> None
```

##### `reset_node_affinity` <a name="reset_node_affinity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetNodeAffinity"></a>

```python
def reset_node_affinity() -> None
```

##### `reset_persistent_volume_reclaim_policy` <a name="reset_persistent_volume_reclaim_policy" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetPersistentVolumeReclaimPolicy"></a>

```python
def reset_persistent_volume_reclaim_policy() -> None
```

##### `reset_storage_class_name` <a name="reset_storage_class_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetStorageClassName"></a>

```python
def reset_storage_class_name() -> None
```

##### `reset_volume_mode` <a name="reset_volume_mode" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetVolumeMode"></a>

```python
def reset_volume_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.claimRef">claim_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference">PersistentVolumeSpecClaimRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.nodeAffinity">node_affinity</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference">PersistentVolumeSpecNodeAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeSource">persistent_volume_source</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference">PersistentVolumeSpecPersistentVolumeSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.accessModesInput">access_modes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.capacityInput">capacity_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.claimRefInput">claim_ref_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.mountOptionsInput">mount_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.nodeAffinityInput">node_affinity_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeReclaimPolicyInput">persistent_volume_reclaim_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeSourceInput">persistent_volume_source_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.storageClassNameInput">storage_class_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.volumeModeInput">volume_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.accessModes">access_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.capacity">capacity</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.mountOptions">mount_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeReclaimPolicy">persistent_volume_reclaim_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.storageClassName">storage_class_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.volumeMode">volume_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `claim_ref`<sup>Required</sup> <a name="claim_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.claimRef"></a>

```python
claim_ref: PersistentVolumeSpecClaimRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference">PersistentVolumeSpecClaimRefOutputReference</a>

---

##### `node_affinity`<sup>Required</sup> <a name="node_affinity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.nodeAffinity"></a>

```python
node_affinity: PersistentVolumeSpecNodeAffinityOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference">PersistentVolumeSpecNodeAffinityOutputReference</a>

---

##### `persistent_volume_source`<sup>Required</sup> <a name="persistent_volume_source" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeSource"></a>

```python
persistent_volume_source: PersistentVolumeSpecPersistentVolumeSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference">PersistentVolumeSpecPersistentVolumeSourceOutputReference</a>

---

##### `access_modes_input`<sup>Optional</sup> <a name="access_modes_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.accessModesInput"></a>

```python
access_modes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.capacityInput"></a>

```python
capacity_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `claim_ref_input`<sup>Optional</sup> <a name="claim_ref_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.claimRefInput"></a>

```python
claim_ref_input: PersistentVolumeSpecClaimRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a>

---

##### `mount_options_input`<sup>Optional</sup> <a name="mount_options_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.mountOptionsInput"></a>

```python
mount_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `node_affinity_input`<sup>Optional</sup> <a name="node_affinity_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.nodeAffinityInput"></a>

```python
node_affinity_input: PersistentVolumeSpecNodeAffinity
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a>

---

##### `persistent_volume_reclaim_policy_input`<sup>Optional</sup> <a name="persistent_volume_reclaim_policy_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeReclaimPolicyInput"></a>

```python
persistent_volume_reclaim_policy_input: str
```

- *Type:* str

---

##### `persistent_volume_source_input`<sup>Optional</sup> <a name="persistent_volume_source_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeSourceInput"></a>

```python
persistent_volume_source_input: PersistentVolumeSpecPersistentVolumeSource
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a>

---

##### `storage_class_name_input`<sup>Optional</sup> <a name="storage_class_name_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.storageClassNameInput"></a>

```python
storage_class_name_input: str
```

- *Type:* str

---

##### `volume_mode_input`<sup>Optional</sup> <a name="volume_mode_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.volumeModeInput"></a>

```python
volume_mode_input: str
```

- *Type:* str

---

##### `access_modes`<sup>Required</sup> <a name="access_modes" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.accessModes"></a>

```python
access_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.capacity"></a>

```python
capacity: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.mountOptions"></a>

```python
mount_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `persistent_volume_reclaim_policy`<sup>Required</sup> <a name="persistent_volume_reclaim_policy" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeReclaimPolicy"></a>

```python
persistent_volume_reclaim_policy: str
```

- *Type:* str

---

##### `storage_class_name`<sup>Required</sup> <a name="storage_class_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.storageClassName"></a>

```python
storage_class_name: str
```

- *Type:* str

---

##### `volume_mode`<sup>Required</sup> <a name="volume_mode" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.volumeMode"></a>

```python
volume_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[PersistentVolumeSpec, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>, cdktf.IResolvable]

---


### PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetFsType">reset_fs_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fs_type` <a name="reset_fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetFsType"></a>

```python
def reset_fs_type() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fsTypeInput">fs_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.partitionInput">partition_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.volumeIdInput">volume_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fsType">fs_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.partition">partition</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fs_type_input`<sup>Optional</sup> <a name="fs_type_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fsTypeInput"></a>

```python
fs_type_input: str
```

- *Type:* str

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.partitionInput"></a>

```python
partition_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `volume_id_input`<sup>Optional</sup> <a name="volume_id_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.volumeIdInput"></a>

```python
volume_id_input: str
```

- *Type:* str

---

##### `fs_type`<sup>Required</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.partition"></a>

```python
partition: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a>

---


### PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resetFsType">reset_fs_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resetKind">reset_kind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fs_type` <a name="reset_fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resetFsType"></a>

```python
def reset_fs_type() -> None
```

##### `reset_kind` <a name="reset_kind" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resetKind"></a>

```python
def reset_kind() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.cachingModeInput">caching_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.dataDiskUriInput">data_disk_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.diskNameInput">disk_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.fsTypeInput">fs_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.cachingMode">caching_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.dataDiskUri">data_disk_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.diskName">disk_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.fsType">fs_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `caching_mode_input`<sup>Optional</sup> <a name="caching_mode_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.cachingModeInput"></a>

```python
caching_mode_input: str
```

- *Type:* str

---

##### `data_disk_uri_input`<sup>Optional</sup> <a name="data_disk_uri_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.dataDiskUriInput"></a>

```python
data_disk_uri_input: str
```

- *Type:* str

---

##### `disk_name_input`<sup>Optional</sup> <a name="disk_name_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.diskNameInput"></a>

```python
disk_name_input: str
```

- *Type:* str

---

##### `fs_type_input`<sup>Optional</sup> <a name="fs_type_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.fsTypeInput"></a>

```python
fs_type_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `caching_mode`<sup>Required</sup> <a name="caching_mode" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.cachingMode"></a>

```python
caching_mode: str
```

- *Type:* str

---

##### `data_disk_uri`<sup>Required</sup> <a name="data_disk_uri" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.dataDiskUri"></a>

```python
data_disk_uri: str
```

- *Type:* str

---

##### `disk_name`<sup>Required</sup> <a name="disk_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.diskName"></a>

```python
disk_name: str
```

- *Type:* str

---

##### `fs_type`<sup>Required</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSourceAzureDisk
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a>

---


### PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resetSecretNamespace">reset_secret_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

##### `reset_secret_namespace` <a name="reset_secret_namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resetSecretNamespace"></a>

```python
def reset_secret_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretNamespaceInput">secret_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.shareNameInput">share_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretNamespace">secret_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.shareName">share_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `secret_namespace_input`<sup>Optional</sup> <a name="secret_namespace_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretNamespaceInput"></a>

```python
secret_namespace_input: str
```

- *Type:* str

---

##### `share_name_input`<sup>Optional</sup> <a name="share_name_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.shareNameInput"></a>

```python
share_name_input: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `secret_namespace`<sup>Required</sup> <a name="secret_namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretNamespace"></a>

```python
secret_namespace: str
```

- *Type:* str

---

##### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSourceAzureFile
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.putSecretRef">put_secret_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetSecretFile">reset_secret_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetSecretRef">reset_secret_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetUser">reset_user</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_secret_ref` <a name="put_secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.putSecretRef"></a>

```python
def put_secret_ref(
  name: str = None,
  namespace: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.putSecretRef.parameter.name"></a>

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#name PersistentVolume#name}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.putSecretRef.parameter.namespace"></a>

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#namespace PersistentVolume#namespace}

---

##### `reset_path` <a name="reset_path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

##### `reset_secret_file` <a name="reset_secret_file" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetSecretFile"></a>

```python
def reset_secret_file() -> None
```

##### `reset_secret_ref` <a name="reset_secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetSecretRef"></a>

```python
def reset_secret_ref() -> None
```

##### `reset_user` <a name="reset_user" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetUser"></a>

```python
def reset_user() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretRef">secret_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.monitorsInput">monitors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretFileInput">secret_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretRefInput">secret_ref_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.monitors">monitors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretFile">secret_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_ref`<sup>Required</sup> <a name="secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretRef"></a>

```python
secret_ref: PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference</a>

---

##### `monitors_input`<sup>Optional</sup> <a name="monitors_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.monitorsInput"></a>

```python
monitors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret_file_input`<sup>Optional</sup> <a name="secret_file_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretFileInput"></a>

```python
secret_file_input: str
```

- *Type:* str

---

##### `secret_ref_input`<sup>Optional</sup> <a name="secret_ref_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretRefInput"></a>

```python
secret_ref_input: PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a>

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `monitors`<sup>Required</sup> <a name="monitors" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.monitors"></a>

```python
monitors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret_file`<sup>Required</sup> <a name="secret_file" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretFile"></a>

```python
secret_file: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSourceCephFs
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resetFsType">reset_fs_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fs_type` <a name="reset_fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resetFsType"></a>

```python
def reset_fs_type() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.fsTypeInput">fs_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.volumeIdInput">volume_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.fsType">fs_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fs_type_input`<sup>Optional</sup> <a name="fs_type_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.fsTypeInput"></a>

```python
fs_type_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `volume_id_input`<sup>Optional</sup> <a name="volume_id_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.volumeIdInput"></a>

```python
volume_id_input: str
```

- *Type:* str

---

##### `fs_type`<sup>Required</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSourceCinder
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putControllerExpandSecretRef">put_controller_expand_secret_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putControllerPublishSecretRef">put_controller_publish_secret_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putNodePublishSecretRef">put_node_publish_secret_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putNodeStageSecretRef">put_node_stage_secret_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetControllerExpandSecretRef">reset_controller_expand_secret_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetControllerPublishSecretRef">reset_controller_publish_secret_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetFsType">reset_fs_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetNodePublishSecretRef">reset_node_publish_secret_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetNodeStageSecretRef">reset_node_stage_secret_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetVolumeAttributes">reset_volume_attributes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_controller_expand_secret_ref` <a name="put_controller_expand_secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putControllerExpandSecretRef"></a>

```python
def put_controller_expand_secret_ref(
  name: str = None,
  namespace: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putControllerExpandSecretRef.parameter.name"></a>

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#name PersistentVolume#name}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putControllerExpandSecretRef.parameter.namespace"></a>

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#namespace PersistentVolume#namespace}

---

##### `put_controller_publish_secret_ref` <a name="put_controller_publish_secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putControllerPublishSecretRef"></a>

```python
def put_controller_publish_secret_ref(
  name: str = None,
  namespace: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putControllerPublishSecretRef.parameter.name"></a>

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#name PersistentVolume#name}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putControllerPublishSecretRef.parameter.namespace"></a>

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#namespace PersistentVolume#namespace}

---

##### `put_node_publish_secret_ref` <a name="put_node_publish_secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putNodePublishSecretRef"></a>

```python
def put_node_publish_secret_ref(
  name: str = None,
  namespace: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putNodePublishSecretRef.parameter.name"></a>

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#name PersistentVolume#name}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putNodePublishSecretRef.parameter.namespace"></a>

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#namespace PersistentVolume#namespace}

---

##### `put_node_stage_secret_ref` <a name="put_node_stage_secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putNodeStageSecretRef"></a>

```python
def put_node_stage_secret_ref(
  name: str = None,
  namespace: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putNodeStageSecretRef.parameter.name"></a>

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#name PersistentVolume#name}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putNodeStageSecretRef.parameter.namespace"></a>

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#namespace PersistentVolume#namespace}

---

##### `reset_controller_expand_secret_ref` <a name="reset_controller_expand_secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetControllerExpandSecretRef"></a>

```python
def reset_controller_expand_secret_ref() -> None
```

##### `reset_controller_publish_secret_ref` <a name="reset_controller_publish_secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetControllerPublishSecretRef"></a>

```python
def reset_controller_publish_secret_ref() -> None
```

##### `reset_fs_type` <a name="reset_fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetFsType"></a>

```python
def reset_fs_type() -> None
```

##### `reset_node_publish_secret_ref` <a name="reset_node_publish_secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetNodePublishSecretRef"></a>

```python
def reset_node_publish_secret_ref() -> None
```

##### `reset_node_stage_secret_ref` <a name="reset_node_stage_secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetNodeStageSecretRef"></a>

```python
def reset_node_stage_secret_ref() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

##### `reset_volume_attributes` <a name="reset_volume_attributes" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetVolumeAttributes"></a>

```python
def reset_volume_attributes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerExpandSecretRef">controller_expand_secret_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerPublishSecretRef">controller_publish_secret_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodePublishSecretRef">node_publish_secret_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodeStageSecretRef">node_stage_secret_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerExpandSecretRefInput">controller_expand_secret_ref_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerPublishSecretRefInput">controller_publish_secret_ref_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.driverInput">driver_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.fsTypeInput">fs_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodePublishSecretRefInput">node_publish_secret_ref_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodeStageSecretRefInput">node_stage_secret_ref_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeAttributesInput">volume_attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeHandleInput">volume_handle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.driver">driver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.fsType">fs_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeAttributes">volume_attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeHandle">volume_handle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `controller_expand_secret_ref`<sup>Required</sup> <a name="controller_expand_secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerExpandSecretRef"></a>

```python
controller_expand_secret_ref: PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference</a>

---

##### `controller_publish_secret_ref`<sup>Required</sup> <a name="controller_publish_secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerPublishSecretRef"></a>

```python
controller_publish_secret_ref: PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference</a>

---

##### `node_publish_secret_ref`<sup>Required</sup> <a name="node_publish_secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodePublishSecretRef"></a>

```python
node_publish_secret_ref: PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference</a>

---

##### `node_stage_secret_ref`<sup>Required</sup> <a name="node_stage_secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodeStageSecretRef"></a>

```python
node_stage_secret_ref: PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference</a>

---

##### `controller_expand_secret_ref_input`<sup>Optional</sup> <a name="controller_expand_secret_ref_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerExpandSecretRefInput"></a>

```python
controller_expand_secret_ref_input: PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a>

---

##### `controller_publish_secret_ref_input`<sup>Optional</sup> <a name="controller_publish_secret_ref_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerPublishSecretRefInput"></a>

```python
controller_publish_secret_ref_input: PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a>

---

##### `driver_input`<sup>Optional</sup> <a name="driver_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.driverInput"></a>

```python
driver_input: str
```

- *Type:* str

---

##### `fs_type_input`<sup>Optional</sup> <a name="fs_type_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.fsTypeInput"></a>

```python
fs_type_input: str
```

- *Type:* str

---

##### `node_publish_secret_ref_input`<sup>Optional</sup> <a name="node_publish_secret_ref_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodePublishSecretRefInput"></a>

```python
node_publish_secret_ref_input: PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a>

---

##### `node_stage_secret_ref_input`<sup>Optional</sup> <a name="node_stage_secret_ref_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodeStageSecretRefInput"></a>

```python
node_stage_secret_ref_input: PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a>

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `volume_attributes_input`<sup>Optional</sup> <a name="volume_attributes_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeAttributesInput"></a>

```python
volume_attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `volume_handle_input`<sup>Optional</sup> <a name="volume_handle_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeHandleInput"></a>

```python
volume_handle_input: str
```

- *Type:* str

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.driver"></a>

```python
driver: str
```

- *Type:* str

---

##### `fs_type`<sup>Required</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `volume_attributes`<sup>Required</sup> <a name="volume_attributes" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeAttributes"></a>

```python
volume_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `volume_handle`<sup>Required</sup> <a name="volume_handle" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeHandle"></a>

```python
volume_handle: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSourceCsi
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a>

---


### PersistentVolumeSpecPersistentVolumeSourceFcOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceFcOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resetFsType">reset_fs_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fs_type` <a name="reset_fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resetFsType"></a>

```python
def reset_fs_type() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.fsTypeInput">fs_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.lunInput">lun_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.targetWwNsInput">target_ww_ns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.fsType">fs_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.lun">lun</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.targetWwNs">target_ww_ns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fs_type_input`<sup>Optional</sup> <a name="fs_type_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.fsTypeInput"></a>

```python
fs_type_input: str
```

- *Type:* str

---

##### `lun_input`<sup>Optional</sup> <a name="lun_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.lunInput"></a>

```python
lun_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `target_ww_ns_input`<sup>Optional</sup> <a name="target_ww_ns_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.targetWwNsInput"></a>

```python
target_ww_ns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fs_type`<sup>Required</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.lun"></a>

```python
lun: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `target_ww_ns`<sup>Required</sup> <a name="target_ww_ns" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.targetWwNs"></a>

```python
target_ww_ns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSourceFc
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a>

---


### PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.putSecretRef">put_secret_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetFsType">reset_fs_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetSecretRef">reset_secret_ref</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_secret_ref` <a name="put_secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.putSecretRef"></a>

```python
def put_secret_ref(
  name: str = None,
  namespace: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.putSecretRef.parameter.name"></a>

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#name PersistentVolume#name}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.putSecretRef.parameter.namespace"></a>

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#namespace PersistentVolume#namespace}

---

##### `reset_fs_type` <a name="reset_fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetFsType"></a>

```python
def reset_fs_type() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

##### `reset_secret_ref` <a name="reset_secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetSecretRef"></a>

```python
def reset_secret_ref() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.secretRef">secret_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.driverInput">driver_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.fsTypeInput">fs_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.optionsInput">options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.secretRefInput">secret_ref_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.driver">driver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.fsType">fs_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.options">options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_ref`<sup>Required</sup> <a name="secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.secretRef"></a>

```python
secret_ref: PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference</a>

---

##### `driver_input`<sup>Optional</sup> <a name="driver_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.driverInput"></a>

```python
driver_input: str
```

- *Type:* str

---

##### `fs_type_input`<sup>Optional</sup> <a name="fs_type_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.fsTypeInput"></a>

```python
fs_type_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.optionsInput"></a>

```python
options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret_ref_input`<sup>Optional</sup> <a name="secret_ref_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.secretRefInput"></a>

```python
secret_ref_input: PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a>

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.driver"></a>

```python
driver: str
```

- *Type:* str

---

##### `fs_type`<sup>Required</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSourceFlexVolume
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a>

---


### PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resetDatasetName">reset_dataset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resetDatasetUuid">reset_dataset_uuid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataset_name` <a name="reset_dataset_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resetDatasetName"></a>

```python
def reset_dataset_name() -> None
```

##### `reset_dataset_uuid` <a name="reset_dataset_uuid" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resetDatasetUuid"></a>

```python
def reset_dataset_uuid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetNameInput">dataset_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetUuidInput">dataset_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetName">dataset_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetUuid">dataset_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_name_input`<sup>Optional</sup> <a name="dataset_name_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetNameInput"></a>

```python
dataset_name_input: str
```

- *Type:* str

---

##### `dataset_uuid_input`<sup>Optional</sup> <a name="dataset_uuid_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetUuidInput"></a>

```python
dataset_uuid_input: str
```

- *Type:* str

---

##### `dataset_name`<sup>Required</sup> <a name="dataset_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetName"></a>

```python
dataset_name: str
```

- *Type:* str

---

##### `dataset_uuid`<sup>Required</sup> <a name="dataset_uuid" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetUuid"></a>

```python
dataset_uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSourceFlocker
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a>

---


### PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetFsType">reset_fs_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fs_type` <a name="reset_fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetFsType"></a>

```python
def reset_fs_type() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fsTypeInput">fs_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.partitionInput">partition_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.pdNameInput">pd_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fsType">fs_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.partition">partition</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.pdName">pd_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fs_type_input`<sup>Optional</sup> <a name="fs_type_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fsTypeInput"></a>

```python
fs_type_input: str
```

- *Type:* str

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.partitionInput"></a>

```python
partition_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pd_name_input`<sup>Optional</sup> <a name="pd_name_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.pdNameInput"></a>

```python
pd_name_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fs_type`<sup>Required</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.partition"></a>

```python
partition: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pd_name`<sup>Required</sup> <a name="pd_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.pdName"></a>

```python
pd_name: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a>

---


### PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.endpointsNameInput">endpoints_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.endpointsName">endpoints_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoints_name_input`<sup>Optional</sup> <a name="endpoints_name_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.endpointsNameInput"></a>

```python
endpoints_name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `endpoints_name`<sup>Required</sup> <a name="endpoints_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.endpointsName"></a>

```python
endpoints_name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSourceGlusterfs
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a>

---


### PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSourceHostPath
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a>

---


### PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetFsType">reset_fs_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetIscsiInterface">reset_iscsi_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetLun">reset_lun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fs_type` <a name="reset_fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetFsType"></a>

```python
def reset_fs_type() -> None
```

##### `reset_iscsi_interface` <a name="reset_iscsi_interface" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetIscsiInterface"></a>

```python
def reset_iscsi_interface() -> None
```

##### `reset_lun` <a name="reset_lun" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetLun"></a>

```python
def reset_lun() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.fsTypeInput">fs_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iqnInput">iqn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iscsiInterfaceInput">iscsi_interface_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.lunInput">lun_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.targetPortalInput">target_portal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.fsType">fs_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iqn">iqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iscsiInterface">iscsi_interface</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.lun">lun</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.targetPortal">target_portal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fs_type_input`<sup>Optional</sup> <a name="fs_type_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.fsTypeInput"></a>

```python
fs_type_input: str
```

- *Type:* str

---

##### `iqn_input`<sup>Optional</sup> <a name="iqn_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iqnInput"></a>

```python
iqn_input: str
```

- *Type:* str

---

##### `iscsi_interface_input`<sup>Optional</sup> <a name="iscsi_interface_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iscsiInterfaceInput"></a>

```python
iscsi_interface_input: str
```

- *Type:* str

---

##### `lun_input`<sup>Optional</sup> <a name="lun_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.lunInput"></a>

```python
lun_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `target_portal_input`<sup>Optional</sup> <a name="target_portal_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.targetPortalInput"></a>

```python
target_portal_input: str
```

- *Type:* str

---

##### `fs_type`<sup>Required</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

---

##### `iqn`<sup>Required</sup> <a name="iqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iqn"></a>

```python
iqn: str
```

- *Type:* str

---

##### `iscsi_interface`<sup>Required</sup> <a name="iscsi_interface" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iscsiInterface"></a>

```python
iscsi_interface: str
```

- *Type:* str

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.lun"></a>

```python
lun: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `target_portal`<sup>Required</sup> <a name="target_portal" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.targetPortal"></a>

```python
target_portal: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSourceIscsi
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a>

---


### PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSourceLocal
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a>

---


### PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.serverInput">server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.serverInput"></a>

```python
server_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSourceNfs
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a>

---


### PersistentVolumeSpecPersistentVolumeSourceOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAwsElasticBlockStore">put_aws_elastic_block_store</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureDisk">put_azure_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureFile">put_azure_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCephFs">put_ceph_fs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCinder">put_cinder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCsi">put_csi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFc">put_fc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlexVolume">put_flex_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlocker">put_flocker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGcePersistentDisk">put_gce_persistent_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGlusterfs">put_glusterfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putHostPath">put_host_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putIscsi">put_iscsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putLocal">put_local</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putNfs">put_nfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putPhotonPersistentDisk">put_photon_persistent_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putQuobyte">put_quobyte</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putRbd">put_rbd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putVsphereVolume">put_vsphere_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetAwsElasticBlockStore">reset_aws_elastic_block_store</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetAzureDisk">reset_azure_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetAzureFile">reset_azure_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetCephFs">reset_ceph_fs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetCinder">reset_cinder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetCsi">reset_csi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetFc">reset_fc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetFlexVolume">reset_flex_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetFlocker">reset_flocker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetGcePersistentDisk">reset_gce_persistent_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetGlusterfs">reset_glusterfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetHostPath">reset_host_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetIscsi">reset_iscsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetLocal">reset_local</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetNfs">reset_nfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetPhotonPersistentDisk">reset_photon_persistent_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetQuobyte">reset_quobyte</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetRbd">reset_rbd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetVsphereVolume">reset_vsphere_volume</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_elastic_block_store` <a name="put_aws_elastic_block_store" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAwsElasticBlockStore"></a>

```python
def put_aws_elastic_block_store(
  volume_id: str,
  fs_type: str = None,
  partition: typing.Union[int, float] = None,
  read_only: typing.Union[bool, IResolvable] = None
) -> None
```

###### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAwsElasticBlockStore.parameter.volumeId"></a>

- *Type:* str

Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#volume_id PersistentVolume#volume_id}

---

###### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAwsElasticBlockStore.parameter.fsType"></a>

- *Type:* str

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#fs_type PersistentVolume#fs_type}

---

###### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAwsElasticBlockStore.parameter.partition"></a>

- *Type:* typing.Union[int, float]

The partition in the volume that you want to mount.

If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#partition PersistentVolume#partition}

---

###### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAwsElasticBlockStore.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

##### `put_azure_disk` <a name="put_azure_disk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureDisk"></a>

```python
def put_azure_disk(
  caching_mode: str,
  data_disk_uri: str,
  disk_name: str,
  fs_type: str = None,
  kind: str = None,
  read_only: typing.Union[bool, IResolvable] = None
) -> None
```

###### `caching_mode`<sup>Required</sup> <a name="caching_mode" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureDisk.parameter.cachingMode"></a>

- *Type:* str

Host Caching mode: None, Read Only, Read Write.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#caching_mode PersistentVolume#caching_mode}

---

###### `data_disk_uri`<sup>Required</sup> <a name="data_disk_uri" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureDisk.parameter.dataDiskUri"></a>

- *Type:* str

The URI the data disk in the blob storage.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#data_disk_uri PersistentVolume#data_disk_uri}

---

###### `disk_name`<sup>Required</sup> <a name="disk_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureDisk.parameter.diskName"></a>

- *Type:* str

The Name of the data disk in the blob storage.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#disk_name PersistentVolume#disk_name}

---

###### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureDisk.parameter.fsType"></a>

- *Type:* str

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#fs_type PersistentVolume#fs_type}

---

###### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureDisk.parameter.kind"></a>

- *Type:* str

The type for the data disk. Expected values: Shared, Dedicated, Managed. Defaults to Shared.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#kind PersistentVolume#kind}

---

###### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureDisk.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

##### `put_azure_file` <a name="put_azure_file" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureFile"></a>

```python
def put_azure_file(
  secret_name: str,
  share_name: str,
  read_only: typing.Union[bool, IResolvable] = None,
  secret_namespace: str = None
) -> None
```

###### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureFile.parameter.secretName"></a>

- *Type:* str

The name of secret that contains Azure Storage Account Name and Key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#secret_name PersistentVolume#secret_name}

---

###### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureFile.parameter.shareName"></a>

- *Type:* str

Share Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#share_name PersistentVolume#share_name}

---

###### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureFile.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

###### `secret_namespace`<sup>Optional</sup> <a name="secret_namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureFile.parameter.secretNamespace"></a>

- *Type:* str

The namespace of the secret that contains Azure Storage Account Name and Key.

For Kubernetes up to 1.18.x the default is the same as the Pod. For Kubernetes 1.19.x and later the default is "default" namespace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#secret_namespace PersistentVolume#secret_namespace}

---

##### `put_ceph_fs` <a name="put_ceph_fs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCephFs"></a>

```python
def put_ceph_fs(
  monitors: typing.List[str],
  path: str = None,
  read_only: typing.Union[bool, IResolvable] = None,
  secret_file: str = None,
  secret_ref: PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef = None,
  user: str = None
) -> None
```

###### `monitors`<sup>Required</sup> <a name="monitors" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCephFs.parameter.monitors"></a>

- *Type:* typing.List[str]

Monitors is a collection of Ceph monitors More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#monitors PersistentVolume#monitors}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCephFs.parameter.path"></a>

- *Type:* str

Used as the mounted root, rather than the full Ceph tree, default is /.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#path PersistentVolume#path}

---

###### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCephFs.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to force the read-only setting in VolumeMounts. Defaults to `false` (read/write). More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

###### `secret_file`<sup>Optional</sup> <a name="secret_file" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCephFs.parameter.secretFile"></a>

- *Type:* str

The path to key ring for User, default is /etc/ceph/user.secret More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#secret_file PersistentVolume#secret_file}

---

###### `secret_ref`<sup>Optional</sup> <a name="secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCephFs.parameter.secretRef"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#secret_ref PersistentVolume#secret_ref}

---

###### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCephFs.parameter.user"></a>

- *Type:* str

User is the rados user name, default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#user PersistentVolume#user}

---

##### `put_cinder` <a name="put_cinder" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCinder"></a>

```python
def put_cinder(
  volume_id: str,
  fs_type: str = None,
  read_only: typing.Union[bool, IResolvable] = None
) -> None
```

###### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCinder.parameter.volumeId"></a>

- *Type:* str

Volume ID used to identify the volume in Cinder. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#volume_id PersistentVolume#volume_id}

---

###### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCinder.parameter.fsType"></a>

- *Type:* str

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#fs_type PersistentVolume#fs_type}

---

###### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCinder.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

##### `put_csi` <a name="put_csi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCsi"></a>

```python
def put_csi(
  driver: str,
  volume_handle: str,
  controller_expand_secret_ref: PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef = None,
  controller_publish_secret_ref: PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef = None,
  fs_type: str = None,
  node_publish_secret_ref: PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef = None,
  node_stage_secret_ref: PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef = None,
  read_only: typing.Union[bool, IResolvable] = None,
  volume_attributes: typing.Mapping[str] = None
) -> None
```

###### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCsi.parameter.driver"></a>

- *Type:* str

the name of the volume driver to use. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#driver PersistentVolume#driver}

---

###### `volume_handle`<sup>Required</sup> <a name="volume_handle" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCsi.parameter.volumeHandle"></a>

- *Type:* str

A string value that uniquely identifies the volume. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#volume_handle PersistentVolume#volume_handle}

---

###### `controller_expand_secret_ref`<sup>Optional</sup> <a name="controller_expand_secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCsi.parameter.controllerExpandSecretRef"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a>

controller_expand_secret_ref block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#controller_expand_secret_ref PersistentVolume#controller_expand_secret_ref}

---

###### `controller_publish_secret_ref`<sup>Optional</sup> <a name="controller_publish_secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCsi.parameter.controllerPublishSecretRef"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a>

controller_publish_secret_ref block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#controller_publish_secret_ref PersistentVolume#controller_publish_secret_ref}

---

###### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCsi.parameter.fsType"></a>

- *Type:* str

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#fs_type PersistentVolume#fs_type}

---

###### `node_publish_secret_ref`<sup>Optional</sup> <a name="node_publish_secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCsi.parameter.nodePublishSecretRef"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a>

node_publish_secret_ref block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#node_publish_secret_ref PersistentVolume#node_publish_secret_ref}

---

###### `node_stage_secret_ref`<sup>Optional</sup> <a name="node_stage_secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCsi.parameter.nodeStageSecretRef"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a>

node_stage_secret_ref block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#node_stage_secret_ref PersistentVolume#node_stage_secret_ref}

---

###### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCsi.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#csi.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

###### `volume_attributes`<sup>Optional</sup> <a name="volume_attributes" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCsi.parameter.volumeAttributes"></a>

- *Type:* typing.Mapping[str]

Attributes of the volume to publish.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#volume_attributes PersistentVolume#volume_attributes}

---

##### `put_fc` <a name="put_fc" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFc"></a>

```python
def put_fc(
  lun: typing.Union[int, float],
  target_ww_ns: typing.List[str],
  fs_type: str = None,
  read_only: typing.Union[bool, IResolvable] = None
) -> None
```

###### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFc.parameter.lun"></a>

- *Type:* typing.Union[int, float]

FC target lun number.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#lun PersistentVolume#lun}

---

###### `target_ww_ns`<sup>Required</sup> <a name="target_ww_ns" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFc.parameter.targetWwNs"></a>

- *Type:* typing.List[str]

FC target worldwide names (WWNs).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#target_ww_ns PersistentVolume#target_ww_ns}

---

###### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFc.parameter.fsType"></a>

- *Type:* str

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#fs_type PersistentVolume#fs_type}

---

###### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFc.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

##### `put_flex_volume` <a name="put_flex_volume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlexVolume"></a>

```python
def put_flex_volume(
  driver: str,
  fs_type: str = None,
  options: typing.Mapping[str] = None,
  read_only: typing.Union[bool, IResolvable] = None,
  secret_ref: PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef = None
) -> None
```

###### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlexVolume.parameter.driver"></a>

- *Type:* str

Driver is the name of the driver to use for this volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#driver PersistentVolume#driver}

---

###### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlexVolume.parameter.fsType"></a>

- *Type:* str

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#fs_type PersistentVolume#fs_type}

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlexVolume.parameter.options"></a>

- *Type:* typing.Mapping[str]

Extra command options if any.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#options PersistentVolume#options}

---

###### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlexVolume.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to force the ReadOnly setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

###### `secret_ref`<sup>Optional</sup> <a name="secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlexVolume.parameter.secretRef"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#secret_ref PersistentVolume#secret_ref}

---

##### `put_flocker` <a name="put_flocker" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlocker"></a>

```python
def put_flocker(
  dataset_name: str = None,
  dataset_uuid: str = None
) -> None
```

###### `dataset_name`<sup>Optional</sup> <a name="dataset_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlocker.parameter.datasetName"></a>

- *Type:* str

Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#dataset_name PersistentVolume#dataset_name}

---

###### `dataset_uuid`<sup>Optional</sup> <a name="dataset_uuid" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlocker.parameter.datasetUuid"></a>

- *Type:* str

UUID of the dataset. This is unique identifier of a Flocker dataset.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#dataset_uuid PersistentVolume#dataset_uuid}

---

##### `put_gce_persistent_disk` <a name="put_gce_persistent_disk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGcePersistentDisk"></a>

```python
def put_gce_persistent_disk(
  pd_name: str,
  fs_type: str = None,
  partition: typing.Union[int, float] = None,
  read_only: typing.Union[bool, IResolvable] = None
) -> None
```

###### `pd_name`<sup>Required</sup> <a name="pd_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGcePersistentDisk.parameter.pdName"></a>

- *Type:* str

Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#pd_name PersistentVolume#pd_name}

---

###### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGcePersistentDisk.parameter.fsType"></a>

- *Type:* str

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#fs_type PersistentVolume#fs_type}

---

###### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGcePersistentDisk.parameter.partition"></a>

- *Type:* typing.Union[int, float]

The partition in the volume that you want to mount.

If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#partition PersistentVolume#partition}

---

###### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGcePersistentDisk.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to force the ReadOnly setting in VolumeMounts. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

##### `put_glusterfs` <a name="put_glusterfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGlusterfs"></a>

```python
def put_glusterfs(
  endpoints_name: str,
  path: str,
  read_only: typing.Union[bool, IResolvable] = None
) -> None
```

###### `endpoints_name`<sup>Required</sup> <a name="endpoints_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGlusterfs.parameter.endpointsName"></a>

- *Type:* str

The endpoint name that details Glusterfs topology. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#endpoints_name PersistentVolume#endpoints_name}

---

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGlusterfs.parameter.path"></a>

- *Type:* str

The Glusterfs volume path. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#path PersistentVolume#path}

---

###### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGlusterfs.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

##### `put_host_path` <a name="put_host_path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putHostPath"></a>

```python
def put_host_path(
  path: str = None,
  type: str = None
) -> None
```

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putHostPath.parameter.path"></a>

- *Type:* str

Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#hostpath.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#path PersistentVolume#path}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putHostPath.parameter.type"></a>

- *Type:* str

Type for HostPath volume. Allowed values are "" (default), DirectoryOrCreate, Directory, FileOrCreate, File, Socket, CharDevice and BlockDevice.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#type PersistentVolume#type}

---

##### `put_iscsi` <a name="put_iscsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putIscsi"></a>

```python
def put_iscsi(
  iqn: str,
  target_portal: str,
  fs_type: str = None,
  iscsi_interface: str = None,
  lun: typing.Union[int, float] = None,
  read_only: typing.Union[bool, IResolvable] = None
) -> None
```

###### `iqn`<sup>Required</sup> <a name="iqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putIscsi.parameter.iqn"></a>

- *Type:* str

Target iSCSI Qualified Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#iqn PersistentVolume#iqn}

---

###### `target_portal`<sup>Required</sup> <a name="target_portal" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putIscsi.parameter.targetPortal"></a>

- *Type:* str

iSCSI target portal.

The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#target_portal PersistentVolume#target_portal}

---

###### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putIscsi.parameter.fsType"></a>

- *Type:* str

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#iscsi

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#fs_type PersistentVolume#fs_type}

---

###### `iscsi_interface`<sup>Optional</sup> <a name="iscsi_interface" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putIscsi.parameter.iscsiInterface"></a>

- *Type:* str

iSCSI interface name that uses an iSCSI transport. Defaults to 'default' (tcp).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#iscsi_interface PersistentVolume#iscsi_interface}

---

###### `lun`<sup>Optional</sup> <a name="lun" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putIscsi.parameter.lun"></a>

- *Type:* typing.Union[int, float]

iSCSI target lun number.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#lun PersistentVolume#lun}

---

###### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putIscsi.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to force the read-only setting in VolumeMounts. Defaults to false.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

##### `put_local` <a name="put_local" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putLocal"></a>

```python
def put_local(
  path: str = None
) -> None
```

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putLocal.parameter.path"></a>

- *Type:* str

Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#local.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#path PersistentVolume#path}

---

##### `put_nfs` <a name="put_nfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putNfs"></a>

```python
def put_nfs(
  path: str,
  server: str,
  read_only: typing.Union[bool, IResolvable] = None
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putNfs.parameter.path"></a>

- *Type:* str

Path that is exported by the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#path PersistentVolume#path}

---

###### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putNfs.parameter.server"></a>

- *Type:* str

Server is the hostname or IP address of the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#server PersistentVolume#server}

---

###### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putNfs.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to force the NFS export to be mounted with read-only permissions. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#nfs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

##### `put_photon_persistent_disk` <a name="put_photon_persistent_disk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putPhotonPersistentDisk"></a>

```python
def put_photon_persistent_disk(
  pd_id: str,
  fs_type: str = None
) -> None
```

###### `pd_id`<sup>Required</sup> <a name="pd_id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putPhotonPersistentDisk.parameter.pdId"></a>

- *Type:* str

ID that identifies Photon Controller persistent disk.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#pd_id PersistentVolume#pd_id}

---

###### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putPhotonPersistentDisk.parameter.fsType"></a>

- *Type:* str

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `put_quobyte` <a name="put_quobyte" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putQuobyte"></a>

```python
def put_quobyte(
  registry: str,
  volume: str,
  group: str = None,
  read_only: typing.Union[bool, IResolvable] = None,
  user: str = None
) -> None
```

###### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putQuobyte.parameter.registry"></a>

- *Type:* str

Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#registry PersistentVolume#registry}

---

###### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putQuobyte.parameter.volume"></a>

- *Type:* str

Volume is a string that references an already created Quobyte volume by name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#volume PersistentVolume#volume}

---

###### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putQuobyte.parameter.group"></a>

- *Type:* str

Group to map volume access to Default is no group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#group PersistentVolume#group}

---

###### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putQuobyte.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to force the Quobyte volume to be mounted with read-only permissions. Defaults to false.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

###### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putQuobyte.parameter.user"></a>

- *Type:* str

User to map volume access to Defaults to serivceaccount user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#user PersistentVolume#user}

---

##### `put_rbd` <a name="put_rbd" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putRbd"></a>

```python
def put_rbd(
  ceph_monitors: typing.List[str],
  rbd_image: str,
  fs_type: str = None,
  keyring: str = None,
  rados_user: str = None,
  rbd_pool: str = None,
  read_only: typing.Union[bool, IResolvable] = None,
  secret_ref: PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef = None
) -> None
```

###### `ceph_monitors`<sup>Required</sup> <a name="ceph_monitors" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putRbd.parameter.cephMonitors"></a>

- *Type:* typing.List[str]

A collection of Ceph monitors. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#ceph_monitors PersistentVolume#ceph_monitors}

---

###### `rbd_image`<sup>Required</sup> <a name="rbd_image" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putRbd.parameter.rbdImage"></a>

- *Type:* str

The rados image name. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#rbd_image PersistentVolume#rbd_image}

---

###### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putRbd.parameter.fsType"></a>

- *Type:* str

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#rbd

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#fs_type PersistentVolume#fs_type}

---

###### `keyring`<sup>Optional</sup> <a name="keyring" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putRbd.parameter.keyring"></a>

- *Type:* str

Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#keyring PersistentVolume#keyring}

---

###### `rados_user`<sup>Optional</sup> <a name="rados_user" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putRbd.parameter.radosUser"></a>

- *Type:* str

The rados user name. Default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#rados_user PersistentVolume#rados_user}

---

###### `rbd_pool`<sup>Optional</sup> <a name="rbd_pool" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putRbd.parameter.rbdPool"></a>

- *Type:* str

The rados pool name. Default is rbd. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#rbd_pool PersistentVolume#rbd_pool}

---

###### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putRbd.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to force the read-only setting in VolumeMounts. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#read_only PersistentVolume#read_only}

---

###### `secret_ref`<sup>Optional</sup> <a name="secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putRbd.parameter.secretRef"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#secret_ref PersistentVolume#secret_ref}

---

##### `put_vsphere_volume` <a name="put_vsphere_volume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putVsphereVolume"></a>

```python
def put_vsphere_volume(
  volume_path: str,
  fs_type: str = None
) -> None
```

###### `volume_path`<sup>Required</sup> <a name="volume_path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putVsphereVolume.parameter.volumePath"></a>

- *Type:* str

Path that identifies vSphere volume vmdk.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#volume_path PersistentVolume#volume_path}

---

###### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putVsphereVolume.parameter.fsType"></a>

- *Type:* str

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `reset_aws_elastic_block_store` <a name="reset_aws_elastic_block_store" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetAwsElasticBlockStore"></a>

```python
def reset_aws_elastic_block_store() -> None
```

##### `reset_azure_disk` <a name="reset_azure_disk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetAzureDisk"></a>

```python
def reset_azure_disk() -> None
```

##### `reset_azure_file` <a name="reset_azure_file" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetAzureFile"></a>

```python
def reset_azure_file() -> None
```

##### `reset_ceph_fs` <a name="reset_ceph_fs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetCephFs"></a>

```python
def reset_ceph_fs() -> None
```

##### `reset_cinder` <a name="reset_cinder" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetCinder"></a>

```python
def reset_cinder() -> None
```

##### `reset_csi` <a name="reset_csi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetCsi"></a>

```python
def reset_csi() -> None
```

##### `reset_fc` <a name="reset_fc" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetFc"></a>

```python
def reset_fc() -> None
```

##### `reset_flex_volume` <a name="reset_flex_volume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetFlexVolume"></a>

```python
def reset_flex_volume() -> None
```

##### `reset_flocker` <a name="reset_flocker" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetFlocker"></a>

```python
def reset_flocker() -> None
```

##### `reset_gce_persistent_disk` <a name="reset_gce_persistent_disk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetGcePersistentDisk"></a>

```python
def reset_gce_persistent_disk() -> None
```

##### `reset_glusterfs` <a name="reset_glusterfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetGlusterfs"></a>

```python
def reset_glusterfs() -> None
```

##### `reset_host_path` <a name="reset_host_path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetHostPath"></a>

```python
def reset_host_path() -> None
```

##### `reset_iscsi` <a name="reset_iscsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetIscsi"></a>

```python
def reset_iscsi() -> None
```

##### `reset_local` <a name="reset_local" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetLocal"></a>

```python
def reset_local() -> None
```

##### `reset_nfs` <a name="reset_nfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetNfs"></a>

```python
def reset_nfs() -> None
```

##### `reset_photon_persistent_disk` <a name="reset_photon_persistent_disk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetPhotonPersistentDisk"></a>

```python
def reset_photon_persistent_disk() -> None
```

##### `reset_quobyte` <a name="reset_quobyte" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetQuobyte"></a>

```python
def reset_quobyte() -> None
```

##### `reset_rbd` <a name="reset_rbd" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetRbd"></a>

```python
def reset_rbd() -> None
```

##### `reset_vsphere_volume` <a name="reset_vsphere_volume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetVsphereVolume"></a>

```python
def reset_vsphere_volume() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.awsElasticBlockStore">aws_elastic_block_store</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureDisk">azure_disk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference">PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureFile">azure_file</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference">PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cephFs">ceph_fs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference">PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cinder">cinder</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference">PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.csi">csi</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.fc">fc</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference">PersistentVolumeSpecPersistentVolumeSourceFcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flexVolume">flex_volume</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flocker">flocker</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference">PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.gcePersistentDisk">gce_persistent_disk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.glusterfs">glusterfs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference">PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.hostPath">host_path</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference">PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.iscsi">iscsi</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference">PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.local">local</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference">PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference">PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.photonPersistentDisk">photon_persistent_disk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.quobyte">quobyte</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference">PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.rbd">rbd</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference">PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.vsphereVolume">vsphere_volume</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference">PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.awsElasticBlockStoreInput">aws_elastic_block_store_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureDiskInput">azure_disk_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureFileInput">azure_file_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cephFsInput">ceph_fs_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cinderInput">cinder_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.csiInput">csi_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.fcInput">fc_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flexVolumeInput">flex_volume_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flockerInput">flocker_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.gcePersistentDiskInput">gce_persistent_disk_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.glusterfsInput">glusterfs_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.hostPathInput">host_path_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.iscsiInput">iscsi_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.localInput">local_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.nfsInput">nfs_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.photonPersistentDiskInput">photon_persistent_disk_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.quobyteInput">quobyte_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.rbdInput">rbd_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.vsphereVolumeInput">vsphere_volume_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_elastic_block_store`<sup>Required</sup> <a name="aws_elastic_block_store" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.awsElasticBlockStore"></a>

```python
aws_elastic_block_store: PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference</a>

---

##### `azure_disk`<sup>Required</sup> <a name="azure_disk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureDisk"></a>

```python
azure_disk: PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference">PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference</a>

---

##### `azure_file`<sup>Required</sup> <a name="azure_file" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureFile"></a>

```python
azure_file: PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference">PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference</a>

---

##### `ceph_fs`<sup>Required</sup> <a name="ceph_fs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cephFs"></a>

```python
ceph_fs: PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference">PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference</a>

---

##### `cinder`<sup>Required</sup> <a name="cinder" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cinder"></a>

```python
cinder: PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference">PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference</a>

---

##### `csi`<sup>Required</sup> <a name="csi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.csi"></a>

```python
csi: PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference</a>

---

##### `fc`<sup>Required</sup> <a name="fc" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.fc"></a>

```python
fc: PersistentVolumeSpecPersistentVolumeSourceFcOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference">PersistentVolumeSpecPersistentVolumeSourceFcOutputReference</a>

---

##### `flex_volume`<sup>Required</sup> <a name="flex_volume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flexVolume"></a>

```python
flex_volume: PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference</a>

---

##### `flocker`<sup>Required</sup> <a name="flocker" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flocker"></a>

```python
flocker: PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference">PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference</a>

---

##### `gce_persistent_disk`<sup>Required</sup> <a name="gce_persistent_disk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.gcePersistentDisk"></a>

```python
gce_persistent_disk: PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference</a>

---

##### `glusterfs`<sup>Required</sup> <a name="glusterfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.glusterfs"></a>

```python
glusterfs: PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference">PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference</a>

---

##### `host_path`<sup>Required</sup> <a name="host_path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.hostPath"></a>

```python
host_path: PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference">PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference</a>

---

##### `iscsi`<sup>Required</sup> <a name="iscsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.iscsi"></a>

```python
iscsi: PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference">PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference</a>

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.local"></a>

```python
local: PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference">PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference</a>

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.nfs"></a>

```python
nfs: PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference">PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference</a>

---

##### `photon_persistent_disk`<sup>Required</sup> <a name="photon_persistent_disk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.photonPersistentDisk"></a>

```python
photon_persistent_disk: PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference</a>

---

##### `quobyte`<sup>Required</sup> <a name="quobyte" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.quobyte"></a>

```python
quobyte: PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference">PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference</a>

---

##### `rbd`<sup>Required</sup> <a name="rbd" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.rbd"></a>

```python
rbd: PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference">PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference</a>

---

##### `vsphere_volume`<sup>Required</sup> <a name="vsphere_volume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.vsphereVolume"></a>

```python
vsphere_volume: PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference">PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference</a>

---

##### `aws_elastic_block_store_input`<sup>Optional</sup> <a name="aws_elastic_block_store_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.awsElasticBlockStoreInput"></a>

```python
aws_elastic_block_store_input: PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a>

---

##### `azure_disk_input`<sup>Optional</sup> <a name="azure_disk_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureDiskInput"></a>

```python
azure_disk_input: PersistentVolumeSpecPersistentVolumeSourceAzureDisk
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a>

---

##### `azure_file_input`<sup>Optional</sup> <a name="azure_file_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureFileInput"></a>

```python
azure_file_input: PersistentVolumeSpecPersistentVolumeSourceAzureFile
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a>

---

##### `ceph_fs_input`<sup>Optional</sup> <a name="ceph_fs_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cephFsInput"></a>

```python
ceph_fs_input: PersistentVolumeSpecPersistentVolumeSourceCephFs
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a>

---

##### `cinder_input`<sup>Optional</sup> <a name="cinder_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cinderInput"></a>

```python
cinder_input: PersistentVolumeSpecPersistentVolumeSourceCinder
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a>

---

##### `csi_input`<sup>Optional</sup> <a name="csi_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.csiInput"></a>

```python
csi_input: PersistentVolumeSpecPersistentVolumeSourceCsi
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a>

---

##### `fc_input`<sup>Optional</sup> <a name="fc_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.fcInput"></a>

```python
fc_input: PersistentVolumeSpecPersistentVolumeSourceFc
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a>

---

##### `flex_volume_input`<sup>Optional</sup> <a name="flex_volume_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flexVolumeInput"></a>

```python
flex_volume_input: PersistentVolumeSpecPersistentVolumeSourceFlexVolume
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a>

---

##### `flocker_input`<sup>Optional</sup> <a name="flocker_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flockerInput"></a>

```python
flocker_input: PersistentVolumeSpecPersistentVolumeSourceFlocker
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a>

---

##### `gce_persistent_disk_input`<sup>Optional</sup> <a name="gce_persistent_disk_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.gcePersistentDiskInput"></a>

```python
gce_persistent_disk_input: PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a>

---

##### `glusterfs_input`<sup>Optional</sup> <a name="glusterfs_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.glusterfsInput"></a>

```python
glusterfs_input: PersistentVolumeSpecPersistentVolumeSourceGlusterfs
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a>

---

##### `host_path_input`<sup>Optional</sup> <a name="host_path_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.hostPathInput"></a>

```python
host_path_input: PersistentVolumeSpecPersistentVolumeSourceHostPath
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a>

---

##### `iscsi_input`<sup>Optional</sup> <a name="iscsi_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.iscsiInput"></a>

```python
iscsi_input: PersistentVolumeSpecPersistentVolumeSourceIscsi
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a>

---

##### `local_input`<sup>Optional</sup> <a name="local_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.localInput"></a>

```python
local_input: PersistentVolumeSpecPersistentVolumeSourceLocal
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a>

---

##### `nfs_input`<sup>Optional</sup> <a name="nfs_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.nfsInput"></a>

```python
nfs_input: PersistentVolumeSpecPersistentVolumeSourceNfs
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a>

---

##### `photon_persistent_disk_input`<sup>Optional</sup> <a name="photon_persistent_disk_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.photonPersistentDiskInput"></a>

```python
photon_persistent_disk_input: PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a>

---

##### `quobyte_input`<sup>Optional</sup> <a name="quobyte_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.quobyteInput"></a>

```python
quobyte_input: PersistentVolumeSpecPersistentVolumeSourceQuobyte
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a>

---

##### `rbd_input`<sup>Optional</sup> <a name="rbd_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.rbdInput"></a>

```python
rbd_input: PersistentVolumeSpecPersistentVolumeSourceRbd
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a>

---

##### `vsphere_volume_input`<sup>Optional</sup> <a name="vsphere_volume_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.vsphereVolumeInput"></a>

```python
vsphere_volume_input: PersistentVolumeSpecPersistentVolumeSourceVsphereVolume
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSource
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a>

---


### PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resetFsType">reset_fs_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fs_type` <a name="reset_fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resetFsType"></a>

```python
def reset_fs_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fsTypeInput">fs_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.pdIdInput">pd_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fsType">fs_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.pdId">pd_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fs_type_input`<sup>Optional</sup> <a name="fs_type_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fsTypeInput"></a>

```python
fs_type_input: str
```

- *Type:* str

---

##### `pd_id_input`<sup>Optional</sup> <a name="pd_id_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.pdIdInput"></a>

```python
pd_id_input: str
```

- *Type:* str

---

##### `fs_type`<sup>Required</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

---

##### `pd_id`<sup>Required</sup> <a name="pd_id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.pdId"></a>

```python
pd_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a>

---


### PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resetUser">reset_user</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group` <a name="reset_group" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

##### `reset_user` <a name="reset_user" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resetUser"></a>

```python
def reset_user() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.registryInput">registry_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.volumeInput">volume_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.registry">registry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.volume">volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `registry_input`<sup>Optional</sup> <a name="registry_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.registryInput"></a>

```python
registry_input: str
```

- *Type:* str

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `volume_input`<sup>Optional</sup> <a name="volume_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.volumeInput"></a>

```python
volume_input: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.registry"></a>

```python
registry: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.volume"></a>

```python
volume: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSourceQuobyte
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a>

---


### PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.putSecretRef">put_secret_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetFsType">reset_fs_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetKeyring">reset_keyring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetRadosUser">reset_rados_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetRbdPool">reset_rbd_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetSecretRef">reset_secret_ref</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_secret_ref` <a name="put_secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.putSecretRef"></a>

```python
def put_secret_ref(
  name: str = None,
  namespace: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.putSecretRef.parameter.name"></a>

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#name PersistentVolume#name}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.putSecretRef.parameter.namespace"></a>

- *Type:* str

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume#namespace PersistentVolume#namespace}

---

##### `reset_fs_type` <a name="reset_fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetFsType"></a>

```python
def reset_fs_type() -> None
```

##### `reset_keyring` <a name="reset_keyring" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetKeyring"></a>

```python
def reset_keyring() -> None
```

##### `reset_rados_user` <a name="reset_rados_user" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetRadosUser"></a>

```python
def reset_rados_user() -> None
```

##### `reset_rbd_pool` <a name="reset_rbd_pool" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetRbdPool"></a>

```python
def reset_rbd_pool() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

##### `reset_secret_ref` <a name="reset_secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetSecretRef"></a>

```python
def reset_secret_ref() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.secretRef">secret_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.cephMonitorsInput">ceph_monitors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.fsTypeInput">fs_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.keyringInput">keyring_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.radosUserInput">rados_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdImageInput">rbd_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdPoolInput">rbd_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.secretRefInput">secret_ref_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.cephMonitors">ceph_monitors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.fsType">fs_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.keyring">keyring</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.radosUser">rados_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdImage">rbd_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdPool">rbd_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_ref`<sup>Required</sup> <a name="secret_ref" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.secretRef"></a>

```python
secret_ref: PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference</a>

---

##### `ceph_monitors_input`<sup>Optional</sup> <a name="ceph_monitors_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.cephMonitorsInput"></a>

```python
ceph_monitors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fs_type_input`<sup>Optional</sup> <a name="fs_type_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.fsTypeInput"></a>

```python
fs_type_input: str
```

- *Type:* str

---

##### `keyring_input`<sup>Optional</sup> <a name="keyring_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.keyringInput"></a>

```python
keyring_input: str
```

- *Type:* str

---

##### `rados_user_input`<sup>Optional</sup> <a name="rados_user_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.radosUserInput"></a>

```python
rados_user_input: str
```

- *Type:* str

---

##### `rbd_image_input`<sup>Optional</sup> <a name="rbd_image_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdImageInput"></a>

```python
rbd_image_input: str
```

- *Type:* str

---

##### `rbd_pool_input`<sup>Optional</sup> <a name="rbd_pool_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdPoolInput"></a>

```python
rbd_pool_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret_ref_input`<sup>Optional</sup> <a name="secret_ref_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.secretRefInput"></a>

```python
secret_ref_input: PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a>

---

##### `ceph_monitors`<sup>Required</sup> <a name="ceph_monitors" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.cephMonitors"></a>

```python
ceph_monitors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fs_type`<sup>Required</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

---

##### `keyring`<sup>Required</sup> <a name="keyring" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.keyring"></a>

```python
keyring: str
```

- *Type:* str

---

##### `rados_user`<sup>Required</sup> <a name="rados_user" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.radosUser"></a>

```python
rados_user: str
```

- *Type:* str

---

##### `rbd_image`<sup>Required</sup> <a name="rbd_image" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdImage"></a>

```python
rbd_image: str
```

- *Type:* str

---

##### `rbd_pool`<sup>Required</sup> <a name="rbd_pool" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdPool"></a>

```python
rbd_pool: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSourceRbd
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a>

---


### PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.resetFsType">reset_fs_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fs_type` <a name="reset_fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.resetFsType"></a>

```python
def reset_fs_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fsTypeInput">fs_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.volumePathInput">volume_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fsType">fs_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.volumePath">volume_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fs_type_input`<sup>Optional</sup> <a name="fs_type_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fsTypeInput"></a>

```python
fs_type_input: str
```

- *Type:* str

---

##### `volume_path_input`<sup>Optional</sup> <a name="volume_path_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.volumePathInput"></a>

```python
volume_path_input: str
```

- *Type:* str

---

##### `fs_type`<sup>Required</sup> <a name="fs_type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

---

##### `volume_path`<sup>Required</sup> <a name="volume_path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.volumePath"></a>

```python
volume_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.internalValue"></a>

```python
internal_value: PersistentVolumeSpecPersistentVolumeSourceVsphereVolume
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a>

---


### PersistentVolumeTimeoutsOutputReference <a name="PersistentVolumeTimeoutsOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import persistent_volume

persistentVolume.PersistentVolumeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[PersistentVolumeTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a>, cdktf.IResolvable]

---



