# `endpointSliceV1` Submodule <a name="`endpointSliceV1` Submodule" id="@cdktf/provider-kubernetes.endpointSliceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EndpointSliceV1 <a name="EndpointSliceV1" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1 kubernetes_endpoint_slice_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import endpoint_slice_v1

endpointSliceV1.EndpointSliceV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address_type: str,
  endpoint: typing.Union[IResolvable, typing.List[EndpointSliceV1Endpoint]],
  metadata: EndpointSliceV1Metadata,
  port: typing.Union[IResolvable, typing.List[EndpointSliceV1Port]],
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.addressType">address_type</a></code> | <code>str</code> | address_type specifies the type of address carried by this EndpointSlice. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.endpoint">endpoint</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint">EndpointSliceV1Endpoint</a>]]</code> | endpoint block. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata">EndpointSliceV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.port">port</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port">EndpointSliceV1Port</a>]]</code> | port block. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#id EndpointSliceV1#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address_type`<sup>Required</sup> <a name="address_type" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.addressType"></a>

- *Type:* str

address_type specifies the type of address carried by this EndpointSlice.

All addresses in this slice must be the same type. This field is immutable after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#address_type EndpointSliceV1#address_type}

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.endpoint"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint">EndpointSliceV1Endpoint</a>]]

endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#endpoint EndpointSliceV1#endpoint}

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata">EndpointSliceV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#metadata EndpointSliceV1#metadata}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.port"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port">EndpointSliceV1Port</a>]]

port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#port EndpointSliceV1#port}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#id EndpointSliceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putEndpoint">put_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putPort">put_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_endpoint` <a name="put_endpoint" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putEndpoint"></a>

```python
def put_endpoint(
  value: typing.Union[IResolvable, typing.List[EndpointSliceV1Endpoint]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putEndpoint.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint">EndpointSliceV1Endpoint</a>]]

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putMetadata"></a>

```python
def put_metadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  namespace: str = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putMetadata.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the endpoint_slice that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#annotations EndpointSliceV1#annotations}

---

###### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putMetadata.parameter.generateName"></a>

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#generate_name EndpointSliceV1#generate_name}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the endpoint_slice.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#labels EndpointSliceV1#labels}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putMetadata.parameter.name"></a>

- *Type:* str

Name of the endpoint_slice, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#name EndpointSliceV1#name}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putMetadata.parameter.namespace"></a>

- *Type:* str

Namespace defines the space within which name of the endpoint_slice must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#namespace EndpointSliceV1#namespace}

---

##### `put_port` <a name="put_port" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putPort"></a>

```python
def put_port(
  value: typing.Union[IResolvable, typing.List[EndpointSliceV1Port]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putPort.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port">EndpointSliceV1Port</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EndpointSliceV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import endpoint_slice_v1

endpointSliceV1.EndpointSliceV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import endpoint_slice_v1

endpointSliceV1.EndpointSliceV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_kubernetes import endpoint_slice_v1

endpointSliceV1.EndpointSliceV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_kubernetes import endpoint_slice_v1

endpointSliceV1.EndpointSliceV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EndpointSliceV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EndpointSliceV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EndpointSliceV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EndpointSliceV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList">EndpointSliceV1EndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference">EndpointSliceV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.port">port</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList">EndpointSliceV1PortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.addressTypeInput">address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.endpointInput">endpoint_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint">EndpointSliceV1Endpoint</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata">EndpointSliceV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.portInput">port_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port">EndpointSliceV1Port</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.addressType">address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.endpoint"></a>

```python
endpoint: EndpointSliceV1EndpointList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList">EndpointSliceV1EndpointList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.metadata"></a>

```python
metadata: EndpointSliceV1MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference">EndpointSliceV1MetadataOutputReference</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.port"></a>

```python
port: EndpointSliceV1PortList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList">EndpointSliceV1PortList</a>

---

##### `address_type_input`<sup>Optional</sup> <a name="address_type_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.addressTypeInput"></a>

```python
address_type_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.endpointInput"></a>

```python
endpoint_input: typing.Union[IResolvable, typing.List[EndpointSliceV1Endpoint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint">EndpointSliceV1Endpoint</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.metadataInput"></a>

```python
metadata_input: EndpointSliceV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata">EndpointSliceV1Metadata</a>

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.portInput"></a>

```python
port_input: typing.Union[IResolvable, typing.List[EndpointSliceV1Port]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port">EndpointSliceV1Port</a>]]

---

##### `address_type`<sup>Required</sup> <a name="address_type" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.addressType"></a>

```python
address_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EndpointSliceV1Config <a name="EndpointSliceV1Config" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import endpoint_slice_v1

endpointSliceV1.EndpointSliceV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address_type: str,
  endpoint: typing.Union[IResolvable, typing.List[EndpointSliceV1Endpoint]],
  metadata: EndpointSliceV1Metadata,
  port: typing.Union[IResolvable, typing.List[EndpointSliceV1Port]],
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.addressType">address_type</a></code> | <code>str</code> | address_type specifies the type of address carried by this EndpointSlice. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.endpoint">endpoint</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint">EndpointSliceV1Endpoint</a>]]</code> | endpoint block. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata">EndpointSliceV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.port">port</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port">EndpointSliceV1Port</a>]]</code> | port block. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#id EndpointSliceV1#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address_type`<sup>Required</sup> <a name="address_type" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.addressType"></a>

```python
address_type: str
```

- *Type:* str

address_type specifies the type of address carried by this EndpointSlice.

All addresses in this slice must be the same type. This field is immutable after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#address_type EndpointSliceV1#address_type}

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.endpoint"></a>

```python
endpoint: typing.Union[IResolvable, typing.List[EndpointSliceV1Endpoint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint">EndpointSliceV1Endpoint</a>]]

endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#endpoint EndpointSliceV1#endpoint}

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.metadata"></a>

```python
metadata: EndpointSliceV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata">EndpointSliceV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#metadata EndpointSliceV1#metadata}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.port"></a>

```python
port: typing.Union[IResolvable, typing.List[EndpointSliceV1Port]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port">EndpointSliceV1Port</a>]]

port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#port EndpointSliceV1#port}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#id EndpointSliceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### EndpointSliceV1Endpoint <a name="EndpointSliceV1Endpoint" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import endpoint_slice_v1

endpointSliceV1.EndpointSliceV1Endpoint(
  addresses: typing.List[str],
  condition: EndpointSliceV1EndpointCondition = None,
  hostname: str = None,
  node_name: str = None,
  target_ref: EndpointSliceV1EndpointTargetRef = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.addresses">addresses</a></code> | <code>typing.List[str]</code> | addresses of this endpoint. The contents of this field are interpreted according to the corresponding EndpointSlice addressType field. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition">EndpointSliceV1EndpointCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.hostname">hostname</a></code> | <code>str</code> | hostname of this endpoint. This field may be used by consumers of endpoints to distinguish endpoints from each other. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.nodeName">node_name</a></code> | <code>str</code> | nodeName represents the name of the Node hosting this endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.targetRef">target_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef">EndpointSliceV1EndpointTargetRef</a></code> | target_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.zone">zone</a></code> | <code>str</code> | zone is the name of the Zone this endpoint exists in. |

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.addresses"></a>

```python
addresses: typing.List[str]
```

- *Type:* typing.List[str]

addresses of this endpoint. The contents of this field are interpreted according to the corresponding EndpointSlice addressType field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#addresses EndpointSliceV1#addresses}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.condition"></a>

```python
condition: EndpointSliceV1EndpointCondition
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition">EndpointSliceV1EndpointCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#condition EndpointSliceV1#condition}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

hostname of this endpoint. This field may be used by consumers of endpoints to distinguish endpoints from each other.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#hostname EndpointSliceV1#hostname}

---

##### `node_name`<sup>Optional</sup> <a name="node_name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.nodeName"></a>

```python
node_name: str
```

- *Type:* str

nodeName represents the name of the Node hosting this endpoint.

This can be used to determine endpoints local to a Node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#node_name EndpointSliceV1#node_name}

---

##### `target_ref`<sup>Optional</sup> <a name="target_ref" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.targetRef"></a>

```python
target_ref: EndpointSliceV1EndpointTargetRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef">EndpointSliceV1EndpointTargetRef</a>

target_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#target_ref EndpointSliceV1#target_ref}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.zone"></a>

```python
zone: str
```

- *Type:* str

zone is the name of the Zone this endpoint exists in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#zone EndpointSliceV1#zone}

---

### EndpointSliceV1EndpointCondition <a name="EndpointSliceV1EndpointCondition" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import endpoint_slice_v1

endpointSliceV1.EndpointSliceV1EndpointCondition(
  ready: typing.Union[bool, IResolvable] = None,
  serving: typing.Union[bool, IResolvable] = None,
  terminating: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition.property.ready">ready</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | ready indicates that this endpoint is prepared to receive traffic, according to whatever system is managing the endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition.property.serving">serving</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | serving is identical to ready except that it is set regardless of the terminating state of endpoints. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition.property.terminating">terminating</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | terminating indicates that this endpoint is terminating. |

---

##### `ready`<sup>Optional</sup> <a name="ready" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition.property.ready"></a>

```python
ready: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

ready indicates that this endpoint is prepared to receive traffic, according to whatever system is managing the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#ready EndpointSliceV1#ready}

---

##### `serving`<sup>Optional</sup> <a name="serving" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition.property.serving"></a>

```python
serving: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

serving is identical to ready except that it is set regardless of the terminating state of endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#serving EndpointSliceV1#serving}

---

##### `terminating`<sup>Optional</sup> <a name="terminating" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition.property.terminating"></a>

```python
terminating: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

terminating indicates that this endpoint is terminating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#terminating EndpointSliceV1#terminating}

---

### EndpointSliceV1EndpointTargetRef <a name="EndpointSliceV1EndpointTargetRef" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import endpoint_slice_v1

endpointSliceV1.EndpointSliceV1EndpointTargetRef(
  name: str,
  field_path: str = None,
  namespace: str = None,
  resource_version: str = None,
  uid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.name">name</a></code> | <code>str</code> | Name of the referent. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.fieldPath">field_path</a></code> | <code>str</code> | If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.namespace">namespace</a></code> | <code>str</code> | Namespace of the referent. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.resourceVersion">resource_version</a></code> | <code>str</code> | Specific resourceVersion to which this reference is made, if any. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.uid">uid</a></code> | <code>str</code> | If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#name EndpointSliceV1#name}

---

##### `field_path`<sup>Optional</sup> <a name="field_path" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#field_path EndpointSliceV1#field_path}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#namespace EndpointSliceV1#namespace}

---

##### `resource_version`<sup>Optional</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

Specific resourceVersion to which this reference is made, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#resource_version EndpointSliceV1#resource_version}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.uid"></a>

```python
uid: str
```

- *Type:* str

If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#uid EndpointSliceV1#uid}

---

### EndpointSliceV1Metadata <a name="EndpointSliceV1Metadata" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import endpoint_slice_v1

endpointSliceV1.EndpointSliceV1Metadata(
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
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | An unstructured key value map stored with the endpoint_slice that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.generateName">generate_name</a></code> | <code>str</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the endpoint_slice. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.name">name</a></code> | <code>str</code> | Name of the endpoint_slice, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.namespace">namespace</a></code> | <code>str</code> | Namespace defines the space within which name of the endpoint_slice must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the endpoint_slice that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#annotations EndpointSliceV1#annotations}

---

##### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#generate_name EndpointSliceV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the endpoint_slice.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#labels EndpointSliceV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the endpoint_slice, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#name EndpointSliceV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace defines the space within which name of the endpoint_slice must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#namespace EndpointSliceV1#namespace}

---

### EndpointSliceV1Port <a name="EndpointSliceV1Port" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import endpoint_slice_v1

endpointSliceV1.EndpointSliceV1Port(
  app_protocol: str,
  port: str,
  name: str = None,
  protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.property.appProtocol">app_protocol</a></code> | <code>str</code> | The application protocol for this port. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.property.port">port</a></code> | <code>str</code> | port represents the port number of the endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.property.name">name</a></code> | <code>str</code> | name represents the name of this port. All ports in an EndpointSlice must have a unique name. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.property.protocol">protocol</a></code> | <code>str</code> | protocol represents the IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP. |

---

##### `app_protocol`<sup>Required</sup> <a name="app_protocol" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.property.appProtocol"></a>

```python
app_protocol: str
```

- *Type:* str

The application protocol for this port.

This is used as a hint for implementations to offer richer behavior for protocols that they understand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#app_protocol EndpointSliceV1#app_protocol}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.property.port"></a>

```python
port: str
```

- *Type:* str

port represents the port number of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#port EndpointSliceV1#port}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.property.name"></a>

```python
name: str
```

- *Type:* str

name represents the name of this port. All ports in an EndpointSlice must have a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#name EndpointSliceV1#name}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

protocol represents the IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#protocol EndpointSliceV1#protocol}

---

## Classes <a name="Classes" id="Classes"></a>

### EndpointSliceV1EndpointConditionOutputReference <a name="EndpointSliceV1EndpointConditionOutputReference" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import endpoint_slice_v1

endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resetReady">reset_ready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resetServing">reset_serving</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resetTerminating">reset_terminating</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ready` <a name="reset_ready" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resetReady"></a>

```python
def reset_ready() -> None
```

##### `reset_serving` <a name="reset_serving" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resetServing"></a>

```python
def reset_serving() -> None
```

##### `reset_terminating` <a name="reset_terminating" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resetTerminating"></a>

```python
def reset_terminating() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.readyInput">ready_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.servingInput">serving_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.terminatingInput">terminating_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.ready">ready</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.serving">serving</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.terminating">terminating</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition">EndpointSliceV1EndpointCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ready_input`<sup>Optional</sup> <a name="ready_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.readyInput"></a>

```python
ready_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `serving_input`<sup>Optional</sup> <a name="serving_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.servingInput"></a>

```python
serving_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `terminating_input`<sup>Optional</sup> <a name="terminating_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.terminatingInput"></a>

```python
terminating_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ready`<sup>Required</sup> <a name="ready" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.ready"></a>

```python
ready: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `serving`<sup>Required</sup> <a name="serving" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.serving"></a>

```python
serving: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `terminating`<sup>Required</sup> <a name="terminating" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.terminating"></a>

```python
terminating: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.internalValue"></a>

```python
internal_value: EndpointSliceV1EndpointCondition
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition">EndpointSliceV1EndpointCondition</a>

---


### EndpointSliceV1EndpointList <a name="EndpointSliceV1EndpointList" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import endpoint_slice_v1

endpointSliceV1.EndpointSliceV1EndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EndpointSliceV1EndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint">EndpointSliceV1Endpoint</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EndpointSliceV1Endpoint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint">EndpointSliceV1Endpoint</a>]]

---


### EndpointSliceV1EndpointOutputReference <a name="EndpointSliceV1EndpointOutputReference" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import endpoint_slice_v1

endpointSliceV1.EndpointSliceV1EndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.putTargetRef">put_target_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetNodeName">reset_node_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetTargetRef">reset_target_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetZone">reset_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition` <a name="put_condition" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.putCondition"></a>

```python
def put_condition(
  ready: typing.Union[bool, IResolvable] = None,
  serving: typing.Union[bool, IResolvable] = None,
  terminating: typing.Union[bool, IResolvable] = None
) -> None
```

###### `ready`<sup>Optional</sup> <a name="ready" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.putCondition.parameter.ready"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

ready indicates that this endpoint is prepared to receive traffic, according to whatever system is managing the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#ready EndpointSliceV1#ready}

---

###### `serving`<sup>Optional</sup> <a name="serving" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.putCondition.parameter.serving"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

serving is identical to ready except that it is set regardless of the terminating state of endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#serving EndpointSliceV1#serving}

---

###### `terminating`<sup>Optional</sup> <a name="terminating" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.putCondition.parameter.terminating"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

terminating indicates that this endpoint is terminating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#terminating EndpointSliceV1#terminating}

---

##### `put_target_ref` <a name="put_target_ref" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.putTargetRef"></a>

```python
def put_target_ref(
  name: str,
  field_path: str = None,
  namespace: str = None,
  resource_version: str = None,
  uid: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.putTargetRef.parameter.name"></a>

- *Type:* str

Name of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#name EndpointSliceV1#name}

---

###### `field_path`<sup>Optional</sup> <a name="field_path" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.putTargetRef.parameter.fieldPath"></a>

- *Type:* str

If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#field_path EndpointSliceV1#field_path}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.putTargetRef.parameter.namespace"></a>

- *Type:* str

Namespace of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#namespace EndpointSliceV1#namespace}

---

###### `resource_version`<sup>Optional</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.putTargetRef.parameter.resourceVersion"></a>

- *Type:* str

Specific resourceVersion to which this reference is made, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#resource_version EndpointSliceV1#resource_version}

---

###### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.putTargetRef.parameter.uid"></a>

- *Type:* str

If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/endpoint_slice_v1#uid EndpointSliceV1#uid}

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_hostname` <a name="reset_hostname" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_node_name` <a name="reset_node_name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetNodeName"></a>

```python
def reset_node_name() -> None
```

##### `reset_target_ref` <a name="reset_target_ref" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetTargetRef"></a>

```python
def reset_target_ref() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetZone"></a>

```python
def reset_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference">EndpointSliceV1EndpointConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.targetRef">target_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference">EndpointSliceV1EndpointTargetRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.addressesInput">addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition">EndpointSliceV1EndpointCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.nodeNameInput">node_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.targetRefInput">target_ref_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef">EndpointSliceV1EndpointTargetRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.addresses">addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.nodeName">node_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint">EndpointSliceV1Endpoint</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.condition"></a>

```python
condition: EndpointSliceV1EndpointConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference">EndpointSliceV1EndpointConditionOutputReference</a>

---

##### `target_ref`<sup>Required</sup> <a name="target_ref" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.targetRef"></a>

```python
target_ref: EndpointSliceV1EndpointTargetRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference">EndpointSliceV1EndpointTargetRefOutputReference</a>

---

##### `addresses_input`<sup>Optional</sup> <a name="addresses_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.addressesInput"></a>

```python
addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.conditionInput"></a>

```python
condition_input: EndpointSliceV1EndpointCondition
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition">EndpointSliceV1EndpointCondition</a>

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `node_name_input`<sup>Optional</sup> <a name="node_name_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.nodeNameInput"></a>

```python
node_name_input: str
```

- *Type:* str

---

##### `target_ref_input`<sup>Optional</sup> <a name="target_ref_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.targetRefInput"></a>

```python
target_ref_input: EndpointSliceV1EndpointTargetRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef">EndpointSliceV1EndpointTargetRef</a>

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.addresses"></a>

```python
addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `node_name`<sup>Required</sup> <a name="node_name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.nodeName"></a>

```python
node_name: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EndpointSliceV1Endpoint]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint">EndpointSliceV1Endpoint</a>]

---


### EndpointSliceV1EndpointTargetRefOutputReference <a name="EndpointSliceV1EndpointTargetRefOutputReference" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import endpoint_slice_v1

endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resetFieldPath">reset_field_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resetResourceVersion">reset_resource_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resetUid">reset_uid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field_path` <a name="reset_field_path" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resetFieldPath"></a>

```python
def reset_field_path() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_resource_version` <a name="reset_resource_version" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resetResourceVersion"></a>

```python
def reset_resource_version() -> None
```

##### `reset_uid` <a name="reset_uid" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resetUid"></a>

```python
def reset_uid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.fieldPathInput">field_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.resourceVersionInput">resource_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.uidInput">uid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.fieldPath">field_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef">EndpointSliceV1EndpointTargetRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_path_input`<sup>Optional</sup> <a name="field_path_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.fieldPathInput"></a>

```python
field_path_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `resource_version_input`<sup>Optional</sup> <a name="resource_version_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.resourceVersionInput"></a>

```python
resource_version_input: str
```

- *Type:* str

---

##### `uid_input`<sup>Optional</sup> <a name="uid_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.uidInput"></a>

```python
uid_input: str
```

- *Type:* str

---

##### `field_path`<sup>Required</sup> <a name="field_path" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.internalValue"></a>

```python
internal_value: EndpointSliceV1EndpointTargetRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef">EndpointSliceV1EndpointTargetRef</a>

---


### EndpointSliceV1MetadataOutputReference <a name="EndpointSliceV1MetadataOutputReference" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import endpoint_slice_v1

endpointSliceV1.EndpointSliceV1MetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetGenerateName">reset_generate_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_generate_name` <a name="reset_generate_name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetGenerateName"></a>

```python
def reset_generate_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.generateNameInput">generate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.generateName">generate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata">EndpointSliceV1Metadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name_input`<sup>Optional</sup> <a name="generate_name_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.generateNameInput"></a>

```python
generate_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name`<sup>Required</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.internalValue"></a>

```python
internal_value: EndpointSliceV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata">EndpointSliceV1Metadata</a>

---


### EndpointSliceV1PortList <a name="EndpointSliceV1PortList" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import endpoint_slice_v1

endpointSliceV1.EndpointSliceV1PortList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EndpointSliceV1PortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port">EndpointSliceV1Port</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EndpointSliceV1Port]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port">EndpointSliceV1Port</a>]]

---


### EndpointSliceV1PortOutputReference <a name="EndpointSliceV1PortOutputReference" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import endpoint_slice_v1

endpointSliceV1.EndpointSliceV1PortOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.appProtocolInput">app_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.appProtocol">app_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port">EndpointSliceV1Port</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_protocol_input`<sup>Optional</sup> <a name="app_protocol_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.appProtocolInput"></a>

```python
app_protocol_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `app_protocol`<sup>Required</sup> <a name="app_protocol" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.appProtocol"></a>

```python
app_protocol: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EndpointSliceV1Port]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port">EndpointSliceV1Port</a>]

---



