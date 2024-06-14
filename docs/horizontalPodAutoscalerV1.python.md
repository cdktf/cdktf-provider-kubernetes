# `horizontalPodAutoscalerV1` Submodule <a name="`horizontalPodAutoscalerV1` Submodule" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HorizontalPodAutoscalerV1 <a name="HorizontalPodAutoscalerV1" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1 kubernetes_horizontal_pod_autoscaler_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import horizontal_pod_autoscaler_v1

horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: HorizontalPodAutoscalerV1Metadata,
  spec: HorizontalPodAutoscalerV1Spec,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata">HorizontalPodAutoscalerV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec">HorizontalPodAutoscalerV1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#id HorizontalPodAutoscalerV1#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata">HorizontalPodAutoscalerV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#metadata HorizontalPodAutoscalerV1#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec">HorizontalPodAutoscalerV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#spec HorizontalPodAutoscalerV1#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#id HorizontalPodAutoscalerV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.putMetadata"></a>

```python
def put_metadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  namespace: str = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.putMetadata.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the horizontal pod autoscaler that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#annotations HorizontalPodAutoscalerV1#annotations}

---

###### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.putMetadata.parameter.generateName"></a>

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#generate_name HorizontalPodAutoscalerV1#generate_name}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the horizontal pod autoscaler.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#labels HorizontalPodAutoscalerV1#labels}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.putMetadata.parameter.name"></a>

- *Type:* str

Name of the horizontal pod autoscaler, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#name HorizontalPodAutoscalerV1#name}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.putMetadata.parameter.namespace"></a>

- *Type:* str

Namespace defines the space within which name of the horizontal pod autoscaler must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#namespace HorizontalPodAutoscalerV1#namespace}

---

##### `put_spec` <a name="put_spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.putSpec"></a>

```python
def put_spec(
  max_replicas: typing.Union[int, float],
  scale_target_ref: HorizontalPodAutoscalerV1SpecScaleTargetRef,
  min_replicas: typing.Union[int, float] = None,
  target_cpu_utilization_percentage: typing.Union[int, float] = None
) -> None
```

###### `max_replicas`<sup>Required</sup> <a name="max_replicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.putSpec.parameter.maxReplicas"></a>

- *Type:* typing.Union[int, float]

Upper limit for the number of pods that can be set by the autoscaler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#max_replicas HorizontalPodAutoscalerV1#max_replicas}

---

###### `scale_target_ref`<sup>Required</sup> <a name="scale_target_ref" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.putSpec.parameter.scaleTargetRef"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef">HorizontalPodAutoscalerV1SpecScaleTargetRef</a>

scale_target_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#scale_target_ref HorizontalPodAutoscalerV1#scale_target_ref}

---

###### `min_replicas`<sup>Optional</sup> <a name="min_replicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.putSpec.parameter.minReplicas"></a>

- *Type:* typing.Union[int, float]

Lower limit for the number of pods that can be set by the autoscaler, defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#min_replicas HorizontalPodAutoscalerV1#min_replicas}

---

###### `target_cpu_utilization_percentage`<sup>Optional</sup> <a name="target_cpu_utilization_percentage" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.putSpec.parameter.targetCpuUtilizationPercentage"></a>

- *Type:* typing.Union[int, float]

Target average CPU utilization (represented as a percentage of requested CPU) over all the pods.

If not specified the default autoscaling policy will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#target_cpu_utilization_percentage HorizontalPodAutoscalerV1#target_cpu_utilization_percentage}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a HorizontalPodAutoscalerV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import horizontal_pod_autoscaler_v1

horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import horizontal_pod_autoscaler_v1

horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_kubernetes import horizontal_pod_autoscaler_v1

horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_kubernetes import horizontal_pod_autoscaler_v1

horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a HorizontalPodAutoscalerV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the HorizontalPodAutoscalerV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing HorizontalPodAutoscalerV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HorizontalPodAutoscalerV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference">HorizontalPodAutoscalerV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference">HorizontalPodAutoscalerV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata">HorizontalPodAutoscalerV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.specInput">spec_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec">HorizontalPodAutoscalerV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.metadata"></a>

```python
metadata: HorizontalPodAutoscalerV1MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference">HorizontalPodAutoscalerV1MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.spec"></a>

```python
spec: HorizontalPodAutoscalerV1SpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference">HorizontalPodAutoscalerV1SpecOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.metadataInput"></a>

```python
metadata_input: HorizontalPodAutoscalerV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata">HorizontalPodAutoscalerV1Metadata</a>

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.specInput"></a>

```python
spec_input: HorizontalPodAutoscalerV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec">HorizontalPodAutoscalerV1Spec</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HorizontalPodAutoscalerV1Config <a name="HorizontalPodAutoscalerV1Config" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import horizontal_pod_autoscaler_v1

horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: HorizontalPodAutoscalerV1Metadata,
  spec: HorizontalPodAutoscalerV1Spec,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata">HorizontalPodAutoscalerV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec">HorizontalPodAutoscalerV1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#id HorizontalPodAutoscalerV1#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.metadata"></a>

```python
metadata: HorizontalPodAutoscalerV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata">HorizontalPodAutoscalerV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#metadata HorizontalPodAutoscalerV1#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.spec"></a>

```python
spec: HorizontalPodAutoscalerV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec">HorizontalPodAutoscalerV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#spec HorizontalPodAutoscalerV1#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#id HorizontalPodAutoscalerV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### HorizontalPodAutoscalerV1Metadata <a name="HorizontalPodAutoscalerV1Metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import horizontal_pod_autoscaler_v1

horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata(
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
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | An unstructured key value map stored with the horizontal pod autoscaler that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.generateName">generate_name</a></code> | <code>str</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the horizontal pod autoscaler. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.name">name</a></code> | <code>str</code> | Name of the horizontal pod autoscaler, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.namespace">namespace</a></code> | <code>str</code> | Namespace defines the space within which name of the horizontal pod autoscaler must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the horizontal pod autoscaler that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#annotations HorizontalPodAutoscalerV1#annotations}

---

##### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#generate_name HorizontalPodAutoscalerV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the horizontal pod autoscaler.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#labels HorizontalPodAutoscalerV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the horizontal pod autoscaler, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#name HorizontalPodAutoscalerV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace defines the space within which name of the horizontal pod autoscaler must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#namespace HorizontalPodAutoscalerV1#namespace}

---

### HorizontalPodAutoscalerV1Spec <a name="HorizontalPodAutoscalerV1Spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import horizontal_pod_autoscaler_v1

horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec(
  max_replicas: typing.Union[int, float],
  scale_target_ref: HorizontalPodAutoscalerV1SpecScaleTargetRef,
  min_replicas: typing.Union[int, float] = None,
  target_cpu_utilization_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.property.maxReplicas">max_replicas</a></code> | <code>typing.Union[int, float]</code> | Upper limit for the number of pods that can be set by the autoscaler. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.property.scaleTargetRef">scale_target_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef">HorizontalPodAutoscalerV1SpecScaleTargetRef</a></code> | scale_target_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.property.minReplicas">min_replicas</a></code> | <code>typing.Union[int, float]</code> | Lower limit for the number of pods that can be set by the autoscaler, defaults to `1`. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.property.targetCpuUtilizationPercentage">target_cpu_utilization_percentage</a></code> | <code>typing.Union[int, float]</code> | Target average CPU utilization (represented as a percentage of requested CPU) over all the pods. |

---

##### `max_replicas`<sup>Required</sup> <a name="max_replicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.property.maxReplicas"></a>

```python
max_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Upper limit for the number of pods that can be set by the autoscaler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#max_replicas HorizontalPodAutoscalerV1#max_replicas}

---

##### `scale_target_ref`<sup>Required</sup> <a name="scale_target_ref" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.property.scaleTargetRef"></a>

```python
scale_target_ref: HorizontalPodAutoscalerV1SpecScaleTargetRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef">HorizontalPodAutoscalerV1SpecScaleTargetRef</a>

scale_target_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#scale_target_ref HorizontalPodAutoscalerV1#scale_target_ref}

---

##### `min_replicas`<sup>Optional</sup> <a name="min_replicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.property.minReplicas"></a>

```python
min_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Lower limit for the number of pods that can be set by the autoscaler, defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#min_replicas HorizontalPodAutoscalerV1#min_replicas}

---

##### `target_cpu_utilization_percentage`<sup>Optional</sup> <a name="target_cpu_utilization_percentage" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.property.targetCpuUtilizationPercentage"></a>

```python
target_cpu_utilization_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Target average CPU utilization (represented as a percentage of requested CPU) over all the pods.

If not specified the default autoscaling policy will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#target_cpu_utilization_percentage HorizontalPodAutoscalerV1#target_cpu_utilization_percentage}

---

### HorizontalPodAutoscalerV1SpecScaleTargetRef <a name="HorizontalPodAutoscalerV1SpecScaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import horizontal_pod_autoscaler_v1

horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef(
  kind: str,
  name: str,
  api_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef.property.kind">kind</a></code> | <code>str</code> | Kind of the referent. e.g. `ReplicationController`. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef.property.name">name</a></code> | <code>str</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef.property.apiVersion">api_version</a></code> | <code>str</code> | API version of the referent. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef.property.kind"></a>

```python
kind: str
```

- *Type:* str

Kind of the referent. e.g. `ReplicationController`. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#kind HorizontalPodAutoscalerV1#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#name HorizontalPodAutoscalerV1#name}

---

##### `api_version`<sup>Optional</sup> <a name="api_version" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef.property.apiVersion"></a>

```python
api_version: str
```

- *Type:* str

API version of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#api_version HorizontalPodAutoscalerV1#api_version}

---

## Classes <a name="Classes" id="Classes"></a>

### HorizontalPodAutoscalerV1MetadataOutputReference <a name="HorizontalPodAutoscalerV1MetadataOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import horizontal_pod_autoscaler_v1

horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetGenerateName">reset_generate_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_generate_name` <a name="reset_generate_name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetGenerateName"></a>

```python
def reset_generate_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.generateNameInput">generate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.generateName">generate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata">HorizontalPodAutoscalerV1Metadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name_input`<sup>Optional</sup> <a name="generate_name_input" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.generateNameInput"></a>

```python
generate_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name`<sup>Required</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.internalValue"></a>

```python
internal_value: HorizontalPodAutoscalerV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata">HorizontalPodAutoscalerV1Metadata</a>

---


### HorizontalPodAutoscalerV1SpecOutputReference <a name="HorizontalPodAutoscalerV1SpecOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import horizontal_pod_autoscaler_v1

horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.putScaleTargetRef">put_scale_target_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.resetMinReplicas">reset_min_replicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.resetTargetCpuUtilizationPercentage">reset_target_cpu_utilization_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_scale_target_ref` <a name="put_scale_target_ref" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.putScaleTargetRef"></a>

```python
def put_scale_target_ref(
  kind: str,
  name: str,
  api_version: str = None
) -> None
```

###### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.putScaleTargetRef.parameter.kind"></a>

- *Type:* str

Kind of the referent. e.g. `ReplicationController`. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#kind HorizontalPodAutoscalerV1#kind}

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.putScaleTargetRef.parameter.name"></a>

- *Type:* str

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#name HorizontalPodAutoscalerV1#name}

---

###### `api_version`<sup>Optional</sup> <a name="api_version" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.putScaleTargetRef.parameter.apiVersion"></a>

- *Type:* str

API version of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/horizontal_pod_autoscaler_v1#api_version HorizontalPodAutoscalerV1#api_version}

---

##### `reset_min_replicas` <a name="reset_min_replicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.resetMinReplicas"></a>

```python
def reset_min_replicas() -> None
```

##### `reset_target_cpu_utilization_percentage` <a name="reset_target_cpu_utilization_percentage" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.resetTargetCpuUtilizationPercentage"></a>

```python
def reset_target_cpu_utilization_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.scaleTargetRef">scale_target_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference">HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.maxReplicasInput">max_replicas_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.minReplicasInput">min_replicas_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.scaleTargetRefInput">scale_target_ref_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef">HorizontalPodAutoscalerV1SpecScaleTargetRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.targetCpuUtilizationPercentageInput">target_cpu_utilization_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.maxReplicas">max_replicas</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.minReplicas">min_replicas</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.targetCpuUtilizationPercentage">target_cpu_utilization_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec">HorizontalPodAutoscalerV1Spec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scale_target_ref`<sup>Required</sup> <a name="scale_target_ref" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.scaleTargetRef"></a>

```python
scale_target_ref: HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference">HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference</a>

---

##### `max_replicas_input`<sup>Optional</sup> <a name="max_replicas_input" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.maxReplicasInput"></a>

```python
max_replicas_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_replicas_input`<sup>Optional</sup> <a name="min_replicas_input" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.minReplicasInput"></a>

```python
min_replicas_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_target_ref_input`<sup>Optional</sup> <a name="scale_target_ref_input" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.scaleTargetRefInput"></a>

```python
scale_target_ref_input: HorizontalPodAutoscalerV1SpecScaleTargetRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef">HorizontalPodAutoscalerV1SpecScaleTargetRef</a>

---

##### `target_cpu_utilization_percentage_input`<sup>Optional</sup> <a name="target_cpu_utilization_percentage_input" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.targetCpuUtilizationPercentageInput"></a>

```python
target_cpu_utilization_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_replicas`<sup>Required</sup> <a name="max_replicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.maxReplicas"></a>

```python
max_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_replicas`<sup>Required</sup> <a name="min_replicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.minReplicas"></a>

```python
min_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_cpu_utilization_percentage`<sup>Required</sup> <a name="target_cpu_utilization_percentage" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.targetCpuUtilizationPercentage"></a>

```python
target_cpu_utilization_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.internalValue"></a>

```python
internal_value: HorizontalPodAutoscalerV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec">HorizontalPodAutoscalerV1Spec</a>

---


### HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference <a name="HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import horizontal_pod_autoscaler_v1

horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.resetApiVersion">reset_api_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_api_version` <a name="reset_api_version" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.resetApiVersion"></a>

```python
def reset_api_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.apiVersionInput">api_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.apiVersion">api_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef">HorizontalPodAutoscalerV1SpecScaleTargetRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_version_input`<sup>Optional</sup> <a name="api_version_input" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.apiVersionInput"></a>

```python
api_version_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `api_version`<sup>Required</sup> <a name="api_version" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.apiVersion"></a>

```python
api_version: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.internalValue"></a>

```python
internal_value: HorizontalPodAutoscalerV1SpecScaleTargetRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef">HorizontalPodAutoscalerV1SpecScaleTargetRef</a>

---



