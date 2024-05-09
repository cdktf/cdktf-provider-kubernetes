# `serviceV1` Submodule <a name="`serviceV1` Submodule" id="@cdktf/provider-kubernetes.serviceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceV1 <a name="ServiceV1" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1 kubernetes_service_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: ServiceV1Metadata,
  spec: ServiceV1Spec,
  id: str = None,
  timeouts: ServiceV1Timeouts = None,
  wait_for_load_balancer: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#id ServiceV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.waitForLoadBalancer">wait_for_load_balancer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#metadata ServiceV1#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#spec ServiceV1#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#id ServiceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#timeouts ServiceV1#timeouts}

---

##### `wait_for_load_balancer`<sup>Optional</sup> <a name="wait_for_load_balancer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.waitForLoadBalancer"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#wait_for_load_balancer ServiceV1#wait_for_load_balancer}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetWaitForLoadBalancer">reset_wait_for_load_balancer</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putMetadata"></a>

```python
def put_metadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  namespace: str = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putMetadata.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the service that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#annotations ServiceV1#annotations}

---

###### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putMetadata.parameter.generateName"></a>

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#generate_name ServiceV1#generate_name}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the service.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#labels ServiceV1#labels}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putMetadata.parameter.name"></a>

- *Type:* str

Name of the service, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#name ServiceV1#name}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putMetadata.parameter.namespace"></a>

- *Type:* str

Namespace defines the space within which name of the service must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#namespace ServiceV1#namespace}

---

##### `put_spec` <a name="put_spec" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec"></a>

```python
def put_spec(
  allocate_load_balancer_node_ports: typing.Union[bool, IResolvable] = None,
  cluster_ip: str = None,
  cluster_ips: typing.List[str] = None,
  external_ips: typing.List[str] = None,
  external_name: str = None,
  external_traffic_policy: str = None,
  health_check_node_port: typing.Union[int, float] = None,
  internal_traffic_policy: str = None,
  ip_families: typing.List[str] = None,
  ip_family_policy: str = None,
  load_balancer_class: str = None,
  load_balancer_ip: str = None,
  load_balancer_source_ranges: typing.List[str] = None,
  port: typing.Union[IResolvable, typing.List[ServiceV1SpecPort]] = None,
  publish_not_ready_addresses: typing.Union[bool, IResolvable] = None,
  selector: typing.Mapping[str] = None,
  session_affinity: str = None,
  session_affinity_config: ServiceV1SpecSessionAffinityConfig = None,
  type: str = None
) -> None
```

###### `allocate_load_balancer_node_ports`<sup>Optional</sup> <a name="allocate_load_balancer_node_ports" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec.parameter.allocateLoadBalancerNodePorts"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines if `NodePorts` will be automatically allocated for services with type `LoadBalancer`.

It may be set to `false` if the cluster load-balancer does not rely on `NodePorts`.  If the caller requests specific `NodePorts` (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type `LoadBalancer`. Default is `true`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#load-balancer-nodeport-allocation

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#allocate_load_balancer_node_ports ServiceV1#allocate_load_balancer_node_ports}

---

###### `cluster_ip`<sup>Optional</sup> <a name="cluster_ip" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec.parameter.clusterIp"></a>

- *Type:* str

The IP address of the service.

It is usually assigned randomly by the master. If an address is specified manually and is not in use by others, it will be allocated to the service; otherwise, creation of the service will fail. `None` can be specified for headless services when proxying is not required. Ignored if type is `ExternalName`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#cluster_ip ServiceV1#cluster_ip}

---

###### `cluster_ips`<sup>Optional</sup> <a name="cluster_ips" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec.parameter.clusterIps"></a>

- *Type:* typing.List[str]

List of IP addresses assigned to this service, and are usually assigned randomly.

If an address is specified manually and is not in use by others, it will be allocated to the service; otherwise creation of the service will fail. If this field is not specified, it will be initialized from the `clusterIP` field. If this field is specified, clients must ensure that `clusterIPs[0]` and `clusterIP` have the same value. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#cluster_ips ServiceV1#cluster_ips}

---

###### `external_ips`<sup>Optional</sup> <a name="external_ips" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec.parameter.externalIps"></a>

- *Type:* typing.List[str]

A list of IP addresses for which nodes in the cluster will also accept traffic for this service.

These IPs are not managed by Kubernetes. The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#external_ips ServiceV1#external_ips}

---

###### `external_name`<sup>Optional</sup> <a name="external_name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec.parameter.externalName"></a>

- *Type:* str

The external reference that kubedns or equivalent will return as a CNAME record for this service.

No proxying will be involved. Must be a valid DNS name and requires `type` to be `ExternalName`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#external_name ServiceV1#external_name}

---

###### `external_traffic_policy`<sup>Optional</sup> <a name="external_traffic_policy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec.parameter.externalTrafficPolicy"></a>

- *Type:* str

Denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints.

`Local` preserves the client source IP and avoids a second hop for LoadBalancer and Nodeport type services, but risks potentially imbalanced traffic spreading. `Cluster` obscures the client source IP and may cause a second hop to another node, but should have good overall load-spreading. More info: https://kubernetes.io/docs/tutorials/services/source-ip/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#external_traffic_policy ServiceV1#external_traffic_policy}

---

###### `health_check_node_port`<sup>Optional</sup> <a name="health_check_node_port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec.parameter.healthCheckNodePort"></a>

- *Type:* typing.Union[int, float]

Specifies the Healthcheck NodePort for the service.

Only effects when type is set to `LoadBalancer` and external_traffic_policy is set to `Local`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#health_check_node_port ServiceV1#health_check_node_port}

---

###### `internal_traffic_policy`<sup>Optional</sup> <a name="internal_traffic_policy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec.parameter.internalTrafficPolicy"></a>

- *Type:* str

Specifies if the cluster internal traffic should be routed to all endpoints or node-local endpoints only.

`Cluster` routes internal traffic to a Service to all endpoints. `Local` routes traffic to node-local endpoints only, traffic is dropped if no node-local endpoints are ready. The default value is `Cluster`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#internal_traffic_policy ServiceV1#internal_traffic_policy}

---

###### `ip_families`<sup>Optional</sup> <a name="ip_families" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec.parameter.ipFamilies"></a>

- *Type:* typing.List[str]

IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#ip_families ServiceV1#ip_families}

---

###### `ip_family_policy`<sup>Optional</sup> <a name="ip_family_policy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec.parameter.ipFamilyPolicy"></a>

- *Type:* str

IPFamilyPolicy represents the dual-stack-ness requested or required by this Service.

If there is no value provided, then this field will be set to SingleStack. Services can be 'SingleStack' (a single IP family), 'PreferDualStack' (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or 'RequireDualStack' (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#ip_family_policy ServiceV1#ip_family_policy}

---

###### `load_balancer_class`<sup>Optional</sup> <a name="load_balancer_class" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec.parameter.loadBalancerClass"></a>

- *Type:* str

The class of the load balancer implementation this Service belongs to.

If specified, the value of this field must be a label-style identifier, with an optional prefix. This field can only be set when the Service type is `LoadBalancer`. If not set, the default load balancer implementation is used. This field can only be set when creating or updating a Service to type `LoadBalancer`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#load-balancer-class

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#load_balancer_class ServiceV1#load_balancer_class}

---

###### `load_balancer_ip`<sup>Optional</sup> <a name="load_balancer_ip" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec.parameter.loadBalancerIp"></a>

- *Type:* str

Only applies to `type = LoadBalancer`.

LoadBalancer will get created with the IP specified in this field. This feature depends on whether the underlying cloud-provider supports specifying this field when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#load_balancer_ip ServiceV1#load_balancer_ip}

---

###### `load_balancer_source_ranges`<sup>Optional</sup> <a name="load_balancer_source_ranges" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec.parameter.loadBalancerSourceRanges"></a>

- *Type:* typing.List[str]

If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs.

This field will be ignored if the cloud-provider does not support the feature. More info: http://kubernetes.io/docs/user-guide/services-firewalls

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#load_balancer_source_ranges ServiceV1#load_balancer_source_ranges}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec.parameter.port"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a>]]

port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#port ServiceV1#port}

---

###### `publish_not_ready_addresses`<sup>Optional</sup> <a name="publish_not_ready_addresses" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec.parameter.publishNotReadyAddresses"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, indicates that DNS implementations must publish the `notReadyAddresses` of subsets for the Endpoints associated with the Service.

The default value is `false`. The primary use case for setting this field is to use a StatefulSet's Headless Service to propagate `SRV` records for its Pods without respect to their readiness for purpose of peer discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#publish_not_ready_addresses ServiceV1#publish_not_ready_addresses}

---

###### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec.parameter.selector"></a>

- *Type:* typing.Mapping[str]

Route service traffic to pods with label keys and values matching this selector.

Only applies to types `ClusterIP`, `NodePort`, and `LoadBalancer`. More info: https://kubernetes.io/docs/concepts/services-networking/service/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#selector ServiceV1#selector}

---

###### `session_affinity`<sup>Optional</sup> <a name="session_affinity" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec.parameter.sessionAffinity"></a>

- *Type:* str

Used to maintain session affinity. Supports `ClientIP` and `None`. Defaults to `None`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#session_affinity ServiceV1#session_affinity}

---

###### `session_affinity_config`<sup>Optional</sup> <a name="session_affinity_config" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec.parameter.sessionAffinityConfig"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a>

session_affinity_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#session_affinity_config ServiceV1#session_affinity_config}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec.parameter.type"></a>

- *Type:* str

Determines how the service is exposed.

Defaults to `ClusterIP`. Valid options are `ExternalName`, `ClusterIP`, `NodePort`, and `LoadBalancer`. `ExternalName` maps to the specified `external_name`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#type ServiceV1#type}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#create ServiceV1#create}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_wait_for_load_balancer` <a name="reset_wait_for_load_balancer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetWaitForLoadBalancer"></a>

```python
def reset_wait_for_load_balancer() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServiceV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServiceV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServiceV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServiceV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference">ServiceV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference">ServiceV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.status">status</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList">ServiceV1StatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference">ServiceV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.specInput">spec_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.waitForLoadBalancerInput">wait_for_load_balancer_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.waitForLoadBalancer">wait_for_load_balancer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.metadata"></a>

```python
metadata: ServiceV1MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference">ServiceV1MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.spec"></a>

```python
spec: ServiceV1SpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference">ServiceV1SpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.status"></a>

```python
status: ServiceV1StatusList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList">ServiceV1StatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.timeouts"></a>

```python
timeouts: ServiceV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference">ServiceV1TimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.metadataInput"></a>

```python
metadata_input: ServiceV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a>

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.specInput"></a>

```python
spec_input: ServiceV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ServiceV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a>]

---

##### `wait_for_load_balancer_input`<sup>Optional</sup> <a name="wait_for_load_balancer_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.waitForLoadBalancerInput"></a>

```python
wait_for_load_balancer_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `wait_for_load_balancer`<sup>Required</sup> <a name="wait_for_load_balancer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.waitForLoadBalancer"></a>

```python
wait_for_load_balancer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceV1Config <a name="ServiceV1Config" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: ServiceV1Metadata,
  spec: ServiceV1Spec,
  id: str = None,
  timeouts: ServiceV1Timeouts = None,
  wait_for_load_balancer: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#id ServiceV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.waitForLoadBalancer">wait_for_load_balancer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.metadata"></a>

```python
metadata: ServiceV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#metadata ServiceV1#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.spec"></a>

```python
spec: ServiceV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#spec ServiceV1#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#id ServiceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.timeouts"></a>

```python
timeouts: ServiceV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#timeouts ServiceV1#timeouts}

---

##### `wait_for_load_balancer`<sup>Optional</sup> <a name="wait_for_load_balancer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.waitForLoadBalancer"></a>

```python
wait_for_load_balancer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#wait_for_load_balancer ServiceV1#wait_for_load_balancer}

---

### ServiceV1Metadata <a name="ServiceV1Metadata" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1Metadata(
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
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | An unstructured key value map stored with the service that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.generateName">generate_name</a></code> | <code>str</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.name">name</a></code> | <code>str</code> | Name of the service, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.namespace">namespace</a></code> | <code>str</code> | Namespace defines the space within which name of the service must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the service that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#annotations ServiceV1#annotations}

---

##### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#generate_name ServiceV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the service.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#labels ServiceV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the service, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#name ServiceV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace defines the space within which name of the service must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#namespace ServiceV1#namespace}

---

### ServiceV1Spec <a name="ServiceV1Spec" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1Spec(
  allocate_load_balancer_node_ports: typing.Union[bool, IResolvable] = None,
  cluster_ip: str = None,
  cluster_ips: typing.List[str] = None,
  external_ips: typing.List[str] = None,
  external_name: str = None,
  external_traffic_policy: str = None,
  health_check_node_port: typing.Union[int, float] = None,
  internal_traffic_policy: str = None,
  ip_families: typing.List[str] = None,
  ip_family_policy: str = None,
  load_balancer_class: str = None,
  load_balancer_ip: str = None,
  load_balancer_source_ranges: typing.List[str] = None,
  port: typing.Union[IResolvable, typing.List[ServiceV1SpecPort]] = None,
  publish_not_ready_addresses: typing.Union[bool, IResolvable] = None,
  selector: typing.Mapping[str] = None,
  session_affinity: str = None,
  session_affinity_config: ServiceV1SpecSessionAffinityConfig = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.allocateLoadBalancerNodePorts">allocate_load_balancer_node_ports</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines if `NodePorts` will be automatically allocated for services with type `LoadBalancer`. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.clusterIp">cluster_ip</a></code> | <code>str</code> | The IP address of the service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.clusterIps">cluster_ips</a></code> | <code>typing.List[str]</code> | List of IP addresses assigned to this service, and are usually assigned randomly. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.externalIps">external_ips</a></code> | <code>typing.List[str]</code> | A list of IP addresses for which nodes in the cluster will also accept traffic for this service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.externalName">external_name</a></code> | <code>str</code> | The external reference that kubedns or equivalent will return as a CNAME record for this service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.externalTrafficPolicy">external_traffic_policy</a></code> | <code>str</code> | Denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.healthCheckNodePort">health_check_node_port</a></code> | <code>typing.Union[int, float]</code> | Specifies the Healthcheck NodePort for the service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.internalTrafficPolicy">internal_traffic_policy</a></code> | <code>str</code> | Specifies if the cluster internal traffic should be routed to all endpoints or node-local endpoints only. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.ipFamilies">ip_families</a></code> | <code>typing.List[str]</code> | IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.ipFamilyPolicy">ip_family_policy</a></code> | <code>str</code> | IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.loadBalancerClass">load_balancer_class</a></code> | <code>str</code> | The class of the load balancer implementation this Service belongs to. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.loadBalancerIp">load_balancer_ip</a></code> | <code>str</code> | Only applies to `type = LoadBalancer`. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.loadBalancerSourceRanges">load_balancer_source_ranges</a></code> | <code>typing.List[str]</code> | If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.port">port</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a>]]</code> | port block. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.publishNotReadyAddresses">publish_not_ready_addresses</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, indicates that DNS implementations must publish the `notReadyAddresses` of subsets for the Endpoints associated with the Service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.selector">selector</a></code> | <code>typing.Mapping[str]</code> | Route service traffic to pods with label keys and values matching this selector. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.sessionAffinity">session_affinity</a></code> | <code>str</code> | Used to maintain session affinity. Supports `ClientIP` and `None`. Defaults to `None`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.sessionAffinityConfig">session_affinity_config</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a></code> | session_affinity_config block. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.type">type</a></code> | <code>str</code> | Determines how the service is exposed. |

---

##### `allocate_load_balancer_node_ports`<sup>Optional</sup> <a name="allocate_load_balancer_node_ports" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.allocateLoadBalancerNodePorts"></a>

```python
allocate_load_balancer_node_ports: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines if `NodePorts` will be automatically allocated for services with type `LoadBalancer`.

It may be set to `false` if the cluster load-balancer does not rely on `NodePorts`.  If the caller requests specific `NodePorts` (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type `LoadBalancer`. Default is `true`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#load-balancer-nodeport-allocation

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#allocate_load_balancer_node_ports ServiceV1#allocate_load_balancer_node_ports}

---

##### `cluster_ip`<sup>Optional</sup> <a name="cluster_ip" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.clusterIp"></a>

```python
cluster_ip: str
```

- *Type:* str

The IP address of the service.

It is usually assigned randomly by the master. If an address is specified manually and is not in use by others, it will be allocated to the service; otherwise, creation of the service will fail. `None` can be specified for headless services when proxying is not required. Ignored if type is `ExternalName`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#cluster_ip ServiceV1#cluster_ip}

---

##### `cluster_ips`<sup>Optional</sup> <a name="cluster_ips" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.clusterIps"></a>

```python
cluster_ips: typing.List[str]
```

- *Type:* typing.List[str]

List of IP addresses assigned to this service, and are usually assigned randomly.

If an address is specified manually and is not in use by others, it will be allocated to the service; otherwise creation of the service will fail. If this field is not specified, it will be initialized from the `clusterIP` field. If this field is specified, clients must ensure that `clusterIPs[0]` and `clusterIP` have the same value. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#cluster_ips ServiceV1#cluster_ips}

---

##### `external_ips`<sup>Optional</sup> <a name="external_ips" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.externalIps"></a>

```python
external_ips: typing.List[str]
```

- *Type:* typing.List[str]

A list of IP addresses for which nodes in the cluster will also accept traffic for this service.

These IPs are not managed by Kubernetes. The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#external_ips ServiceV1#external_ips}

---

##### `external_name`<sup>Optional</sup> <a name="external_name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.externalName"></a>

```python
external_name: str
```

- *Type:* str

The external reference that kubedns or equivalent will return as a CNAME record for this service.

No proxying will be involved. Must be a valid DNS name and requires `type` to be `ExternalName`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#external_name ServiceV1#external_name}

---

##### `external_traffic_policy`<sup>Optional</sup> <a name="external_traffic_policy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.externalTrafficPolicy"></a>

```python
external_traffic_policy: str
```

- *Type:* str

Denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints.

`Local` preserves the client source IP and avoids a second hop for LoadBalancer and Nodeport type services, but risks potentially imbalanced traffic spreading. `Cluster` obscures the client source IP and may cause a second hop to another node, but should have good overall load-spreading. More info: https://kubernetes.io/docs/tutorials/services/source-ip/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#external_traffic_policy ServiceV1#external_traffic_policy}

---

##### `health_check_node_port`<sup>Optional</sup> <a name="health_check_node_port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.healthCheckNodePort"></a>

```python
health_check_node_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the Healthcheck NodePort for the service.

Only effects when type is set to `LoadBalancer` and external_traffic_policy is set to `Local`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#health_check_node_port ServiceV1#health_check_node_port}

---

##### `internal_traffic_policy`<sup>Optional</sup> <a name="internal_traffic_policy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.internalTrafficPolicy"></a>

```python
internal_traffic_policy: str
```

- *Type:* str

Specifies if the cluster internal traffic should be routed to all endpoints or node-local endpoints only.

`Cluster` routes internal traffic to a Service to all endpoints. `Local` routes traffic to node-local endpoints only, traffic is dropped if no node-local endpoints are ready. The default value is `Cluster`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#internal_traffic_policy ServiceV1#internal_traffic_policy}

---

##### `ip_families`<sup>Optional</sup> <a name="ip_families" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.ipFamilies"></a>

```python
ip_families: typing.List[str]
```

- *Type:* typing.List[str]

IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#ip_families ServiceV1#ip_families}

---

##### `ip_family_policy`<sup>Optional</sup> <a name="ip_family_policy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.ipFamilyPolicy"></a>

```python
ip_family_policy: str
```

- *Type:* str

IPFamilyPolicy represents the dual-stack-ness requested or required by this Service.

If there is no value provided, then this field will be set to SingleStack. Services can be 'SingleStack' (a single IP family), 'PreferDualStack' (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or 'RequireDualStack' (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#ip_family_policy ServiceV1#ip_family_policy}

---

##### `load_balancer_class`<sup>Optional</sup> <a name="load_balancer_class" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.loadBalancerClass"></a>

```python
load_balancer_class: str
```

- *Type:* str

The class of the load balancer implementation this Service belongs to.

If specified, the value of this field must be a label-style identifier, with an optional prefix. This field can only be set when the Service type is `LoadBalancer`. If not set, the default load balancer implementation is used. This field can only be set when creating or updating a Service to type `LoadBalancer`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#load-balancer-class

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#load_balancer_class ServiceV1#load_balancer_class}

---

##### `load_balancer_ip`<sup>Optional</sup> <a name="load_balancer_ip" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.loadBalancerIp"></a>

```python
load_balancer_ip: str
```

- *Type:* str

Only applies to `type = LoadBalancer`.

LoadBalancer will get created with the IP specified in this field. This feature depends on whether the underlying cloud-provider supports specifying this field when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#load_balancer_ip ServiceV1#load_balancer_ip}

---

##### `load_balancer_source_ranges`<sup>Optional</sup> <a name="load_balancer_source_ranges" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.loadBalancerSourceRanges"></a>

```python
load_balancer_source_ranges: typing.List[str]
```

- *Type:* typing.List[str]

If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs.

This field will be ignored if the cloud-provider does not support the feature. More info: http://kubernetes.io/docs/user-guide/services-firewalls

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#load_balancer_source_ranges ServiceV1#load_balancer_source_ranges}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.port"></a>

```python
port: typing.Union[IResolvable, typing.List[ServiceV1SpecPort]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a>]]

port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#port ServiceV1#port}

---

##### `publish_not_ready_addresses`<sup>Optional</sup> <a name="publish_not_ready_addresses" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.publishNotReadyAddresses"></a>

```python
publish_not_ready_addresses: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, indicates that DNS implementations must publish the `notReadyAddresses` of subsets for the Endpoints associated with the Service.

The default value is `false`. The primary use case for setting this field is to use a StatefulSet's Headless Service to propagate `SRV` records for its Pods without respect to their readiness for purpose of peer discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#publish_not_ready_addresses ServiceV1#publish_not_ready_addresses}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.selector"></a>

```python
selector: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Route service traffic to pods with label keys and values matching this selector.

Only applies to types `ClusterIP`, `NodePort`, and `LoadBalancer`. More info: https://kubernetes.io/docs/concepts/services-networking/service/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#selector ServiceV1#selector}

---

##### `session_affinity`<sup>Optional</sup> <a name="session_affinity" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.sessionAffinity"></a>

```python
session_affinity: str
```

- *Type:* str

Used to maintain session affinity. Supports `ClientIP` and `None`. Defaults to `None`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#session_affinity ServiceV1#session_affinity}

---

##### `session_affinity_config`<sup>Optional</sup> <a name="session_affinity_config" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.sessionAffinityConfig"></a>

```python
session_affinity_config: ServiceV1SpecSessionAffinityConfig
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a>

session_affinity_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#session_affinity_config ServiceV1#session_affinity_config}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.type"></a>

```python
type: str
```

- *Type:* str

Determines how the service is exposed.

Defaults to `ClusterIP`. Valid options are `ExternalName`, `ClusterIP`, `NodePort`, and `LoadBalancer`. `ExternalName` maps to the specified `external_name`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#type ServiceV1#type}

---

### ServiceV1SpecPort <a name="ServiceV1SpecPort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1SpecPort(
  port: typing.Union[int, float],
  app_protocol: str = None,
  name: str = None,
  node_port: typing.Union[int, float] = None,
  protocol: str = None,
  target_port: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port that will be exposed by this service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.appProtocol">app_protocol</a></code> | <code>str</code> | The application protocol for this port. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.name">name</a></code> | <code>str</code> | The name of this port within the service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.nodePort">node_port</a></code> | <code>typing.Union[int, float]</code> | The port on each node on which this service is exposed when `type` is `NodePort` or `LoadBalancer`. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.protocol">protocol</a></code> | <code>str</code> | The IP protocol for this port. Supports `TCP` and `UDP`. Default is `TCP`. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.targetPort">target_port</a></code> | <code>str</code> | Number or name of the port to access on the pods targeted by the service. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port that will be exposed by this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#port ServiceV1#port}

---

##### `app_protocol`<sup>Optional</sup> <a name="app_protocol" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.appProtocol"></a>

```python
app_protocol: str
```

- *Type:* str

The application protocol for this port.

This field follows standard Kubernetes label syntax. Un-prefixed names are reserved for IANA standard service names (as per RFC-6335 and http://www.iana.org/assignments/service-names). Non-standard protocols should use prefixed names such as mycompany.com/my-custom-protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#app_protocol ServiceV1#app_protocol}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.name"></a>

```python
name: str
```

- *Type:* str

The name of this port within the service.

All ports within the service must have unique names. Optional if only one ServicePort is defined on this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#name ServiceV1#name}

---

##### `node_port`<sup>Optional</sup> <a name="node_port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.nodePort"></a>

```python
node_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port on each node on which this service is exposed when `type` is `NodePort` or `LoadBalancer`.

Usually assigned by the system. If specified, it will be allocated to the service if unused or else creation of the service will fail. Default is to auto-allocate a port if the `type` of this service requires one. More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#node_port ServiceV1#node_port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The IP protocol for this port. Supports `TCP` and `UDP`. Default is `TCP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#protocol ServiceV1#protocol}

---

##### `target_port`<sup>Optional</sup> <a name="target_port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.targetPort"></a>

```python
target_port: str
```

- *Type:* str

Number or name of the port to access on the pods targeted by the service.

Number must be in the range 1 to 65535. This field is ignored for services with `cluster_ip = "None"`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#target_port ServiceV1#target_port}

---

### ServiceV1SpecSessionAffinityConfig <a name="ServiceV1SpecSessionAffinityConfig" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1SpecSessionAffinityConfig(
  client_ip: ServiceV1SpecSessionAffinityConfigClientIp = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig.property.clientIp">client_ip</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a></code> | client_ip block. |

---

##### `client_ip`<sup>Optional</sup> <a name="client_ip" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig.property.clientIp"></a>

```python
client_ip: ServiceV1SpecSessionAffinityConfigClientIp
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a>

client_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#client_ip ServiceV1#client_ip}

---

### ServiceV1SpecSessionAffinityConfigClientIp <a name="ServiceV1SpecSessionAffinityConfigClientIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1SpecSessionAffinityConfigClientIp(
  timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Specifies the seconds of `ClientIP` type session sticky time. |

---

##### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the seconds of `ClientIP` type session sticky time.

The value must be > 0 and <= 86400(for 1 day) if `ServiceAffinity` == `ClientIP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#timeout_seconds ServiceV1#timeout_seconds}

---

### ServiceV1Status <a name="ServiceV1Status" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Status"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Status.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1Status()
```


### ServiceV1StatusLoadBalancer <a name="ServiceV1StatusLoadBalancer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancer.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1StatusLoadBalancer()
```


### ServiceV1StatusLoadBalancerIngress <a name="ServiceV1StatusLoadBalancerIngress" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngress.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1StatusLoadBalancerIngress()
```


### ServiceV1Timeouts <a name="ServiceV1Timeouts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1Timeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#create ServiceV1#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#create ServiceV1#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceV1MetadataOutputReference <a name="ServiceV1MetadataOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1MetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetGenerateName">reset_generate_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_generate_name` <a name="reset_generate_name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetGenerateName"></a>

```python
def reset_generate_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.generateNameInput">generate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.generateName">generate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name_input`<sup>Optional</sup> <a name="generate_name_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.generateNameInput"></a>

```python
generate_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name`<sup>Required</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.internalValue"></a>

```python
internal_value: ServiceV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a>

---


### ServiceV1SpecOutputReference <a name="ServiceV1SpecOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1SpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.putPort">put_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.putSessionAffinityConfig">put_session_affinity_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetAllocateLoadBalancerNodePorts">reset_allocate_load_balancer_node_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetClusterIp">reset_cluster_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetClusterIps">reset_cluster_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetExternalIps">reset_external_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetExternalName">reset_external_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetExternalTrafficPolicy">reset_external_traffic_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetHealthCheckNodePort">reset_health_check_node_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetInternalTrafficPolicy">reset_internal_traffic_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetIpFamilies">reset_ip_families</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetIpFamilyPolicy">reset_ip_family_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetLoadBalancerClass">reset_load_balancer_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetLoadBalancerIp">reset_load_balancer_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetLoadBalancerSourceRanges">reset_load_balancer_source_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetPublishNotReadyAddresses">reset_publish_not_ready_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetSelector">reset_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetSessionAffinity">reset_session_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetSessionAffinityConfig">reset_session_affinity_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_port` <a name="put_port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.putPort"></a>

```python
def put_port(
  value: typing.Union[IResolvable, typing.List[ServiceV1SpecPort]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.putPort.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a>]]

---

##### `put_session_affinity_config` <a name="put_session_affinity_config" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.putSessionAffinityConfig"></a>

```python
def put_session_affinity_config(
  client_ip: ServiceV1SpecSessionAffinityConfigClientIp = None
) -> None
```

###### `client_ip`<sup>Optional</sup> <a name="client_ip" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.putSessionAffinityConfig.parameter.clientIp"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a>

client_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#client_ip ServiceV1#client_ip}

---

##### `reset_allocate_load_balancer_node_ports` <a name="reset_allocate_load_balancer_node_ports" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetAllocateLoadBalancerNodePorts"></a>

```python
def reset_allocate_load_balancer_node_ports() -> None
```

##### `reset_cluster_ip` <a name="reset_cluster_ip" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetClusterIp"></a>

```python
def reset_cluster_ip() -> None
```

##### `reset_cluster_ips` <a name="reset_cluster_ips" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetClusterIps"></a>

```python
def reset_cluster_ips() -> None
```

##### `reset_external_ips` <a name="reset_external_ips" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetExternalIps"></a>

```python
def reset_external_ips() -> None
```

##### `reset_external_name` <a name="reset_external_name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetExternalName"></a>

```python
def reset_external_name() -> None
```

##### `reset_external_traffic_policy` <a name="reset_external_traffic_policy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetExternalTrafficPolicy"></a>

```python
def reset_external_traffic_policy() -> None
```

##### `reset_health_check_node_port` <a name="reset_health_check_node_port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetHealthCheckNodePort"></a>

```python
def reset_health_check_node_port() -> None
```

##### `reset_internal_traffic_policy` <a name="reset_internal_traffic_policy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetInternalTrafficPolicy"></a>

```python
def reset_internal_traffic_policy() -> None
```

##### `reset_ip_families` <a name="reset_ip_families" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetIpFamilies"></a>

```python
def reset_ip_families() -> None
```

##### `reset_ip_family_policy` <a name="reset_ip_family_policy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetIpFamilyPolicy"></a>

```python
def reset_ip_family_policy() -> None
```

##### `reset_load_balancer_class` <a name="reset_load_balancer_class" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetLoadBalancerClass"></a>

```python
def reset_load_balancer_class() -> None
```

##### `reset_load_balancer_ip` <a name="reset_load_balancer_ip" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetLoadBalancerIp"></a>

```python
def reset_load_balancer_ip() -> None
```

##### `reset_load_balancer_source_ranges` <a name="reset_load_balancer_source_ranges" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetLoadBalancerSourceRanges"></a>

```python
def reset_load_balancer_source_ranges() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_publish_not_ready_addresses` <a name="reset_publish_not_ready_addresses" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetPublishNotReadyAddresses"></a>

```python
def reset_publish_not_ready_addresses() -> None
```

##### `reset_selector` <a name="reset_selector" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetSelector"></a>

```python
def reset_selector() -> None
```

##### `reset_session_affinity` <a name="reset_session_affinity" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetSessionAffinity"></a>

```python
def reset_session_affinity() -> None
```

##### `reset_session_affinity_config` <a name="reset_session_affinity_config" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetSessionAffinityConfig"></a>

```python
def reset_session_affinity_config() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.port">port</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList">ServiceV1SpecPortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinityConfig">session_affinity_config</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference">ServiceV1SpecSessionAffinityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.allocateLoadBalancerNodePortsInput">allocate_load_balancer_node_ports_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIpInput">cluster_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIpsInput">cluster_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalIpsInput">external_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalNameInput">external_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalTrafficPolicyInput">external_traffic_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.healthCheckNodePortInput">health_check_node_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.internalTrafficPolicyInput">internal_traffic_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamiliesInput">ip_families_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamilyPolicyInput">ip_family_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerClassInput">load_balancer_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerIpInput">load_balancer_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerSourceRangesInput">load_balancer_source_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.publishNotReadyAddressesInput">publish_not_ready_addresses_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.selectorInput">selector_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinityConfigInput">session_affinity_config_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinityInput">session_affinity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.allocateLoadBalancerNodePorts">allocate_load_balancer_node_ports</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIp">cluster_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIps">cluster_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalIps">external_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalName">external_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalTrafficPolicy">external_traffic_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.healthCheckNodePort">health_check_node_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.internalTrafficPolicy">internal_traffic_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamilies">ip_families</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamilyPolicy">ip_family_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerClass">load_balancer_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerIp">load_balancer_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerSourceRanges">load_balancer_source_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.publishNotReadyAddresses">publish_not_ready_addresses</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.selector">selector</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinity">session_affinity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.port"></a>

```python
port: ServiceV1SpecPortList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList">ServiceV1SpecPortList</a>

---

##### `session_affinity_config`<sup>Required</sup> <a name="session_affinity_config" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinityConfig"></a>

```python
session_affinity_config: ServiceV1SpecSessionAffinityConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference">ServiceV1SpecSessionAffinityConfigOutputReference</a>

---

##### `allocate_load_balancer_node_ports_input`<sup>Optional</sup> <a name="allocate_load_balancer_node_ports_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.allocateLoadBalancerNodePortsInput"></a>

```python
allocate_load_balancer_node_ports_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_ip_input`<sup>Optional</sup> <a name="cluster_ip_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIpInput"></a>

```python
cluster_ip_input: str
```

- *Type:* str

---

##### `cluster_ips_input`<sup>Optional</sup> <a name="cluster_ips_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIpsInput"></a>

```python
cluster_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_ips_input`<sup>Optional</sup> <a name="external_ips_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalIpsInput"></a>

```python
external_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_name_input`<sup>Optional</sup> <a name="external_name_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalNameInput"></a>

```python
external_name_input: str
```

- *Type:* str

---

##### `external_traffic_policy_input`<sup>Optional</sup> <a name="external_traffic_policy_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalTrafficPolicyInput"></a>

```python
external_traffic_policy_input: str
```

- *Type:* str

---

##### `health_check_node_port_input`<sup>Optional</sup> <a name="health_check_node_port_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.healthCheckNodePortInput"></a>

```python
health_check_node_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_traffic_policy_input`<sup>Optional</sup> <a name="internal_traffic_policy_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.internalTrafficPolicyInput"></a>

```python
internal_traffic_policy_input: str
```

- *Type:* str

---

##### `ip_families_input`<sup>Optional</sup> <a name="ip_families_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamiliesInput"></a>

```python
ip_families_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_family_policy_input`<sup>Optional</sup> <a name="ip_family_policy_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamilyPolicyInput"></a>

```python
ip_family_policy_input: str
```

- *Type:* str

---

##### `load_balancer_class_input`<sup>Optional</sup> <a name="load_balancer_class_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerClassInput"></a>

```python
load_balancer_class_input: str
```

- *Type:* str

---

##### `load_balancer_ip_input`<sup>Optional</sup> <a name="load_balancer_ip_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerIpInput"></a>

```python
load_balancer_ip_input: str
```

- *Type:* str

---

##### `load_balancer_source_ranges_input`<sup>Optional</sup> <a name="load_balancer_source_ranges_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerSourceRangesInput"></a>

```python
load_balancer_source_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.portInput"></a>

```python
port_input: typing.Union[IResolvable, typing.List[ServiceV1SpecPort]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a>]]

---

##### `publish_not_ready_addresses_input`<sup>Optional</sup> <a name="publish_not_ready_addresses_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.publishNotReadyAddressesInput"></a>

```python
publish_not_ready_addresses_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `selector_input`<sup>Optional</sup> <a name="selector_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.selectorInput"></a>

```python
selector_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `session_affinity_config_input`<sup>Optional</sup> <a name="session_affinity_config_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinityConfigInput"></a>

```python
session_affinity_config_input: ServiceV1SpecSessionAffinityConfig
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a>

---

##### `session_affinity_input`<sup>Optional</sup> <a name="session_affinity_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinityInput"></a>

```python
session_affinity_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `allocate_load_balancer_node_ports`<sup>Required</sup> <a name="allocate_load_balancer_node_ports" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.allocateLoadBalancerNodePorts"></a>

```python
allocate_load_balancer_node_ports: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_ip`<sup>Required</sup> <a name="cluster_ip" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIp"></a>

```python
cluster_ip: str
```

- *Type:* str

---

##### `cluster_ips`<sup>Required</sup> <a name="cluster_ips" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIps"></a>

```python
cluster_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_ips`<sup>Required</sup> <a name="external_ips" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalIps"></a>

```python
external_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_name`<sup>Required</sup> <a name="external_name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalName"></a>

```python
external_name: str
```

- *Type:* str

---

##### `external_traffic_policy`<sup>Required</sup> <a name="external_traffic_policy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalTrafficPolicy"></a>

```python
external_traffic_policy: str
```

- *Type:* str

---

##### `health_check_node_port`<sup>Required</sup> <a name="health_check_node_port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.healthCheckNodePort"></a>

```python
health_check_node_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_traffic_policy`<sup>Required</sup> <a name="internal_traffic_policy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.internalTrafficPolicy"></a>

```python
internal_traffic_policy: str
```

- *Type:* str

---

##### `ip_families`<sup>Required</sup> <a name="ip_families" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamilies"></a>

```python
ip_families: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_family_policy`<sup>Required</sup> <a name="ip_family_policy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamilyPolicy"></a>

```python
ip_family_policy: str
```

- *Type:* str

---

##### `load_balancer_class`<sup>Required</sup> <a name="load_balancer_class" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerClass"></a>

```python
load_balancer_class: str
```

- *Type:* str

---

##### `load_balancer_ip`<sup>Required</sup> <a name="load_balancer_ip" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerIp"></a>

```python
load_balancer_ip: str
```

- *Type:* str

---

##### `load_balancer_source_ranges`<sup>Required</sup> <a name="load_balancer_source_ranges" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerSourceRanges"></a>

```python
load_balancer_source_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `publish_not_ready_addresses`<sup>Required</sup> <a name="publish_not_ready_addresses" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.publishNotReadyAddresses"></a>

```python
publish_not_ready_addresses: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.selector"></a>

```python
selector: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `session_affinity`<sup>Required</sup> <a name="session_affinity" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinity"></a>

```python
session_affinity: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.internalValue"></a>

```python
internal_value: ServiceV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a>

---


### ServiceV1SpecPortList <a name="ServiceV1SpecPortList" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1SpecPortList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceV1SpecPortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceV1SpecPort]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a>]]

---


### ServiceV1SpecPortOutputReference <a name="ServiceV1SpecPortOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1SpecPortOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetAppProtocol">reset_app_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetNodePort">reset_node_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetTargetPort">reset_target_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_app_protocol` <a name="reset_app_protocol" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetAppProtocol"></a>

```python
def reset_app_protocol() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_node_port` <a name="reset_node_port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetNodePort"></a>

```python
def reset_node_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_target_port` <a name="reset_target_port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetTargetPort"></a>

```python
def reset_target_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.appProtocolInput">app_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.nodePortInput">node_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.targetPortInput">target_port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.appProtocol">app_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.nodePort">node_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.targetPort">target_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_protocol_input`<sup>Optional</sup> <a name="app_protocol_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.appProtocolInput"></a>

```python
app_protocol_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_port_input`<sup>Optional</sup> <a name="node_port_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.nodePortInput"></a>

```python
node_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `target_port_input`<sup>Optional</sup> <a name="target_port_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.targetPortInput"></a>

```python
target_port_input: str
```

- *Type:* str

---

##### `app_protocol`<sup>Required</sup> <a name="app_protocol" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.appProtocol"></a>

```python
app_protocol: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_port`<sup>Required</sup> <a name="node_port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.nodePort"></a>

```python
node_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `target_port`<sup>Required</sup> <a name="target_port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.targetPort"></a>

```python
target_port: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceV1SpecPort]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a>]

---


### ServiceV1SpecSessionAffinityConfigClientIpOutputReference <a name="ServiceV1SpecSessionAffinityConfigClientIpOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.resetTimeoutSeconds">reset_timeout_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_timeout_seconds` <a name="reset_timeout_seconds" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.resetTimeoutSeconds"></a>

```python
def reset_timeout_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.timeoutSecondsInput">timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `timeout_seconds_input`<sup>Optional</sup> <a name="timeout_seconds_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.timeoutSecondsInput"></a>

```python
timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.internalValue"></a>

```python
internal_value: ServiceV1SpecSessionAffinityConfigClientIp
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a>

---


### ServiceV1SpecSessionAffinityConfigOutputReference <a name="ServiceV1SpecSessionAffinityConfigOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.putClientIp">put_client_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.resetClientIp">reset_client_ip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_client_ip` <a name="put_client_ip" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.putClientIp"></a>

```python
def put_client_ip(
  timeout_seconds: typing.Union[int, float] = None
) -> None
```

###### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.putClientIp.parameter.timeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Specifies the seconds of `ClientIP` type session sticky time.

The value must be > 0 and <= 86400(for 1 day) if `ServiceAffinity` == `ClientIP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/service_v1#timeout_seconds ServiceV1#timeout_seconds}

---

##### `reset_client_ip` <a name="reset_client_ip" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.resetClientIp"></a>

```python
def reset_client_ip() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.clientIp">client_ip</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference">ServiceV1SpecSessionAffinityConfigClientIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.clientIpInput">client_ip_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_ip`<sup>Required</sup> <a name="client_ip" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.clientIp"></a>

```python
client_ip: ServiceV1SpecSessionAffinityConfigClientIpOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference">ServiceV1SpecSessionAffinityConfigClientIpOutputReference</a>

---

##### `client_ip_input`<sup>Optional</sup> <a name="client_ip_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.clientIpInput"></a>

```python
client_ip_input: ServiceV1SpecSessionAffinityConfigClientIp
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.internalValue"></a>

```python
internal_value: ServiceV1SpecSessionAffinityConfig
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a>

---


### ServiceV1StatusList <a name="ServiceV1StatusList" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1StatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceV1StatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ServiceV1StatusLoadBalancerIngressList <a name="ServiceV1StatusLoadBalancerIngressList" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1StatusLoadBalancerIngressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceV1StatusLoadBalancerIngressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ServiceV1StatusLoadBalancerIngressOutputReference <a name="ServiceV1StatusLoadBalancerIngressOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngress">ServiceV1StatusLoadBalancerIngress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.internalValue"></a>

```python
internal_value: ServiceV1StatusLoadBalancerIngress
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngress">ServiceV1StatusLoadBalancerIngress</a>

---


### ServiceV1StatusLoadBalancerList <a name="ServiceV1StatusLoadBalancerList" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1StatusLoadBalancerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceV1StatusLoadBalancerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ServiceV1StatusLoadBalancerOutputReference <a name="ServiceV1StatusLoadBalancerOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1StatusLoadBalancerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList">ServiceV1StatusLoadBalancerIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancer">ServiceV1StatusLoadBalancer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.ingress"></a>

```python
ingress: ServiceV1StatusLoadBalancerIngressList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList">ServiceV1StatusLoadBalancerIngressList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.internalValue"></a>

```python
internal_value: ServiceV1StatusLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancer">ServiceV1StatusLoadBalancer</a>

---


### ServiceV1StatusOutputReference <a name="ServiceV1StatusOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1StatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.loadBalancer">load_balancer</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList">ServiceV1StatusLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Status">ServiceV1Status</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `load_balancer`<sup>Required</sup> <a name="load_balancer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.loadBalancer"></a>

```python
load_balancer: ServiceV1StatusLoadBalancerList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList">ServiceV1StatusLoadBalancerList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.internalValue"></a>

```python
internal_value: ServiceV1Status
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Status">ServiceV1Status</a>

---


### ServiceV1TimeoutsOutputReference <a name="ServiceV1TimeoutsOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service_v1

serviceV1.ServiceV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a>]

---



