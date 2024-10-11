# `tokenRequestV1` Submodule <a name="`tokenRequestV1` Submodule" id="@cdktf/provider-kubernetes.tokenRequestV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TokenRequestV1 <a name="TokenRequestV1" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1 kubernetes_token_request_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import token_request_v1

tokenRequestV1.TokenRequestV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: TokenRequestV1Metadata,
  id: str = None,
  spec: TokenRequestV1Spec = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata">TokenRequestV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#id TokenRequestV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec">TokenRequestV1Spec</a></code> | spec block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata">TokenRequestV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#metadata TokenRequestV1#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#id TokenRequestV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec">TokenRequestV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#spec TokenRequestV1#spec}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.resetSpec">reset_spec</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.putMetadata"></a>

```python
def put_metadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  namespace: str = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.putMetadata.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the token request that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#annotations TokenRequestV1#annotations}

---

###### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.putMetadata.parameter.generateName"></a>

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#generate_name TokenRequestV1#generate_name}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the token request.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#labels TokenRequestV1#labels}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.putMetadata.parameter.name"></a>

- *Type:* str

Name of the token request, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#name TokenRequestV1#name}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.putMetadata.parameter.namespace"></a>

- *Type:* str

Namespace defines the space within which name of the token request must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#namespace TokenRequestV1#namespace}

---

##### `put_spec` <a name="put_spec" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.putSpec"></a>

```python
def put_spec(
  audiences: typing.List[str] = None,
  bound_object_ref: TokenRequestV1SpecBoundObjectRef = None,
  expiration_seconds: typing.Union[int, float] = None
) -> None
```

###### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.putSpec.parameter.audiences"></a>

- *Type:* typing.List[str]

Audiences are the intendend audiences of the token.

A recipient of a token must identify themself with an identifier in the list of audiences of the token, and otherwise should reject the token. A token issued for multiple audiences may be used to authenticate against any of the audiences listed but implies a high degree of trust between the target audiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#audiences TokenRequestV1#audiences}

---

###### `bound_object_ref`<sup>Optional</sup> <a name="bound_object_ref" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.putSpec.parameter.boundObjectRef"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef">TokenRequestV1SpecBoundObjectRef</a>

bound_object_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#bound_object_ref TokenRequestV1#bound_object_ref}

---

###### `expiration_seconds`<sup>Optional</sup> <a name="expiration_seconds" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.putSpec.parameter.expirationSeconds"></a>

- *Type:* typing.Union[int, float]

expiration_seconds is the requested duration of validity of the request.

The token issuer may return a token with a different validity duration so a client needs to check the 'expiration' field in a response. The expiration can't be less than 10 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#expiration_seconds TokenRequestV1#expiration_seconds}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_spec` <a name="reset_spec" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.resetSpec"></a>

```python
def reset_spec() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TokenRequestV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import token_request_v1

tokenRequestV1.TokenRequestV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import token_request_v1

tokenRequestV1.TokenRequestV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_kubernetes import token_request_v1

tokenRequestV1.TokenRequestV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_kubernetes import token_request_v1

tokenRequestV1.TokenRequestV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TokenRequestV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TokenRequestV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TokenRequestV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TokenRequestV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference">TokenRequestV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference">TokenRequestV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata">TokenRequestV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.specInput">spec_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec">TokenRequestV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.metadata"></a>

```python
metadata: TokenRequestV1MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference">TokenRequestV1MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.spec"></a>

```python
spec: TokenRequestV1SpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference">TokenRequestV1SpecOutputReference</a>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.metadataInput"></a>

```python
metadata_input: TokenRequestV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata">TokenRequestV1Metadata</a>

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.specInput"></a>

```python
spec_input: TokenRequestV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec">TokenRequestV1Spec</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TokenRequestV1Config <a name="TokenRequestV1Config" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import token_request_v1

tokenRequestV1.TokenRequestV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: TokenRequestV1Metadata,
  id: str = None,
  spec: TokenRequestV1Spec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata">TokenRequestV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#id TokenRequestV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec">TokenRequestV1Spec</a></code> | spec block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.metadata"></a>

```python
metadata: TokenRequestV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata">TokenRequestV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#metadata TokenRequestV1#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#id TokenRequestV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.spec"></a>

```python
spec: TokenRequestV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec">TokenRequestV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#spec TokenRequestV1#spec}

---

### TokenRequestV1Metadata <a name="TokenRequestV1Metadata" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import token_request_v1

tokenRequestV1.TokenRequestV1Metadata(
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
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | An unstructured key value map stored with the token request that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.generateName">generate_name</a></code> | <code>str</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the token request. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.name">name</a></code> | <code>str</code> | Name of the token request, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.namespace">namespace</a></code> | <code>str</code> | Namespace defines the space within which name of the token request must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the token request that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#annotations TokenRequestV1#annotations}

---

##### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#generate_name TokenRequestV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the token request.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#labels TokenRequestV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the token request, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#name TokenRequestV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace defines the space within which name of the token request must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#namespace TokenRequestV1#namespace}

---

### TokenRequestV1Spec <a name="TokenRequestV1Spec" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import token_request_v1

tokenRequestV1.TokenRequestV1Spec(
  audiences: typing.List[str] = None,
  bound_object_ref: TokenRequestV1SpecBoundObjectRef = None,
  expiration_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec.property.audiences">audiences</a></code> | <code>typing.List[str]</code> | Audiences are the intendend audiences of the token. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec.property.boundObjectRef">bound_object_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef">TokenRequestV1SpecBoundObjectRef</a></code> | bound_object_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec.property.expirationSeconds">expiration_seconds</a></code> | <code>typing.Union[int, float]</code> | expiration_seconds is the requested duration of validity of the request. |

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec.property.audiences"></a>

```python
audiences: typing.List[str]
```

- *Type:* typing.List[str]

Audiences are the intendend audiences of the token.

A recipient of a token must identify themself with an identifier in the list of audiences of the token, and otherwise should reject the token. A token issued for multiple audiences may be used to authenticate against any of the audiences listed but implies a high degree of trust between the target audiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#audiences TokenRequestV1#audiences}

---

##### `bound_object_ref`<sup>Optional</sup> <a name="bound_object_ref" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec.property.boundObjectRef"></a>

```python
bound_object_ref: TokenRequestV1SpecBoundObjectRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef">TokenRequestV1SpecBoundObjectRef</a>

bound_object_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#bound_object_ref TokenRequestV1#bound_object_ref}

---

##### `expiration_seconds`<sup>Optional</sup> <a name="expiration_seconds" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec.property.expirationSeconds"></a>

```python
expiration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

expiration_seconds is the requested duration of validity of the request.

The token issuer may return a token with a different validity duration so a client needs to check the 'expiration' field in a response. The expiration can't be less than 10 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#expiration_seconds TokenRequestV1#expiration_seconds}

---

### TokenRequestV1SpecBoundObjectRef <a name="TokenRequestV1SpecBoundObjectRef" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import token_request_v1

tokenRequestV1.TokenRequestV1SpecBoundObjectRef(
  api_version: str = None,
  kind: str = None,
  name: str = None,
  uid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.property.apiVersion">api_version</a></code> | <code>str</code> | API version of the referent. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.property.kind">kind</a></code> | <code>str</code> | Kind of the referent. Valid kinds are 'Pod' and 'Secret'. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.property.name">name</a></code> | <code>str</code> | Name of the referent. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.property.uid">uid</a></code> | <code>str</code> | UID of the referent. |

---

##### `api_version`<sup>Optional</sup> <a name="api_version" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.property.apiVersion"></a>

```python
api_version: str
```

- *Type:* str

API version of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#api_version TokenRequestV1#api_version}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.property.kind"></a>

```python
kind: str
```

- *Type:* str

Kind of the referent. Valid kinds are 'Pod' and 'Secret'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#kind TokenRequestV1#kind}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#name TokenRequestV1#name}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.property.uid"></a>

```python
uid: str
```

- *Type:* str

UID of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#uid TokenRequestV1#uid}

---

## Classes <a name="Classes" id="Classes"></a>

### TokenRequestV1MetadataOutputReference <a name="TokenRequestV1MetadataOutputReference" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import token_request_v1

tokenRequestV1.TokenRequestV1MetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetGenerateName">reset_generate_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_generate_name` <a name="reset_generate_name" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetGenerateName"></a>

```python
def reset_generate_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.generateNameInput">generate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.generateName">generate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata">TokenRequestV1Metadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name_input`<sup>Optional</sup> <a name="generate_name_input" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.generateNameInput"></a>

```python
generate_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name`<sup>Required</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.internalValue"></a>

```python
internal_value: TokenRequestV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata">TokenRequestV1Metadata</a>

---


### TokenRequestV1SpecBoundObjectRefOutputReference <a name="TokenRequestV1SpecBoundObjectRefOutputReference" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import token_request_v1

tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resetApiVersion">reset_api_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resetKind">reset_kind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resetUid">reset_uid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_api_version` <a name="reset_api_version" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resetApiVersion"></a>

```python
def reset_api_version() -> None
```

##### `reset_kind` <a name="reset_kind" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resetKind"></a>

```python
def reset_kind() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_uid` <a name="reset_uid" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resetUid"></a>

```python
def reset_uid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersionInput">api_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.uidInput">uid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersion">api_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef">TokenRequestV1SpecBoundObjectRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_version_input`<sup>Optional</sup> <a name="api_version_input" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersionInput"></a>

```python
api_version_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `uid_input`<sup>Optional</sup> <a name="uid_input" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.uidInput"></a>

```python
uid_input: str
```

- *Type:* str

---

##### `api_version`<sup>Required</sup> <a name="api_version" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersion"></a>

```python
api_version: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.internalValue"></a>

```python
internal_value: TokenRequestV1SpecBoundObjectRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef">TokenRequestV1SpecBoundObjectRef</a>

---


### TokenRequestV1SpecOutputReference <a name="TokenRequestV1SpecOutputReference" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import token_request_v1

tokenRequestV1.TokenRequestV1SpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.putBoundObjectRef">put_bound_object_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resetAudiences">reset_audiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resetBoundObjectRef">reset_bound_object_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resetExpirationSeconds">reset_expiration_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bound_object_ref` <a name="put_bound_object_ref" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.putBoundObjectRef"></a>

```python
def put_bound_object_ref(
  api_version: str = None,
  kind: str = None,
  name: str = None,
  uid: str = None
) -> None
```

###### `api_version`<sup>Optional</sup> <a name="api_version" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.putBoundObjectRef.parameter.apiVersion"></a>

- *Type:* str

API version of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#api_version TokenRequestV1#api_version}

---

###### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.putBoundObjectRef.parameter.kind"></a>

- *Type:* str

Kind of the referent. Valid kinds are 'Pod' and 'Secret'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#kind TokenRequestV1#kind}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.putBoundObjectRef.parameter.name"></a>

- *Type:* str

Name of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#name TokenRequestV1#name}

---

###### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.putBoundObjectRef.parameter.uid"></a>

- *Type:* str

UID of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/token_request_v1#uid TokenRequestV1#uid}

---

##### `reset_audiences` <a name="reset_audiences" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resetAudiences"></a>

```python
def reset_audiences() -> None
```

##### `reset_bound_object_ref` <a name="reset_bound_object_ref" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resetBoundObjectRef"></a>

```python
def reset_bound_object_ref() -> None
```

##### `reset_expiration_seconds` <a name="reset_expiration_seconds" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resetExpirationSeconds"></a>

```python
def reset_expiration_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.boundObjectRef">bound_object_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference">TokenRequestV1SpecBoundObjectRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.audiencesInput">audiences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.boundObjectRefInput">bound_object_ref_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef">TokenRequestV1SpecBoundObjectRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.expirationSecondsInput">expiration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.audiences">audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.expirationSeconds">expiration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec">TokenRequestV1Spec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bound_object_ref`<sup>Required</sup> <a name="bound_object_ref" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.boundObjectRef"></a>

```python
bound_object_ref: TokenRequestV1SpecBoundObjectRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference">TokenRequestV1SpecBoundObjectRefOutputReference</a>

---

##### `audiences_input`<sup>Optional</sup> <a name="audiences_input" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.audiencesInput"></a>

```python
audiences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_object_ref_input`<sup>Optional</sup> <a name="bound_object_ref_input" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.boundObjectRefInput"></a>

```python
bound_object_ref_input: TokenRequestV1SpecBoundObjectRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef">TokenRequestV1SpecBoundObjectRef</a>

---

##### `expiration_seconds_input`<sup>Optional</sup> <a name="expiration_seconds_input" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.expirationSecondsInput"></a>

```python
expiration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.audiences"></a>

```python
audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expiration_seconds`<sup>Required</sup> <a name="expiration_seconds" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.expirationSeconds"></a>

```python
expiration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.internalValue"></a>

```python
internal_value: TokenRequestV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec">TokenRequestV1Spec</a>

---



