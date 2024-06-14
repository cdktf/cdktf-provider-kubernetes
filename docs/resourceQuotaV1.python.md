# `resourceQuotaV1` Submodule <a name="`resourceQuotaV1` Submodule" id="@cdktf/provider-kubernetes.resourceQuotaV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceQuotaV1 <a name="ResourceQuotaV1" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1 kubernetes_resource_quota_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota_v1

resourceQuotaV1.ResourceQuotaV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: ResourceQuotaV1Metadata,
  id: str = None,
  spec: ResourceQuotaV1Spec = None,
  timeouts: ResourceQuotaV1Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata">ResourceQuotaV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#id ResourceQuotaV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec">ResourceQuotaV1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts">ResourceQuotaV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata">ResourceQuotaV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#metadata ResourceQuotaV1#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#id ResourceQuotaV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec">ResourceQuotaV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#spec ResourceQuotaV1#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts">ResourceQuotaV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#timeouts ResourceQuotaV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.resetSpec">reset_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.putMetadata"></a>

```python
def put_metadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  namespace: str = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.putMetadata.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the resource quota that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#annotations ResourceQuotaV1#annotations}

---

###### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.putMetadata.parameter.generateName"></a>

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#generate_name ResourceQuotaV1#generate_name}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the resource quota.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#labels ResourceQuotaV1#labels}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.putMetadata.parameter.name"></a>

- *Type:* str

Name of the resource quota, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#name ResourceQuotaV1#name}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.putMetadata.parameter.namespace"></a>

- *Type:* str

Namespace defines the space within which name of the resource quota must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#namespace ResourceQuotaV1#namespace}

---

##### `put_spec` <a name="put_spec" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.putSpec"></a>

```python
def put_spec(
  hard: typing.Mapping[str] = None,
  scopes: typing.List[str] = None,
  scope_selector: ResourceQuotaV1SpecScopeSelector = None
) -> None
```

###### `hard`<sup>Optional</sup> <a name="hard" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.putSpec.parameter.hard"></a>

- *Type:* typing.Mapping[str]

The set of desired hard limits for each named resource. More info: http://releases.k8s.io/HEAD/docs/design/admission_control_resource_quota.md#admissioncontrol-plugin-resourcequota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#hard ResourceQuotaV1#hard}

---

###### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.putSpec.parameter.scopes"></a>

- *Type:* typing.List[str]

A collection of filters that must match each object tracked by a quota.

If not specified, the quota matches all objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#scopes ResourceQuotaV1#scopes}

---

###### `scope_selector`<sup>Optional</sup> <a name="scope_selector" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.putSpec.parameter.scopeSelector"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelector">ResourceQuotaV1SpecScopeSelector</a>

scope_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#scope_selector ResourceQuotaV1#scope_selector}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#create ResourceQuotaV1#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#update ResourceQuotaV1#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_spec` <a name="reset_spec" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.resetSpec"></a>

```python
def reset_spec() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ResourceQuotaV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota_v1

resourceQuotaV1.ResourceQuotaV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota_v1

resourceQuotaV1.ResourceQuotaV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota_v1

resourceQuotaV1.ResourceQuotaV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota_v1

resourceQuotaV1.ResourceQuotaV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ResourceQuotaV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ResourceQuotaV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ResourceQuotaV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ResourceQuotaV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference">ResourceQuotaV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference">ResourceQuotaV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference">ResourceQuotaV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata">ResourceQuotaV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.specInput">spec_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec">ResourceQuotaV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts">ResourceQuotaV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.metadata"></a>

```python
metadata: ResourceQuotaV1MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference">ResourceQuotaV1MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.spec"></a>

```python
spec: ResourceQuotaV1SpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference">ResourceQuotaV1SpecOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.timeouts"></a>

```python
timeouts: ResourceQuotaV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference">ResourceQuotaV1TimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.metadataInput"></a>

```python
metadata_input: ResourceQuotaV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata">ResourceQuotaV1Metadata</a>

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.specInput"></a>

```python
spec_input: ResourceQuotaV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec">ResourceQuotaV1Spec</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ResourceQuotaV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts">ResourceQuotaV1Timeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceQuotaV1Config <a name="ResourceQuotaV1Config" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota_v1

resourceQuotaV1.ResourceQuotaV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: ResourceQuotaV1Metadata,
  id: str = None,
  spec: ResourceQuotaV1Spec = None,
  timeouts: ResourceQuotaV1Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata">ResourceQuotaV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#id ResourceQuotaV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec">ResourceQuotaV1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts">ResourceQuotaV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.metadata"></a>

```python
metadata: ResourceQuotaV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata">ResourceQuotaV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#metadata ResourceQuotaV1#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#id ResourceQuotaV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.spec"></a>

```python
spec: ResourceQuotaV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec">ResourceQuotaV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#spec ResourceQuotaV1#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.timeouts"></a>

```python
timeouts: ResourceQuotaV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts">ResourceQuotaV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#timeouts ResourceQuotaV1#timeouts}

---

### ResourceQuotaV1Metadata <a name="ResourceQuotaV1Metadata" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota_v1

resourceQuotaV1.ResourceQuotaV1Metadata(
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
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | An unstructured key value map stored with the resource quota that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata.property.generateName">generate_name</a></code> | <code>str</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the resource quota. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata.property.name">name</a></code> | <code>str</code> | Name of the resource quota, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata.property.namespace">namespace</a></code> | <code>str</code> | Namespace defines the space within which name of the resource quota must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the resource quota that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#annotations ResourceQuotaV1#annotations}

---

##### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#generate_name ResourceQuotaV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the resource quota.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#labels ResourceQuotaV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource quota, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#name ResourceQuotaV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace defines the space within which name of the resource quota must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#namespace ResourceQuotaV1#namespace}

---

### ResourceQuotaV1Spec <a name="ResourceQuotaV1Spec" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota_v1

resourceQuotaV1.ResourceQuotaV1Spec(
  hard: typing.Mapping[str] = None,
  scopes: typing.List[str] = None,
  scope_selector: ResourceQuotaV1SpecScopeSelector = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec.property.hard">hard</a></code> | <code>typing.Mapping[str]</code> | The set of desired hard limits for each named resource. More info: http://releases.k8s.io/HEAD/docs/design/admission_control_resource_quota.md#admissioncontrol-plugin-resourcequota. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | A collection of filters that must match each object tracked by a quota. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec.property.scopeSelector">scope_selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelector">ResourceQuotaV1SpecScopeSelector</a></code> | scope_selector block. |

---

##### `hard`<sup>Optional</sup> <a name="hard" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec.property.hard"></a>

```python
hard: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The set of desired hard limits for each named resource. More info: http://releases.k8s.io/HEAD/docs/design/admission_control_resource_quota.md#admissioncontrol-plugin-resourcequota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#hard ResourceQuotaV1#hard}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

A collection of filters that must match each object tracked by a quota.

If not specified, the quota matches all objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#scopes ResourceQuotaV1#scopes}

---

##### `scope_selector`<sup>Optional</sup> <a name="scope_selector" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec.property.scopeSelector"></a>

```python
scope_selector: ResourceQuotaV1SpecScopeSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelector">ResourceQuotaV1SpecScopeSelector</a>

scope_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#scope_selector ResourceQuotaV1#scope_selector}

---

### ResourceQuotaV1SpecScopeSelector <a name="ResourceQuotaV1SpecScopeSelector" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota_v1

resourceQuotaV1.ResourceQuotaV1SpecScopeSelector(
  match_expression: typing.Union[IResolvable, typing.List[ResourceQuotaV1SpecScopeSelectorMatchExpression]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelector.property.matchExpression">match_expression</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression">ResourceQuotaV1SpecScopeSelectorMatchExpression</a>]]</code> | match_expression block. |

---

##### `match_expression`<sup>Optional</sup> <a name="match_expression" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelector.property.matchExpression"></a>

```python
match_expression: typing.Union[IResolvable, typing.List[ResourceQuotaV1SpecScopeSelectorMatchExpression]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression">ResourceQuotaV1SpecScopeSelectorMatchExpression</a>]]

match_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#match_expression ResourceQuotaV1#match_expression}

---

### ResourceQuotaV1SpecScopeSelectorMatchExpression <a name="ResourceQuotaV1SpecScopeSelectorMatchExpression" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota_v1

resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression(
  operator: str,
  scope_name: str,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression.property.operator">operator</a></code> | <code>str</code> | Represents a scope's relationship to a set of values. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression.property.scopeName">scope_name</a></code> | <code>str</code> | The name of the scope that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression.property.values">values</a></code> | <code>typing.List[str]</code> | A list of scope selector requirements by scope of the resources. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression.property.operator"></a>

```python
operator: str
```

- *Type:* str

Represents a scope's relationship to a set of values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#operator ResourceQuotaV1#operator}

---

##### `scope_name`<sup>Required</sup> <a name="scope_name" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression.property.scopeName"></a>

```python
scope_name: str
```

- *Type:* str

The name of the scope that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#scope_name ResourceQuotaV1#scope_name}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

A list of scope selector requirements by scope of the resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#values ResourceQuotaV1#values}

---

### ResourceQuotaV1Timeouts <a name="ResourceQuotaV1Timeouts" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota_v1

resourceQuotaV1.ResourceQuotaV1Timeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#create ResourceQuotaV1#create}. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#update ResourceQuotaV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#create ResourceQuotaV1#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#update ResourceQuotaV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceQuotaV1MetadataOutputReference <a name="ResourceQuotaV1MetadataOutputReference" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota_v1

resourceQuotaV1.ResourceQuotaV1MetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.resetGenerateName">reset_generate_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_generate_name` <a name="reset_generate_name" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.resetGenerateName"></a>

```python
def reset_generate_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.generateNameInput">generate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.generateName">generate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata">ResourceQuotaV1Metadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name_input`<sup>Optional</sup> <a name="generate_name_input" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.generateNameInput"></a>

```python
generate_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name`<sup>Required</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.internalValue"></a>

```python
internal_value: ResourceQuotaV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata">ResourceQuotaV1Metadata</a>

---


### ResourceQuotaV1SpecOutputReference <a name="ResourceQuotaV1SpecOutputReference" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota_v1

resourceQuotaV1.ResourceQuotaV1SpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.putScopeSelector">put_scope_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.resetHard">reset_hard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.resetScopeSelector">reset_scope_selector</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_scope_selector` <a name="put_scope_selector" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.putScopeSelector"></a>

```python
def put_scope_selector(
  match_expression: typing.Union[IResolvable, typing.List[ResourceQuotaV1SpecScopeSelectorMatchExpression]] = None
) -> None
```

###### `match_expression`<sup>Optional</sup> <a name="match_expression" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.putScopeSelector.parameter.matchExpression"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression">ResourceQuotaV1SpecScopeSelectorMatchExpression</a>]]

match_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/resource_quota_v1#match_expression ResourceQuotaV1#match_expression}

---

##### `reset_hard` <a name="reset_hard" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.resetHard"></a>

```python
def reset_hard() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```

##### `reset_scope_selector` <a name="reset_scope_selector" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.resetScopeSelector"></a>

```python
def reset_scope_selector() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.scopeSelector">scope_selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference">ResourceQuotaV1SpecScopeSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.hardInput">hard_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.scopeSelectorInput">scope_selector_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelector">ResourceQuotaV1SpecScopeSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.hard">hard</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec">ResourceQuotaV1Spec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scope_selector`<sup>Required</sup> <a name="scope_selector" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.scopeSelector"></a>

```python
scope_selector: ResourceQuotaV1SpecScopeSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference">ResourceQuotaV1SpecScopeSelectorOutputReference</a>

---

##### `hard_input`<sup>Optional</sup> <a name="hard_input" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.hardInput"></a>

```python
hard_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `scope_selector_input`<sup>Optional</sup> <a name="scope_selector_input" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.scopeSelectorInput"></a>

```python
scope_selector_input: ResourceQuotaV1SpecScopeSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelector">ResourceQuotaV1SpecScopeSelector</a>

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hard`<sup>Required</sup> <a name="hard" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.hard"></a>

```python
hard: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.internalValue"></a>

```python
internal_value: ResourceQuotaV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec">ResourceQuotaV1Spec</a>

---


### ResourceQuotaV1SpecScopeSelectorMatchExpressionList <a name="ResourceQuotaV1SpecScopeSelectorMatchExpressionList" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota_v1

resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression">ResourceQuotaV1SpecScopeSelectorMatchExpression</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ResourceQuotaV1SpecScopeSelectorMatchExpression]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression">ResourceQuotaV1SpecScopeSelectorMatchExpression</a>]]

---


### ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference <a name="ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota_v1

resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_values` <a name="reset_values" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.scopeNameInput">scope_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.scopeName">scope_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression">ResourceQuotaV1SpecScopeSelectorMatchExpression</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `scope_name_input`<sup>Optional</sup> <a name="scope_name_input" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.scopeNameInput"></a>

```python
scope_name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `scope_name`<sup>Required</sup> <a name="scope_name" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.scopeName"></a>

```python
scope_name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ResourceQuotaV1SpecScopeSelectorMatchExpression]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression">ResourceQuotaV1SpecScopeSelectorMatchExpression</a>]

---


### ResourceQuotaV1SpecScopeSelectorOutputReference <a name="ResourceQuotaV1SpecScopeSelectorOutputReference" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota_v1

resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.putMatchExpression">put_match_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.resetMatchExpression">reset_match_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match_expression` <a name="put_match_expression" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.putMatchExpression"></a>

```python
def put_match_expression(
  value: typing.Union[IResolvable, typing.List[ResourceQuotaV1SpecScopeSelectorMatchExpression]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.putMatchExpression.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression">ResourceQuotaV1SpecScopeSelectorMatchExpression</a>]]

---

##### `reset_match_expression` <a name="reset_match_expression" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.resetMatchExpression"></a>

```python
def reset_match_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.property.matchExpression">match_expression</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList">ResourceQuotaV1SpecScopeSelectorMatchExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.property.matchExpressionInput">match_expression_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression">ResourceQuotaV1SpecScopeSelectorMatchExpression</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelector">ResourceQuotaV1SpecScopeSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_expression`<sup>Required</sup> <a name="match_expression" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.property.matchExpression"></a>

```python
match_expression: ResourceQuotaV1SpecScopeSelectorMatchExpressionList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList">ResourceQuotaV1SpecScopeSelectorMatchExpressionList</a>

---

##### `match_expression_input`<sup>Optional</sup> <a name="match_expression_input" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.property.matchExpressionInput"></a>

```python
match_expression_input: typing.Union[IResolvable, typing.List[ResourceQuotaV1SpecScopeSelectorMatchExpression]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression">ResourceQuotaV1SpecScopeSelectorMatchExpression</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.property.internalValue"></a>

```python
internal_value: ResourceQuotaV1SpecScopeSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelector">ResourceQuotaV1SpecScopeSelector</a>

---


### ResourceQuotaV1TimeoutsOutputReference <a name="ResourceQuotaV1TimeoutsOutputReference" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota_v1

resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts">ResourceQuotaV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ResourceQuotaV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts">ResourceQuotaV1Timeouts</a>]

---



