# `validatingWebhookConfiguration` Submodule <a name="`validatingWebhookConfiguration` Submodule" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ValidatingWebhookConfiguration <a name="ValidatingWebhookConfiguration" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration kubernetes_validating_webhook_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  metadata: ValidatingWebhookConfigurationMetadata,
  webhook: IResolvable | typing.List[ValidatingWebhookConfigurationWebhook],
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata">ValidatingWebhookConfigurationMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.webhook">webhook</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook">ValidatingWebhookConfigurationWebhook</a>]</code> | webhook block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#id ValidatingWebhookConfiguration#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata">ValidatingWebhookConfigurationMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#metadata ValidatingWebhookConfiguration#metadata}

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.webhook"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook">ValidatingWebhookConfigurationWebhook</a>]

webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#webhook ValidatingWebhookConfiguration#webhook}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#id ValidatingWebhookConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.putWebhook">put_webhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.putMetadata"></a>

```python
def put_metadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.putMetadata.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the validating webhook configuration that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#annotations ValidatingWebhookConfiguration#annotations}

---

###### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.putMetadata.parameter.generateName"></a>

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#generate_name ValidatingWebhookConfiguration#generate_name}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the validating webhook configuration.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#labels ValidatingWebhookConfiguration#labels}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.putMetadata.parameter.name"></a>

- *Type:* str

Name of the validating webhook configuration, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#name ValidatingWebhookConfiguration#name}

---

##### `put_webhook` <a name="put_webhook" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.putWebhook"></a>

```python
def put_webhook(
  value: IResolvable | typing.List[ValidatingWebhookConfigurationWebhook]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.putWebhook.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook">ValidatingWebhookConfigurationWebhook</a>]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ValidatingWebhookConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ValidatingWebhookConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ValidatingWebhookConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ValidatingWebhookConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ValidatingWebhookConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference">ValidatingWebhookConfigurationMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.webhook">webhook</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList">ValidatingWebhookConfigurationWebhookList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata">ValidatingWebhookConfigurationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.webhookInput">webhook_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook">ValidatingWebhookConfigurationWebhook</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.metadata"></a>

```python
metadata: ValidatingWebhookConfigurationMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference">ValidatingWebhookConfigurationMetadataOutputReference</a>

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.webhook"></a>

```python
webhook: ValidatingWebhookConfigurationWebhookList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList">ValidatingWebhookConfigurationWebhookList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.metadataInput"></a>

```python
metadata_input: ValidatingWebhookConfigurationMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata">ValidatingWebhookConfigurationMetadata</a>

---

##### `webhook_input`<sup>Optional</sup> <a name="webhook_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.webhookInput"></a>

```python
webhook_input: IResolvable | typing.List[ValidatingWebhookConfigurationWebhook]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook">ValidatingWebhookConfigurationWebhook</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ValidatingWebhookConfigurationConfig <a name="ValidatingWebhookConfigurationConfig" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  metadata: ValidatingWebhookConfigurationMetadata,
  webhook: IResolvable | typing.List[ValidatingWebhookConfigurationWebhook],
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata">ValidatingWebhookConfigurationMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.webhook">webhook</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook">ValidatingWebhookConfigurationWebhook</a>]</code> | webhook block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#id ValidatingWebhookConfiguration#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.metadata"></a>

```python
metadata: ValidatingWebhookConfigurationMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata">ValidatingWebhookConfigurationMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#metadata ValidatingWebhookConfiguration#metadata}

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.webhook"></a>

```python
webhook: IResolvable | typing.List[ValidatingWebhookConfigurationWebhook]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook">ValidatingWebhookConfigurationWebhook</a>]

webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#webhook ValidatingWebhookConfiguration#webhook}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#id ValidatingWebhookConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ValidatingWebhookConfigurationMetadata <a name="ValidatingWebhookConfigurationMetadata" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | An unstructured key value map stored with the validating webhook configuration that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.property.generateName">generate_name</a></code> | <code>str</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the validating webhook configuration. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.property.name">name</a></code> | <code>str</code> | Name of the validating webhook configuration, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the validating webhook configuration that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#annotations ValidatingWebhookConfiguration#annotations}

---

##### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#generate_name ValidatingWebhookConfiguration#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the validating webhook configuration.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#labels ValidatingWebhookConfiguration#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the validating webhook configuration, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#name ValidatingWebhookConfiguration#name}

---

### ValidatingWebhookConfigurationWebhook <a name="ValidatingWebhookConfigurationWebhook" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook(
  client_config: ValidatingWebhookConfigurationWebhookClientConfig,
  name: str,
  admission_review_versions: typing.List[str] = None,
  failure_policy: str = None,
  match_policy: str = None,
  namespace_selector: ValidatingWebhookConfigurationWebhookNamespaceSelector = None,
  object_selector: ValidatingWebhookConfigurationWebhookObjectSelector = None,
  rule: IResolvable | typing.List[ValidatingWebhookConfigurationWebhookRule] = None,
  side_effects: str = None,
  timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.clientConfig">client_config</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig">ValidatingWebhookConfigurationWebhookClientConfig</a></code> | client_config block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.name">name</a></code> | <code>str</code> | The name of the admission webhook. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.admissionReviewVersions">admission_review_versions</a></code> | <code>typing.List[str]</code> | AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.failurePolicy">failure_policy</a></code> | <code>str</code> | FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.matchPolicy">match_policy</a></code> | <code>str</code> | matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent". |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.namespaceSelector">namespace_selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector">ValidatingWebhookConfigurationWebhookNamespaceSelector</a></code> | namespace_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.objectSelector">object_selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector">ValidatingWebhookConfigurationWebhookObjectSelector</a></code> | object_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.rule">rule</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule">ValidatingWebhookConfigurationWebhookRule</a>]</code> | rule block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.sideEffects">side_effects</a></code> | <code>str</code> | SideEffects states whether this webhook has side effects. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | TimeoutSeconds specifies the timeout for this webhook. |

---

##### `client_config`<sup>Required</sup> <a name="client_config" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.clientConfig"></a>

```python
client_config: ValidatingWebhookConfigurationWebhookClientConfig
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig">ValidatingWebhookConfigurationWebhookClientConfig</a>

client_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#client_config ValidatingWebhookConfiguration#client_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the admission webhook.

Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#name ValidatingWebhookConfiguration#name}

---

##### `admission_review_versions`<sup>Optional</sup> <a name="admission_review_versions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.admissionReviewVersions"></a>

```python
admission_review_versions: typing.List[str]
```

- *Type:* typing.List[str]

AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects.

API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#admission_review_versions ValidatingWebhookConfiguration#admission_review_versions}

---

##### `failure_policy`<sup>Optional</sup> <a name="failure_policy" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.failurePolicy"></a>

```python
failure_policy: str
```

- *Type:* str

FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail.

Defaults to Fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#failure_policy ValidatingWebhookConfiguration#failure_policy}

---

##### `match_policy`<sup>Optional</sup> <a name="match_policy" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.matchPolicy"></a>

```python
match_policy: str
```

- *Type:* str

matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".

* Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.
* Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.

Defaults to "Equivalent"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#match_policy ValidatingWebhookConfiguration#match_policy}

---

##### `namespace_selector`<sup>Optional</sup> <a name="namespace_selector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.namespaceSelector"></a>

```python
namespace_selector: ValidatingWebhookConfigurationWebhookNamespaceSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector">ValidatingWebhookConfigurationWebhookNamespaceSelector</a>

namespace_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#namespace_selector ValidatingWebhookConfiguration#namespace_selector}

---

##### `object_selector`<sup>Optional</sup> <a name="object_selector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.objectSelector"></a>

```python
object_selector: ValidatingWebhookConfigurationWebhookObjectSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector">ValidatingWebhookConfigurationWebhookObjectSelector</a>

object_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#object_selector ValidatingWebhookConfiguration#object_selector}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.rule"></a>

```python
rule: IResolvable | typing.List[ValidatingWebhookConfigurationWebhookRule]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule">ValidatingWebhookConfigurationWebhookRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#rule ValidatingWebhookConfiguration#rule}

---

##### `side_effects`<sup>Optional</sup> <a name="side_effects" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.sideEffects"></a>

```python
side_effects: str
```

- *Type:* str

SideEffects states whether this webhook has side effects.

Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#side_effects ValidatingWebhookConfiguration#side_effects}

---

##### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

TimeoutSeconds specifies the timeout for this webhook.

After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#timeout_seconds ValidatingWebhookConfiguration#timeout_seconds}

---

### ValidatingWebhookConfigurationWebhookClientConfig <a name="ValidatingWebhookConfigurationWebhookClientConfig" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig(
  ca_bundle: str = None,
  service: ValidatingWebhookConfigurationWebhookClientConfigService = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig.property.caBundle">ca_bundle</a></code> | <code>str</code> | `caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig.property.service">service</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService">ValidatingWebhookConfigurationWebhookClientConfigService</a></code> | service block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig.property.url">url</a></code> | <code>str</code> | `url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`). |

---

##### `ca_bundle`<sup>Optional</sup> <a name="ca_bundle" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig.property.caBundle"></a>

```python
ca_bundle: str
```

- *Type:* str

`caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate.

If unspecified, system trust roots on the apiserver are used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#ca_bundle ValidatingWebhookConfiguration#ca_bundle}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig.property.service"></a>

```python
service: ValidatingWebhookConfigurationWebhookClientConfigService
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService">ValidatingWebhookConfigurationWebhookClientConfigService</a>

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#service ValidatingWebhookConfiguration#service}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig.property.url"></a>

```python
url: str
```

- *Type:* str

`url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`).

Exactly one of `url` or `service` must be specified.

The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.

Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.

The scheme must be "https"; the URL must begin with "https://".

A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.

Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#url ValidatingWebhookConfiguration#url}

---

### ValidatingWebhookConfigurationWebhookClientConfigService <a name="ValidatingWebhookConfigurationWebhookClientConfigService" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService(
  name: str,
  namespace: str,
  path: str = None,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.property.name">name</a></code> | <code>str</code> | `name` is the name of the service. Required. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.property.namespace">namespace</a></code> | <code>str</code> | `namespace` is the namespace of the service. Required. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.property.path">path</a></code> | <code>str</code> | `path` is an optional URL path which will be sent in any request to this service. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.property.port">port</a></code> | <code>typing.Union[int, float]</code> | If specified, the port on the service that hosting webhook. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.property.name"></a>

```python
name: str
```

- *Type:* str

`name` is the name of the service. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#name ValidatingWebhookConfiguration#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

`namespace` is the namespace of the service. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#namespace ValidatingWebhookConfiguration#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.property.path"></a>

```python
path: str
```

- *Type:* str

`path` is an optional URL path which will be sent in any request to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#path ValidatingWebhookConfiguration#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If specified, the port on the service that hosting webhook.

Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#port ValidatingWebhookConfiguration#port}

---

### ValidatingWebhookConfigurationWebhookNamespaceSelector <a name="ValidatingWebhookConfigurationWebhookNamespaceSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector(
  match_expressions: IResolvable | typing.List[ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions] = None,
  match_labels: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector.property.matchExpressions">match_expressions</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a>]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector.property.matchLabels">match_labels</a></code> | <code>typing.Mapping[str]</code> | A map of {key,value} pairs. |

---

##### `match_expressions`<sup>Optional</sup> <a name="match_expressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector.property.matchExpressions"></a>

```python
match_expressions: IResolvable | typing.List[ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a>]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#match_expressions ValidatingWebhookConfiguration#match_expressions}

---

##### `match_labels`<sup>Optional</sup> <a name="match_labels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector.property.matchLabels"></a>

```python
match_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#match_labels ValidatingWebhookConfiguration#match_labels}

---

### ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions <a name="ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions(
  key: str = None,
  operator: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.key">key</a></code> | <code>str</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.operator">operator</a></code> | <code>str</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.values">values</a></code> | <code>typing.List[str]</code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.key"></a>

```python
key: str
```

- *Type:* str

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#key ValidatingWebhookConfiguration#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.operator"></a>

```python
operator: str
```

- *Type:* str

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#operator ValidatingWebhookConfiguration#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#values ValidatingWebhookConfiguration#values}

---

### ValidatingWebhookConfigurationWebhookObjectSelector <a name="ValidatingWebhookConfigurationWebhookObjectSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector(
  match_expressions: IResolvable | typing.List[ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions] = None,
  match_labels: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector.property.matchExpressions">match_expressions</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a>]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector.property.matchLabels">match_labels</a></code> | <code>typing.Mapping[str]</code> | A map of {key,value} pairs. |

---

##### `match_expressions`<sup>Optional</sup> <a name="match_expressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector.property.matchExpressions"></a>

```python
match_expressions: IResolvable | typing.List[ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a>]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#match_expressions ValidatingWebhookConfiguration#match_expressions}

---

##### `match_labels`<sup>Optional</sup> <a name="match_labels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector.property.matchLabels"></a>

```python
match_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#match_labels ValidatingWebhookConfiguration#match_labels}

---

### ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions <a name="ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions(
  key: str = None,
  operator: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.key">key</a></code> | <code>str</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.operator">operator</a></code> | <code>str</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.values">values</a></code> | <code>typing.List[str]</code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.key"></a>

```python
key: str
```

- *Type:* str

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#key ValidatingWebhookConfiguration#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.operator"></a>

```python
operator: str
```

- *Type:* str

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#operator ValidatingWebhookConfiguration#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#values ValidatingWebhookConfiguration#values}

---

### ValidatingWebhookConfigurationWebhookRule <a name="ValidatingWebhookConfigurationWebhookRule" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule(
  api_groups: typing.List[str],
  api_versions: typing.List[str],
  operations: typing.List[str],
  resources: typing.List[str],
  scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.apiGroups">api_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#api_groups ValidatingWebhookConfiguration#api_groups}. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.apiVersions">api_versions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#api_versions ValidatingWebhookConfiguration#api_versions}. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.operations">operations</a></code> | <code>typing.List[str]</code> | Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.resources">resources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#resources ValidatingWebhookConfiguration#resources}. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#scope ValidatingWebhookConfiguration#scope}. |

---

##### `api_groups`<sup>Required</sup> <a name="api_groups" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.apiGroups"></a>

```python
api_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#api_groups ValidatingWebhookConfiguration#api_groups}.

---

##### `api_versions`<sup>Required</sup> <a name="api_versions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.apiVersions"></a>

```python
api_versions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#api_versions ValidatingWebhookConfiguration#api_versions}.

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.operations"></a>

```python
operations: typing.List[str]
```

- *Type:* typing.List[str]

Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added.

If '*' is present, the length of the slice must be one. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#operations ValidatingWebhookConfiguration#operations}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#resources ValidatingWebhookConfiguration#resources}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#scope ValidatingWebhookConfiguration#scope}.

---

## Classes <a name="Classes" id="Classes"></a>

### ValidatingWebhookConfigurationMetadataOutputReference <a name="ValidatingWebhookConfigurationMetadataOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resetGenerateName">reset_generate_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_generate_name` <a name="reset_generate_name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resetGenerateName"></a>

```python
def reset_generate_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.generateNameInput">generate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.generateName">generate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata">ValidatingWebhookConfigurationMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name_input`<sup>Optional</sup> <a name="generate_name_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.generateNameInput"></a>

```python
generate_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name`<sup>Required</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.internalValue"></a>

```python
internal_value: ValidatingWebhookConfigurationMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata">ValidatingWebhookConfigurationMetadata</a>

---


### ValidatingWebhookConfigurationWebhookClientConfigOutputReference <a name="ValidatingWebhookConfigurationWebhookClientConfigOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.putService">put_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resetCaBundle">reset_ca_bundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resetService">reset_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_service` <a name="put_service" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.putService"></a>

```python
def put_service(
  name: str,
  namespace: str,
  path: str = None,
  port: typing.Union[int, float] = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.putService.parameter.name"></a>

- *Type:* str

`name` is the name of the service. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#name ValidatingWebhookConfiguration#name}

---

###### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.putService.parameter.namespace"></a>

- *Type:* str

`namespace` is the namespace of the service. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#namespace ValidatingWebhookConfiguration#namespace}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.putService.parameter.path"></a>

- *Type:* str

`path` is an optional URL path which will be sent in any request to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#path ValidatingWebhookConfiguration#path}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.putService.parameter.port"></a>

- *Type:* typing.Union[int, float]

If specified, the port on the service that hosting webhook.

Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#port ValidatingWebhookConfiguration#port}

---

##### `reset_ca_bundle` <a name="reset_ca_bundle" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resetCaBundle"></a>

```python
def reset_ca_bundle() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resetService"></a>

```python
def reset_service() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.service">service</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference">ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.caBundleInput">ca_bundle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.serviceInput">service_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService">ValidatingWebhookConfigurationWebhookClientConfigService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.caBundle">ca_bundle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig">ValidatingWebhookConfigurationWebhookClientConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.service"></a>

```python
service: ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference">ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference</a>

---

##### `ca_bundle_input`<sup>Optional</sup> <a name="ca_bundle_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.caBundleInput"></a>

```python
ca_bundle_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.serviceInput"></a>

```python
service_input: ValidatingWebhookConfigurationWebhookClientConfigService
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService">ValidatingWebhookConfigurationWebhookClientConfigService</a>

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `ca_bundle`<sup>Required</sup> <a name="ca_bundle" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.caBundle"></a>

```python
ca_bundle: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.internalValue"></a>

```python
internal_value: ValidatingWebhookConfigurationWebhookClientConfig
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig">ValidatingWebhookConfigurationWebhookClientConfig</a>

---


### ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference <a name="ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService">ValidatingWebhookConfigurationWebhookClientConfigService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.internalValue"></a>

```python
internal_value: ValidatingWebhookConfigurationWebhookClientConfigService
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService">ValidatingWebhookConfigurationWebhookClientConfigService</a>

---


### ValidatingWebhookConfigurationWebhookList <a name="ValidatingWebhookConfigurationWebhookList" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ValidatingWebhookConfigurationWebhookOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook">ValidatingWebhookConfigurationWebhook</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ValidatingWebhookConfigurationWebhook]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook">ValidatingWebhookConfigurationWebhook</a>]

---


### ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList <a name="ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a>]

---


### ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference <a name="ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a>

---


### ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference <a name="ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.putMatchExpressions">put_match_expressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resetMatchExpressions">reset_match_expressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resetMatchLabels">reset_match_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match_expressions` <a name="put_match_expressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.putMatchExpressions"></a>

```python
def put_match_expressions(
  value: IResolvable | typing.List[ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a>]

---

##### `reset_match_expressions` <a name="reset_match_expressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resetMatchExpressions"></a>

```python
def reset_match_expressions() -> None
```

##### `reset_match_labels` <a name="reset_match_labels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resetMatchLabels"></a>

```python
def reset_match_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchExpressions">match_expressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList">ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchExpressionsInput">match_expressions_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchLabelsInput">match_labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchLabels">match_labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector">ValidatingWebhookConfigurationWebhookNamespaceSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_expressions`<sup>Required</sup> <a name="match_expressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchExpressions"></a>

```python
match_expressions: ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList">ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList</a>

---

##### `match_expressions_input`<sup>Optional</sup> <a name="match_expressions_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchExpressionsInput"></a>

```python
match_expressions_input: IResolvable | typing.List[ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a>]

---

##### `match_labels_input`<sup>Optional</sup> <a name="match_labels_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchLabelsInput"></a>

```python
match_labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `match_labels`<sup>Required</sup> <a name="match_labels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchLabels"></a>

```python
match_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.internalValue"></a>

```python
internal_value: ValidatingWebhookConfigurationWebhookNamespaceSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector">ValidatingWebhookConfigurationWebhookNamespaceSelector</a>

---


### ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList <a name="ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a>]

---


### ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference <a name="ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a>

---


### ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference <a name="ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.putMatchExpressions">put_match_expressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.resetMatchExpressions">reset_match_expressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.resetMatchLabels">reset_match_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match_expressions` <a name="put_match_expressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.putMatchExpressions"></a>

```python
def put_match_expressions(
  value: IResolvable | typing.List[ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a>]

---

##### `reset_match_expressions` <a name="reset_match_expressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.resetMatchExpressions"></a>

```python
def reset_match_expressions() -> None
```

##### `reset_match_labels` <a name="reset_match_labels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.resetMatchLabels"></a>

```python
def reset_match_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchExpressions">match_expressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList">ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchExpressionsInput">match_expressions_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchLabelsInput">match_labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchLabels">match_labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector">ValidatingWebhookConfigurationWebhookObjectSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_expressions`<sup>Required</sup> <a name="match_expressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchExpressions"></a>

```python
match_expressions: ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList">ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList</a>

---

##### `match_expressions_input`<sup>Optional</sup> <a name="match_expressions_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchExpressionsInput"></a>

```python
match_expressions_input: IResolvable | typing.List[ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a>]

---

##### `match_labels_input`<sup>Optional</sup> <a name="match_labels_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchLabelsInput"></a>

```python
match_labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `match_labels`<sup>Required</sup> <a name="match_labels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchLabels"></a>

```python
match_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.internalValue"></a>

```python
internal_value: ValidatingWebhookConfigurationWebhookObjectSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector">ValidatingWebhookConfigurationWebhookObjectSelector</a>

---


### ValidatingWebhookConfigurationWebhookOutputReference <a name="ValidatingWebhookConfigurationWebhookOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putClientConfig">put_client_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putNamespaceSelector">put_namespace_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putObjectSelector">put_object_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetAdmissionReviewVersions">reset_admission_review_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetFailurePolicy">reset_failure_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetMatchPolicy">reset_match_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetNamespaceSelector">reset_namespace_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetObjectSelector">reset_object_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetRule">reset_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetSideEffects">reset_side_effects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetTimeoutSeconds">reset_timeout_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_client_config` <a name="put_client_config" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putClientConfig"></a>

```python
def put_client_config(
  ca_bundle: str = None,
  service: ValidatingWebhookConfigurationWebhookClientConfigService = None,
  url: str = None
) -> None
```

###### `ca_bundle`<sup>Optional</sup> <a name="ca_bundle" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putClientConfig.parameter.caBundle"></a>

- *Type:* str

`caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate.

If unspecified, system trust roots on the apiserver are used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#ca_bundle ValidatingWebhookConfiguration#ca_bundle}

---

###### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putClientConfig.parameter.service"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService">ValidatingWebhookConfigurationWebhookClientConfigService</a>

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#service ValidatingWebhookConfiguration#service}

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putClientConfig.parameter.url"></a>

- *Type:* str

`url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`).

Exactly one of `url` or `service` must be specified.

The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.

Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.

The scheme must be "https"; the URL must begin with "https://".

A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.

Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#url ValidatingWebhookConfiguration#url}

---

##### `put_namespace_selector` <a name="put_namespace_selector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putNamespaceSelector"></a>

```python
def put_namespace_selector(
  match_expressions: IResolvable | typing.List[ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions] = None,
  match_labels: typing.Mapping[str] = None
) -> None
```

###### `match_expressions`<sup>Optional</sup> <a name="match_expressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putNamespaceSelector.parameter.matchExpressions"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a>]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#match_expressions ValidatingWebhookConfiguration#match_expressions}

---

###### `match_labels`<sup>Optional</sup> <a name="match_labels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putNamespaceSelector.parameter.matchLabels"></a>

- *Type:* typing.Mapping[str]

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#match_labels ValidatingWebhookConfiguration#match_labels}

---

##### `put_object_selector` <a name="put_object_selector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putObjectSelector"></a>

```python
def put_object_selector(
  match_expressions: IResolvable | typing.List[ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions] = None,
  match_labels: typing.Mapping[str] = None
) -> None
```

###### `match_expressions`<sup>Optional</sup> <a name="match_expressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putObjectSelector.parameter.matchExpressions"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a>]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#match_expressions ValidatingWebhookConfiguration#match_expressions}

---

###### `match_labels`<sup>Optional</sup> <a name="match_labels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putObjectSelector.parameter.matchLabels"></a>

- *Type:* typing.Mapping[str]

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#match_labels ValidatingWebhookConfiguration#match_labels}

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putRule"></a>

```python
def put_rule(
  value: IResolvable | typing.List[ValidatingWebhookConfigurationWebhookRule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule">ValidatingWebhookConfigurationWebhookRule</a>]

---

##### `reset_admission_review_versions` <a name="reset_admission_review_versions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetAdmissionReviewVersions"></a>

```python
def reset_admission_review_versions() -> None
```

##### `reset_failure_policy` <a name="reset_failure_policy" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetFailurePolicy"></a>

```python
def reset_failure_policy() -> None
```

##### `reset_match_policy` <a name="reset_match_policy" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetMatchPolicy"></a>

```python
def reset_match_policy() -> None
```

##### `reset_namespace_selector` <a name="reset_namespace_selector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetNamespaceSelector"></a>

```python
def reset_namespace_selector() -> None
```

##### `reset_object_selector` <a name="reset_object_selector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetObjectSelector"></a>

```python
def reset_object_selector() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetRule"></a>

```python
def reset_rule() -> None
```

##### `reset_side_effects` <a name="reset_side_effects" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetSideEffects"></a>

```python
def reset_side_effects() -> None
```

##### `reset_timeout_seconds` <a name="reset_timeout_seconds" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetTimeoutSeconds"></a>

```python
def reset_timeout_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.clientConfig">client_config</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference">ValidatingWebhookConfigurationWebhookClientConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.namespaceSelector">namespace_selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference">ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.objectSelector">object_selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference">ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList">ValidatingWebhookConfigurationWebhookRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.admissionReviewVersionsInput">admission_review_versions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.clientConfigInput">client_config_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig">ValidatingWebhookConfigurationWebhookClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.failurePolicyInput">failure_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.matchPolicyInput">match_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.namespaceSelectorInput">namespace_selector_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector">ValidatingWebhookConfigurationWebhookNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.objectSelectorInput">object_selector_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector">ValidatingWebhookConfigurationWebhookObjectSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.ruleInput">rule_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule">ValidatingWebhookConfigurationWebhookRule</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.sideEffectsInput">side_effects_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.timeoutSecondsInput">timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.admissionReviewVersions">admission_review_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.failurePolicy">failure_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.matchPolicy">match_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.sideEffects">side_effects</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook">ValidatingWebhookConfigurationWebhook</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_config`<sup>Required</sup> <a name="client_config" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.clientConfig"></a>

```python
client_config: ValidatingWebhookConfigurationWebhookClientConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference">ValidatingWebhookConfigurationWebhookClientConfigOutputReference</a>

---

##### `namespace_selector`<sup>Required</sup> <a name="namespace_selector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.namespaceSelector"></a>

```python
namespace_selector: ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference">ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference</a>

---

##### `object_selector`<sup>Required</sup> <a name="object_selector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.objectSelector"></a>

```python
object_selector: ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference">ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.rule"></a>

```python
rule: ValidatingWebhookConfigurationWebhookRuleList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList">ValidatingWebhookConfigurationWebhookRuleList</a>

---

##### `admission_review_versions_input`<sup>Optional</sup> <a name="admission_review_versions_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.admissionReviewVersionsInput"></a>

```python
admission_review_versions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_config_input`<sup>Optional</sup> <a name="client_config_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.clientConfigInput"></a>

```python
client_config_input: ValidatingWebhookConfigurationWebhookClientConfig
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig">ValidatingWebhookConfigurationWebhookClientConfig</a>

---

##### `failure_policy_input`<sup>Optional</sup> <a name="failure_policy_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.failurePolicyInput"></a>

```python
failure_policy_input: str
```

- *Type:* str

---

##### `match_policy_input`<sup>Optional</sup> <a name="match_policy_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.matchPolicyInput"></a>

```python
match_policy_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_selector_input`<sup>Optional</sup> <a name="namespace_selector_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.namespaceSelectorInput"></a>

```python
namespace_selector_input: ValidatingWebhookConfigurationWebhookNamespaceSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector">ValidatingWebhookConfigurationWebhookNamespaceSelector</a>

---

##### `object_selector_input`<sup>Optional</sup> <a name="object_selector_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.objectSelectorInput"></a>

```python
object_selector_input: ValidatingWebhookConfigurationWebhookObjectSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector">ValidatingWebhookConfigurationWebhookObjectSelector</a>

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.ruleInput"></a>

```python
rule_input: IResolvable | typing.List[ValidatingWebhookConfigurationWebhookRule]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule">ValidatingWebhookConfigurationWebhookRule</a>]

---

##### `side_effects_input`<sup>Optional</sup> <a name="side_effects_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.sideEffectsInput"></a>

```python
side_effects_input: str
```

- *Type:* str

---

##### `timeout_seconds_input`<sup>Optional</sup> <a name="timeout_seconds_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.timeoutSecondsInput"></a>

```python
timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `admission_review_versions`<sup>Required</sup> <a name="admission_review_versions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.admissionReviewVersions"></a>

```python
admission_review_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `failure_policy`<sup>Required</sup> <a name="failure_policy" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.failurePolicy"></a>

```python
failure_policy: str
```

- *Type:* str

---

##### `match_policy`<sup>Required</sup> <a name="match_policy" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.matchPolicy"></a>

```python
match_policy: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `side_effects`<sup>Required</sup> <a name="side_effects" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.sideEffects"></a>

```python
side_effects: str
```

- *Type:* str

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ValidatingWebhookConfigurationWebhook
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook">ValidatingWebhookConfigurationWebhook</a>

---


### ValidatingWebhookConfigurationWebhookRuleList <a name="ValidatingWebhookConfigurationWebhookRuleList" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ValidatingWebhookConfigurationWebhookRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule">ValidatingWebhookConfigurationWebhookRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ValidatingWebhookConfigurationWebhookRule]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule">ValidatingWebhookConfigurationWebhookRule</a>]

---


### ValidatingWebhookConfigurationWebhookRuleOutputReference <a name="ValidatingWebhookConfigurationWebhookRuleOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import validating_webhook_configuration

validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.resetScope">reset_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.apiGroupsInput">api_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.apiVersionsInput">api_versions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.operationsInput">operations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.apiGroups">api_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.apiVersions">api_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.operations">operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule">ValidatingWebhookConfigurationWebhookRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_groups_input`<sup>Optional</sup> <a name="api_groups_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.apiGroupsInput"></a>

```python
api_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_versions_input`<sup>Optional</sup> <a name="api_versions_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.apiVersionsInput"></a>

```python
api_versions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operations_input`<sup>Optional</sup> <a name="operations_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.operationsInput"></a>

```python
operations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `api_groups`<sup>Required</sup> <a name="api_groups" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.apiGroups"></a>

```python
api_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_versions`<sup>Required</sup> <a name="api_versions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.apiVersions"></a>

```python
api_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.operations"></a>

```python
operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ValidatingWebhookConfigurationWebhookRule
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule">ValidatingWebhookConfigurationWebhookRule</a>

---



