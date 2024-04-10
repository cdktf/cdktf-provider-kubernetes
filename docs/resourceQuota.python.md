# `resourceQuota` Submodule <a name="`resourceQuota` Submodule" id="@cdktf/provider-kubernetes.resourceQuota"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceQuota <a name="ResourceQuota" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota kubernetes_resource_quota}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota

resourceQuota.ResourceQuota(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: ResourceQuotaMetadata,
  id: str = None,
  spec: ResourceQuotaSpec = None,
  timeouts: ResourceQuotaTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata">ResourceQuotaMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#id ResourceQuota#id}. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec">ResourceQuotaSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts">ResourceQuotaTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata">ResourceQuotaMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#metadata ResourceQuota#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#id ResourceQuota#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec">ResourceQuotaSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#spec ResourceQuota#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts">ResourceQuotaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#timeouts ResourceQuota#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.resetSpec">reset_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putMetadata"></a>

```python
def put_metadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  namespace: str = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putMetadata.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the resource quota that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#annotations ResourceQuota#annotations}

---

###### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putMetadata.parameter.generateName"></a>

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#generate_name ResourceQuota#generate_name}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the resource quota.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#labels ResourceQuota#labels}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putMetadata.parameter.name"></a>

- *Type:* str

Name of the resource quota, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#name ResourceQuota#name}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putMetadata.parameter.namespace"></a>

- *Type:* str

Namespace defines the space within which name of the resource quota must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#namespace ResourceQuota#namespace}

---

##### `put_spec` <a name="put_spec" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putSpec"></a>

```python
def put_spec(
  hard: typing.Mapping[str] = None,
  scopes: typing.List[str] = None,
  scope_selector: ResourceQuotaSpecScopeSelector = None
) -> None
```

###### `hard`<sup>Optional</sup> <a name="hard" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putSpec.parameter.hard"></a>

- *Type:* typing.Mapping[str]

The set of desired hard limits for each named resource. More info: http://releases.k8s.io/HEAD/docs/design/admission_control_resource_quota.md#admissioncontrol-plugin-resourcequota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#hard ResourceQuota#hard}

---

###### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putSpec.parameter.scopes"></a>

- *Type:* typing.List[str]

A collection of filters that must match each object tracked by a quota.

If not specified, the quota matches all objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#scopes ResourceQuota#scopes}

---

###### `scope_selector`<sup>Optional</sup> <a name="scope_selector" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putSpec.parameter.scopeSelector"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector">ResourceQuotaSpecScopeSelector</a>

scope_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#scope_selector ResourceQuota#scope_selector}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#create ResourceQuota#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#update ResourceQuota#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_spec` <a name="reset_spec" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.resetSpec"></a>

```python
def reset_spec() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ResourceQuota resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota

resourceQuota.ResourceQuota.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota

resourceQuota.ResourceQuota.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota

resourceQuota.ResourceQuota.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota

resourceQuota.ResourceQuota.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ResourceQuota resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ResourceQuota to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ResourceQuota that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ResourceQuota to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference">ResourceQuotaMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference">ResourceQuotaSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference">ResourceQuotaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata">ResourceQuotaMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.specInput">spec_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec">ResourceQuotaSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts">ResourceQuotaTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.metadata"></a>

```python
metadata: ResourceQuotaMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference">ResourceQuotaMetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.spec"></a>

```python
spec: ResourceQuotaSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference">ResourceQuotaSpecOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.timeouts"></a>

```python
timeouts: ResourceQuotaTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference">ResourceQuotaTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.metadataInput"></a>

```python
metadata_input: ResourceQuotaMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata">ResourceQuotaMetadata</a>

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.specInput"></a>

```python
spec_input: ResourceQuotaSpec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec">ResourceQuotaSpec</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ResourceQuotaTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts">ResourceQuotaTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceQuotaConfig <a name="ResourceQuotaConfig" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota

resourceQuota.ResourceQuotaConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: ResourceQuotaMetadata,
  id: str = None,
  spec: ResourceQuotaSpec = None,
  timeouts: ResourceQuotaTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata">ResourceQuotaMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#id ResourceQuota#id}. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec">ResourceQuotaSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts">ResourceQuotaTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.metadata"></a>

```python
metadata: ResourceQuotaMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata">ResourceQuotaMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#metadata ResourceQuota#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#id ResourceQuota#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.spec"></a>

```python
spec: ResourceQuotaSpec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec">ResourceQuotaSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#spec ResourceQuota#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.timeouts"></a>

```python
timeouts: ResourceQuotaTimeouts
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts">ResourceQuotaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#timeouts ResourceQuota#timeouts}

---

### ResourceQuotaMetadata <a name="ResourceQuotaMetadata" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota

resourceQuota.ResourceQuotaMetadata(
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
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | An unstructured key value map stored with the resource quota that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.generateName">generate_name</a></code> | <code>str</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the resource quota. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.name">name</a></code> | <code>str</code> | Name of the resource quota, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.namespace">namespace</a></code> | <code>str</code> | Namespace defines the space within which name of the resource quota must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the resource quota that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#annotations ResourceQuota#annotations}

---

##### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#generate_name ResourceQuota#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the resource quota.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#labels ResourceQuota#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource quota, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#name ResourceQuota#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace defines the space within which name of the resource quota must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#namespace ResourceQuota#namespace}

---

### ResourceQuotaSpec <a name="ResourceQuotaSpec" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota

resourceQuota.ResourceQuotaSpec(
  hard: typing.Mapping[str] = None,
  scopes: typing.List[str] = None,
  scope_selector: ResourceQuotaSpecScopeSelector = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec.property.hard">hard</a></code> | <code>typing.Mapping[str]</code> | The set of desired hard limits for each named resource. More info: http://releases.k8s.io/HEAD/docs/design/admission_control_resource_quota.md#admissioncontrol-plugin-resourcequota. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | A collection of filters that must match each object tracked by a quota. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec.property.scopeSelector">scope_selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector">ResourceQuotaSpecScopeSelector</a></code> | scope_selector block. |

---

##### `hard`<sup>Optional</sup> <a name="hard" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec.property.hard"></a>

```python
hard: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The set of desired hard limits for each named resource. More info: http://releases.k8s.io/HEAD/docs/design/admission_control_resource_quota.md#admissioncontrol-plugin-resourcequota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#hard ResourceQuota#hard}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

A collection of filters that must match each object tracked by a quota.

If not specified, the quota matches all objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#scopes ResourceQuota#scopes}

---

##### `scope_selector`<sup>Optional</sup> <a name="scope_selector" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec.property.scopeSelector"></a>

```python
scope_selector: ResourceQuotaSpecScopeSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector">ResourceQuotaSpecScopeSelector</a>

scope_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#scope_selector ResourceQuota#scope_selector}

---

### ResourceQuotaSpecScopeSelector <a name="ResourceQuotaSpecScopeSelector" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota

resourceQuota.ResourceQuotaSpecScopeSelector(
  match_expression: typing.Union[IResolvable, typing.List[ResourceQuotaSpecScopeSelectorMatchExpression]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector.property.matchExpression">match_expression</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression">ResourceQuotaSpecScopeSelectorMatchExpression</a>]]</code> | match_expression block. |

---

##### `match_expression`<sup>Optional</sup> <a name="match_expression" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector.property.matchExpression"></a>

```python
match_expression: typing.Union[IResolvable, typing.List[ResourceQuotaSpecScopeSelectorMatchExpression]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression">ResourceQuotaSpecScopeSelectorMatchExpression</a>]]

match_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#match_expression ResourceQuota#match_expression}

---

### ResourceQuotaSpecScopeSelectorMatchExpression <a name="ResourceQuotaSpecScopeSelectorMatchExpression" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota

resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression(
  operator: str,
  scope_name: str,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression.property.operator">operator</a></code> | <code>str</code> | Represents a scope's relationship to a set of values. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression.property.scopeName">scope_name</a></code> | <code>str</code> | The name of the scope that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression.property.values">values</a></code> | <code>typing.List[str]</code> | A list of scope selector requirements by scope of the resources. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression.property.operator"></a>

```python
operator: str
```

- *Type:* str

Represents a scope's relationship to a set of values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#operator ResourceQuota#operator}

---

##### `scope_name`<sup>Required</sup> <a name="scope_name" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression.property.scopeName"></a>

```python
scope_name: str
```

- *Type:* str

The name of the scope that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#scope_name ResourceQuota#scope_name}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

A list of scope selector requirements by scope of the resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#values ResourceQuota#values}

---

### ResourceQuotaTimeouts <a name="ResourceQuotaTimeouts" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota

resourceQuota.ResourceQuotaTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#create ResourceQuota#create}. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#update ResourceQuota#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#create ResourceQuota#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#update ResourceQuota#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceQuotaMetadataOutputReference <a name="ResourceQuotaMetadataOutputReference" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota

resourceQuota.ResourceQuotaMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetGenerateName">reset_generate_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_generate_name` <a name="reset_generate_name" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetGenerateName"></a>

```python
def reset_generate_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.generateNameInput">generate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.generateName">generate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata">ResourceQuotaMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name_input`<sup>Optional</sup> <a name="generate_name_input" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.generateNameInput"></a>

```python
generate_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name`<sup>Required</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.internalValue"></a>

```python
internal_value: ResourceQuotaMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata">ResourceQuotaMetadata</a>

---


### ResourceQuotaSpecOutputReference <a name="ResourceQuotaSpecOutputReference" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota

resourceQuota.ResourceQuotaSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.putScopeSelector">put_scope_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resetHard">reset_hard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resetScopeSelector">reset_scope_selector</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_scope_selector` <a name="put_scope_selector" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.putScopeSelector"></a>

```python
def put_scope_selector(
  match_expression: typing.Union[IResolvable, typing.List[ResourceQuotaSpecScopeSelectorMatchExpression]] = None
) -> None
```

###### `match_expression`<sup>Optional</sup> <a name="match_expression" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.putScopeSelector.parameter.matchExpression"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression">ResourceQuotaSpecScopeSelectorMatchExpression</a>]]

match_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota#match_expression ResourceQuota#match_expression}

---

##### `reset_hard` <a name="reset_hard" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resetHard"></a>

```python
def reset_hard() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```

##### `reset_scope_selector` <a name="reset_scope_selector" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resetScopeSelector"></a>

```python
def reset_scope_selector() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.scopeSelector">scope_selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference">ResourceQuotaSpecScopeSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.hardInput">hard_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.scopeSelectorInput">scope_selector_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector">ResourceQuotaSpecScopeSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.hard">hard</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec">ResourceQuotaSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scope_selector`<sup>Required</sup> <a name="scope_selector" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.scopeSelector"></a>

```python
scope_selector: ResourceQuotaSpecScopeSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference">ResourceQuotaSpecScopeSelectorOutputReference</a>

---

##### `hard_input`<sup>Optional</sup> <a name="hard_input" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.hardInput"></a>

```python
hard_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `scope_selector_input`<sup>Optional</sup> <a name="scope_selector_input" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.scopeSelectorInput"></a>

```python
scope_selector_input: ResourceQuotaSpecScopeSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector">ResourceQuotaSpecScopeSelector</a>

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hard`<sup>Required</sup> <a name="hard" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.hard"></a>

```python
hard: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.internalValue"></a>

```python
internal_value: ResourceQuotaSpec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec">ResourceQuotaSpec</a>

---


### ResourceQuotaSpecScopeSelectorMatchExpressionList <a name="ResourceQuotaSpecScopeSelectorMatchExpressionList" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota

resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression">ResourceQuotaSpecScopeSelectorMatchExpression</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ResourceQuotaSpecScopeSelectorMatchExpression]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression">ResourceQuotaSpecScopeSelectorMatchExpression</a>]]

---


### ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference <a name="ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota

resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_values` <a name="reset_values" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.scopeNameInput">scope_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.scopeName">scope_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression">ResourceQuotaSpecScopeSelectorMatchExpression</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `scope_name_input`<sup>Optional</sup> <a name="scope_name_input" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.scopeNameInput"></a>

```python
scope_name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `scope_name`<sup>Required</sup> <a name="scope_name" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.scopeName"></a>

```python
scope_name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ResourceQuotaSpecScopeSelectorMatchExpression]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression">ResourceQuotaSpecScopeSelectorMatchExpression</a>]

---


### ResourceQuotaSpecScopeSelectorOutputReference <a name="ResourceQuotaSpecScopeSelectorOutputReference" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota

resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.putMatchExpression">put_match_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.resetMatchExpression">reset_match_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match_expression` <a name="put_match_expression" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.putMatchExpression"></a>

```python
def put_match_expression(
  value: typing.Union[IResolvable, typing.List[ResourceQuotaSpecScopeSelectorMatchExpression]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.putMatchExpression.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression">ResourceQuotaSpecScopeSelectorMatchExpression</a>]]

---

##### `reset_match_expression` <a name="reset_match_expression" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.resetMatchExpression"></a>

```python
def reset_match_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.matchExpression">match_expression</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList">ResourceQuotaSpecScopeSelectorMatchExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.matchExpressionInput">match_expression_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression">ResourceQuotaSpecScopeSelectorMatchExpression</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector">ResourceQuotaSpecScopeSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_expression`<sup>Required</sup> <a name="match_expression" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.matchExpression"></a>

```python
match_expression: ResourceQuotaSpecScopeSelectorMatchExpressionList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList">ResourceQuotaSpecScopeSelectorMatchExpressionList</a>

---

##### `match_expression_input`<sup>Optional</sup> <a name="match_expression_input" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.matchExpressionInput"></a>

```python
match_expression_input: typing.Union[IResolvable, typing.List[ResourceQuotaSpecScopeSelectorMatchExpression]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression">ResourceQuotaSpecScopeSelectorMatchExpression</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.internalValue"></a>

```python
internal_value: ResourceQuotaSpecScopeSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector">ResourceQuotaSpecScopeSelector</a>

---


### ResourceQuotaTimeoutsOutputReference <a name="ResourceQuotaTimeoutsOutputReference" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import resource_quota

resourceQuota.ResourceQuotaTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts">ResourceQuotaTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ResourceQuotaTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts">ResourceQuotaTimeouts</a>]

---



