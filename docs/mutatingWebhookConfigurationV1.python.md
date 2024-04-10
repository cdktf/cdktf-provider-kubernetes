# `mutatingWebhookConfigurationV1` Submodule <a name="`mutatingWebhookConfigurationV1` Submodule" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MutatingWebhookConfigurationV1 <a name="MutatingWebhookConfigurationV1" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1 kubernetes_mutating_webhook_configuration_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: MutatingWebhookConfigurationV1Metadata,
  webhook: typing.Union[IResolvable, typing.List[MutatingWebhookConfigurationV1Webhook]],
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata">MutatingWebhookConfigurationV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.webhook">webhook</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook">MutatingWebhookConfigurationV1Webhook</a>]]</code> | webhook block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#id MutatingWebhookConfigurationV1#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata">MutatingWebhookConfigurationV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#metadata MutatingWebhookConfigurationV1#metadata}

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.webhook"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook">MutatingWebhookConfigurationV1Webhook</a>]]

webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#webhook MutatingWebhookConfigurationV1#webhook}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#id MutatingWebhookConfigurationV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.putWebhook">put_webhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.putMetadata"></a>

```python
def put_metadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.putMetadata.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the mutating webhook configuration that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#annotations MutatingWebhookConfigurationV1#annotations}

---

###### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.putMetadata.parameter.generateName"></a>

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#generate_name MutatingWebhookConfigurationV1#generate_name}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the mutating webhook configuration.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#labels MutatingWebhookConfigurationV1#labels}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.putMetadata.parameter.name"></a>

- *Type:* str

Name of the mutating webhook configuration, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#name MutatingWebhookConfigurationV1#name}

---

##### `put_webhook` <a name="put_webhook" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.putWebhook"></a>

```python
def put_webhook(
  value: typing.Union[IResolvable, typing.List[MutatingWebhookConfigurationV1Webhook]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.putWebhook.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook">MutatingWebhookConfigurationV1Webhook</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MutatingWebhookConfigurationV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MutatingWebhookConfigurationV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MutatingWebhookConfigurationV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MutatingWebhookConfigurationV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MutatingWebhookConfigurationV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference">MutatingWebhookConfigurationV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.webhook">webhook</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList">MutatingWebhookConfigurationV1WebhookList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata">MutatingWebhookConfigurationV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.webhookInput">webhook_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook">MutatingWebhookConfigurationV1Webhook</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.metadata"></a>

```python
metadata: MutatingWebhookConfigurationV1MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference">MutatingWebhookConfigurationV1MetadataOutputReference</a>

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.webhook"></a>

```python
webhook: MutatingWebhookConfigurationV1WebhookList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList">MutatingWebhookConfigurationV1WebhookList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.metadataInput"></a>

```python
metadata_input: MutatingWebhookConfigurationV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata">MutatingWebhookConfigurationV1Metadata</a>

---

##### `webhook_input`<sup>Optional</sup> <a name="webhook_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.webhookInput"></a>

```python
webhook_input: typing.Union[IResolvable, typing.List[MutatingWebhookConfigurationV1Webhook]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook">MutatingWebhookConfigurationV1Webhook</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MutatingWebhookConfigurationV1Config <a name="MutatingWebhookConfigurationV1Config" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: MutatingWebhookConfigurationV1Metadata,
  webhook: typing.Union[IResolvable, typing.List[MutatingWebhookConfigurationV1Webhook]],
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata">MutatingWebhookConfigurationV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.webhook">webhook</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook">MutatingWebhookConfigurationV1Webhook</a>]]</code> | webhook block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#id MutatingWebhookConfigurationV1#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.metadata"></a>

```python
metadata: MutatingWebhookConfigurationV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata">MutatingWebhookConfigurationV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#metadata MutatingWebhookConfigurationV1#metadata}

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.webhook"></a>

```python
webhook: typing.Union[IResolvable, typing.List[MutatingWebhookConfigurationV1Webhook]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook">MutatingWebhookConfigurationV1Webhook</a>]]

webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#webhook MutatingWebhookConfigurationV1#webhook}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#id MutatingWebhookConfigurationV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### MutatingWebhookConfigurationV1Metadata <a name="MutatingWebhookConfigurationV1Metadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | An unstructured key value map stored with the mutating webhook configuration that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata.property.generateName">generate_name</a></code> | <code>str</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the mutating webhook configuration. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata.property.name">name</a></code> | <code>str</code> | Name of the mutating webhook configuration, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the mutating webhook configuration that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#annotations MutatingWebhookConfigurationV1#annotations}

---

##### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#generate_name MutatingWebhookConfigurationV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the mutating webhook configuration.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#labels MutatingWebhookConfigurationV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the mutating webhook configuration, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#name MutatingWebhookConfigurationV1#name}

---

### MutatingWebhookConfigurationV1Webhook <a name="MutatingWebhookConfigurationV1Webhook" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook(
  client_config: MutatingWebhookConfigurationV1WebhookClientConfig,
  name: str,
  admission_review_versions: typing.List[str] = None,
  failure_policy: str = None,
  match_policy: str = None,
  namespace_selector: MutatingWebhookConfigurationV1WebhookNamespaceSelector = None,
  object_selector: MutatingWebhookConfigurationV1WebhookObjectSelector = None,
  reinvocation_policy: str = None,
  rule: typing.Union[IResolvable, typing.List[MutatingWebhookConfigurationV1WebhookRule]] = None,
  side_effects: str = None,
  timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.clientConfig">client_config</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig">MutatingWebhookConfigurationV1WebhookClientConfig</a></code> | client_config block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.name">name</a></code> | <code>str</code> | The name of the admission webhook. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.admissionReviewVersions">admission_review_versions</a></code> | <code>typing.List[str]</code> | AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.failurePolicy">failure_policy</a></code> | <code>str</code> | FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.matchPolicy">match_policy</a></code> | <code>str</code> | matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent". |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.namespaceSelector">namespace_selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector">MutatingWebhookConfigurationV1WebhookNamespaceSelector</a></code> | namespace_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.objectSelector">object_selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector">MutatingWebhookConfigurationV1WebhookObjectSelector</a></code> | object_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.reinvocationPolicy">reinvocation_policy</a></code> | <code>str</code> | reinvocationPolicy indicates whether this webhook should be called multiple times as part of a single admission evaluation. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule">MutatingWebhookConfigurationV1WebhookRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.sideEffects">side_effects</a></code> | <code>str</code> | SideEffects states whether this webhook has side effects. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | TimeoutSeconds specifies the timeout for this webhook. |

---

##### `client_config`<sup>Required</sup> <a name="client_config" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.clientConfig"></a>

```python
client_config: MutatingWebhookConfigurationV1WebhookClientConfig
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig">MutatingWebhookConfigurationV1WebhookClientConfig</a>

client_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#client_config MutatingWebhookConfigurationV1#client_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the admission webhook.

Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#name MutatingWebhookConfigurationV1#name}

---

##### `admission_review_versions`<sup>Optional</sup> <a name="admission_review_versions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.admissionReviewVersions"></a>

```python
admission_review_versions: typing.List[str]
```

- *Type:* typing.List[str]

AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects.

API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#admission_review_versions MutatingWebhookConfigurationV1#admission_review_versions}

---

##### `failure_policy`<sup>Optional</sup> <a name="failure_policy" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.failurePolicy"></a>

```python
failure_policy: str
```

- *Type:* str

FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail.

Defaults to Fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#failure_policy MutatingWebhookConfigurationV1#failure_policy}

---

##### `match_policy`<sup>Optional</sup> <a name="match_policy" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.matchPolicy"></a>

```python
match_policy: str
```

- *Type:* str

matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".

* Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.
* Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.

Defaults to "Equivalent"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#match_policy MutatingWebhookConfigurationV1#match_policy}

---

##### `namespace_selector`<sup>Optional</sup> <a name="namespace_selector" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.namespaceSelector"></a>

```python
namespace_selector: MutatingWebhookConfigurationV1WebhookNamespaceSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector">MutatingWebhookConfigurationV1WebhookNamespaceSelector</a>

namespace_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#namespace_selector MutatingWebhookConfigurationV1#namespace_selector}

---

##### `object_selector`<sup>Optional</sup> <a name="object_selector" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.objectSelector"></a>

```python
object_selector: MutatingWebhookConfigurationV1WebhookObjectSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector">MutatingWebhookConfigurationV1WebhookObjectSelector</a>

object_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#object_selector MutatingWebhookConfigurationV1#object_selector}

---

##### `reinvocation_policy`<sup>Optional</sup> <a name="reinvocation_policy" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.reinvocationPolicy"></a>

```python
reinvocation_policy: str
```

- *Type:* str

reinvocationPolicy indicates whether this webhook should be called multiple times as part of a single admission evaluation.

Allowed values are "Never" and "IfNeeded".

Never: the webhook will not be called more than once in a single admission evaluation.

IfNeeded: the webhook will be called at least one additional time as part of the admission evaluation if the object being admitted is modified by other admission plugins after the initial webhook call. Webhooks that specify this option *must* be idempotent, able to process objects they previously admitted. Note: * the number of additional invocations is not guaranteed to be exactly one. * if additional invocations result in further modifications to the object, webhooks are not guaranteed to be invoked again. * webhooks that use this option may be reordered to minimize the number of additional invocations. * to validate an object after all mutations are guaranteed complete, use a validating admission webhook instead.

Defaults to "Never".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#reinvocation_policy MutatingWebhookConfigurationV1#reinvocation_policy}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[MutatingWebhookConfigurationV1WebhookRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule">MutatingWebhookConfigurationV1WebhookRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#rule MutatingWebhookConfigurationV1#rule}

---

##### `side_effects`<sup>Optional</sup> <a name="side_effects" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.sideEffects"></a>

```python
side_effects: str
```

- *Type:* str

SideEffects states whether this webhook has side effects.

Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#side_effects MutatingWebhookConfigurationV1#side_effects}

---

##### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

TimeoutSeconds specifies the timeout for this webhook.

After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#timeout_seconds MutatingWebhookConfigurationV1#timeout_seconds}

---

### MutatingWebhookConfigurationV1WebhookClientConfig <a name="MutatingWebhookConfigurationV1WebhookClientConfig" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig(
  ca_bundle: str = None,
  service: MutatingWebhookConfigurationV1WebhookClientConfigService = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig.property.caBundle">ca_bundle</a></code> | <code>str</code> | `caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig.property.service">service</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService">MutatingWebhookConfigurationV1WebhookClientConfigService</a></code> | service block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig.property.url">url</a></code> | <code>str</code> | `url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`). |

---

##### `ca_bundle`<sup>Optional</sup> <a name="ca_bundle" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig.property.caBundle"></a>

```python
ca_bundle: str
```

- *Type:* str

`caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate.

If unspecified, system trust roots on the apiserver are used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#ca_bundle MutatingWebhookConfigurationV1#ca_bundle}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig.property.service"></a>

```python
service: MutatingWebhookConfigurationV1WebhookClientConfigService
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService">MutatingWebhookConfigurationV1WebhookClientConfigService</a>

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#service MutatingWebhookConfigurationV1#service}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig.property.url"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#url MutatingWebhookConfigurationV1#url}

---

### MutatingWebhookConfigurationV1WebhookClientConfigService <a name="MutatingWebhookConfigurationV1WebhookClientConfigService" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService(
  name: str,
  namespace: str,
  path: str = None,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService.property.name">name</a></code> | <code>str</code> | `name` is the name of the service. Required. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService.property.namespace">namespace</a></code> | <code>str</code> | `namespace` is the namespace of the service. Required. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService.property.path">path</a></code> | <code>str</code> | `path` is an optional URL path which will be sent in any request to this service. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService.property.port">port</a></code> | <code>typing.Union[int, float]</code> | If specified, the port on the service that hosting webhook. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService.property.name"></a>

```python
name: str
```

- *Type:* str

`name` is the name of the service. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#name MutatingWebhookConfigurationV1#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

`namespace` is the namespace of the service. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#namespace MutatingWebhookConfigurationV1#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService.property.path"></a>

```python
path: str
```

- *Type:* str

`path` is an optional URL path which will be sent in any request to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#path MutatingWebhookConfigurationV1#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If specified, the port on the service that hosting webhook.

Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#port MutatingWebhookConfigurationV1#port}

---

### MutatingWebhookConfigurationV1WebhookNamespaceSelector <a name="MutatingWebhookConfigurationV1WebhookNamespaceSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector(
  match_expressions: typing.Union[IResolvable, typing.List[MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions]] = None,
  match_labels: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector.property.matchExpressions">match_expressions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions</a>]]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector.property.matchLabels">match_labels</a></code> | <code>typing.Mapping[str]</code> | A map of {key,value} pairs. |

---

##### `match_expressions`<sup>Optional</sup> <a name="match_expressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector.property.matchExpressions"></a>

```python
match_expressions: typing.Union[IResolvable, typing.List[MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions</a>]]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#match_expressions MutatingWebhookConfigurationV1#match_expressions}

---

##### `match_labels`<sup>Optional</sup> <a name="match_labels" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector.property.matchLabels"></a>

```python
match_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#match_labels MutatingWebhookConfigurationV1#match_labels}

---

### MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions <a name="MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions(
  key: str = None,
  operator: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions.property.key">key</a></code> | <code>str</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions.property.operator">operator</a></code> | <code>str</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions.property.values">values</a></code> | <code>typing.List[str]</code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions.property.key"></a>

```python
key: str
```

- *Type:* str

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#key MutatingWebhookConfigurationV1#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions.property.operator"></a>

```python
operator: str
```

- *Type:* str

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#operator MutatingWebhookConfigurationV1#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#values MutatingWebhookConfigurationV1#values}

---

### MutatingWebhookConfigurationV1WebhookObjectSelector <a name="MutatingWebhookConfigurationV1WebhookObjectSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector(
  match_expressions: typing.Union[IResolvable, typing.List[MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions]] = None,
  match_labels: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector.property.matchExpressions">match_expressions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions</a>]]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector.property.matchLabels">match_labels</a></code> | <code>typing.Mapping[str]</code> | A map of {key,value} pairs. |

---

##### `match_expressions`<sup>Optional</sup> <a name="match_expressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector.property.matchExpressions"></a>

```python
match_expressions: typing.Union[IResolvable, typing.List[MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions</a>]]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#match_expressions MutatingWebhookConfigurationV1#match_expressions}

---

##### `match_labels`<sup>Optional</sup> <a name="match_labels" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector.property.matchLabels"></a>

```python
match_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#match_labels MutatingWebhookConfigurationV1#match_labels}

---

### MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions <a name="MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions(
  key: str = None,
  operator: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions.property.key">key</a></code> | <code>str</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions.property.operator">operator</a></code> | <code>str</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions.property.values">values</a></code> | <code>typing.List[str]</code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions.property.key"></a>

```python
key: str
```

- *Type:* str

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#key MutatingWebhookConfigurationV1#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions.property.operator"></a>

```python
operator: str
```

- *Type:* str

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#operator MutatingWebhookConfigurationV1#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#values MutatingWebhookConfigurationV1#values}

---

### MutatingWebhookConfigurationV1WebhookRule <a name="MutatingWebhookConfigurationV1WebhookRule" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule(
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
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule.property.apiGroups">api_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#api_groups MutatingWebhookConfigurationV1#api_groups}. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule.property.apiVersions">api_versions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#api_versions MutatingWebhookConfigurationV1#api_versions}. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule.property.operations">operations</a></code> | <code>typing.List[str]</code> | Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule.property.resources">resources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#resources MutatingWebhookConfigurationV1#resources}. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#scope MutatingWebhookConfigurationV1#scope}. |

---

##### `api_groups`<sup>Required</sup> <a name="api_groups" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule.property.apiGroups"></a>

```python
api_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#api_groups MutatingWebhookConfigurationV1#api_groups}.

---

##### `api_versions`<sup>Required</sup> <a name="api_versions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule.property.apiVersions"></a>

```python
api_versions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#api_versions MutatingWebhookConfigurationV1#api_versions}.

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule.property.operations"></a>

```python
operations: typing.List[str]
```

- *Type:* typing.List[str]

Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added.

If '*' is present, the length of the slice must be one. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#operations MutatingWebhookConfigurationV1#operations}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#resources MutatingWebhookConfigurationV1#resources}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#scope MutatingWebhookConfigurationV1#scope}.

---

## Classes <a name="Classes" id="Classes"></a>

### MutatingWebhookConfigurationV1MetadataOutputReference <a name="MutatingWebhookConfigurationV1MetadataOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.resetGenerateName">reset_generate_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_generate_name` <a name="reset_generate_name" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.resetGenerateName"></a>

```python
def reset_generate_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.generateNameInput">generate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.generateName">generate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata">MutatingWebhookConfigurationV1Metadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name_input`<sup>Optional</sup> <a name="generate_name_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.generateNameInput"></a>

```python
generate_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name`<sup>Required</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.internalValue"></a>

```python
internal_value: MutatingWebhookConfigurationV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata">MutatingWebhookConfigurationV1Metadata</a>

---


### MutatingWebhookConfigurationV1WebhookClientConfigOutputReference <a name="MutatingWebhookConfigurationV1WebhookClientConfigOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.putService">put_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.resetCaBundle">reset_ca_bundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.resetService">reset_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_service` <a name="put_service" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.putService"></a>

```python
def put_service(
  name: str,
  namespace: str,
  path: str = None,
  port: typing.Union[int, float] = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.putService.parameter.name"></a>

- *Type:* str

`name` is the name of the service. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#name MutatingWebhookConfigurationV1#name}

---

###### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.putService.parameter.namespace"></a>

- *Type:* str

`namespace` is the namespace of the service. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#namespace MutatingWebhookConfigurationV1#namespace}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.putService.parameter.path"></a>

- *Type:* str

`path` is an optional URL path which will be sent in any request to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#path MutatingWebhookConfigurationV1#path}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.putService.parameter.port"></a>

- *Type:* typing.Union[int, float]

If specified, the port on the service that hosting webhook.

Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#port MutatingWebhookConfigurationV1#port}

---

##### `reset_ca_bundle` <a name="reset_ca_bundle" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.resetCaBundle"></a>

```python
def reset_ca_bundle() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.resetService"></a>

```python
def reset_service() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.service">service</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference">MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.caBundleInput">ca_bundle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.serviceInput">service_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService">MutatingWebhookConfigurationV1WebhookClientConfigService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.caBundle">ca_bundle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig">MutatingWebhookConfigurationV1WebhookClientConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.service"></a>

```python
service: MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference">MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference</a>

---

##### `ca_bundle_input`<sup>Optional</sup> <a name="ca_bundle_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.caBundleInput"></a>

```python
ca_bundle_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.serviceInput"></a>

```python
service_input: MutatingWebhookConfigurationV1WebhookClientConfigService
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService">MutatingWebhookConfigurationV1WebhookClientConfigService</a>

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `ca_bundle`<sup>Required</sup> <a name="ca_bundle" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.caBundle"></a>

```python
ca_bundle: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.internalValue"></a>

```python
internal_value: MutatingWebhookConfigurationV1WebhookClientConfig
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig">MutatingWebhookConfigurationV1WebhookClientConfig</a>

---


### MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference <a name="MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService">MutatingWebhookConfigurationV1WebhookClientConfigService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.internalValue"></a>

```python
internal_value: MutatingWebhookConfigurationV1WebhookClientConfigService
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService">MutatingWebhookConfigurationV1WebhookClientConfigService</a>

---


### MutatingWebhookConfigurationV1WebhookList <a name="MutatingWebhookConfigurationV1WebhookList" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MutatingWebhookConfigurationV1WebhookOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook">MutatingWebhookConfigurationV1Webhook</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MutatingWebhookConfigurationV1Webhook]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook">MutatingWebhookConfigurationV1Webhook</a>]]

---


### MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList <a name="MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions</a>]]

---


### MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference <a name="MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions</a>]

---


### MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference <a name="MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.putMatchExpressions">put_match_expressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.resetMatchExpressions">reset_match_expressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.resetMatchLabels">reset_match_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match_expressions` <a name="put_match_expressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.putMatchExpressions"></a>

```python
def put_match_expressions(
  value: typing.Union[IResolvable, typing.List[MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions</a>]]

---

##### `reset_match_expressions` <a name="reset_match_expressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.resetMatchExpressions"></a>

```python
def reset_match_expressions() -> None
```

##### `reset_match_labels` <a name="reset_match_labels" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.resetMatchLabels"></a>

```python
def reset_match_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchExpressions">match_expressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList">MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchExpressionsInput">match_expressions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchLabelsInput">match_labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchLabels">match_labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector">MutatingWebhookConfigurationV1WebhookNamespaceSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_expressions`<sup>Required</sup> <a name="match_expressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchExpressions"></a>

```python
match_expressions: MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList">MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList</a>

---

##### `match_expressions_input`<sup>Optional</sup> <a name="match_expressions_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchExpressionsInput"></a>

```python
match_expressions_input: typing.Union[IResolvable, typing.List[MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions</a>]]

---

##### `match_labels_input`<sup>Optional</sup> <a name="match_labels_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchLabelsInput"></a>

```python
match_labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `match_labels`<sup>Required</sup> <a name="match_labels" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchLabels"></a>

```python
match_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.internalValue"></a>

```python
internal_value: MutatingWebhookConfigurationV1WebhookNamespaceSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector">MutatingWebhookConfigurationV1WebhookNamespaceSelector</a>

---


### MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList <a name="MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions</a>]]

---


### MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference <a name="MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions</a>]

---


### MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference <a name="MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.putMatchExpressions">put_match_expressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.resetMatchExpressions">reset_match_expressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.resetMatchLabels">reset_match_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match_expressions` <a name="put_match_expressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.putMatchExpressions"></a>

```python
def put_match_expressions(
  value: typing.Union[IResolvable, typing.List[MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions</a>]]

---

##### `reset_match_expressions` <a name="reset_match_expressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.resetMatchExpressions"></a>

```python
def reset_match_expressions() -> None
```

##### `reset_match_labels` <a name="reset_match_labels" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.resetMatchLabels"></a>

```python
def reset_match_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchExpressions">match_expressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList">MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchExpressionsInput">match_expressions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchLabelsInput">match_labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchLabels">match_labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector">MutatingWebhookConfigurationV1WebhookObjectSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_expressions`<sup>Required</sup> <a name="match_expressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchExpressions"></a>

```python
match_expressions: MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList">MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList</a>

---

##### `match_expressions_input`<sup>Optional</sup> <a name="match_expressions_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchExpressionsInput"></a>

```python
match_expressions_input: typing.Union[IResolvable, typing.List[MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions</a>]]

---

##### `match_labels_input`<sup>Optional</sup> <a name="match_labels_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchLabelsInput"></a>

```python
match_labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `match_labels`<sup>Required</sup> <a name="match_labels" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchLabels"></a>

```python
match_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.internalValue"></a>

```python
internal_value: MutatingWebhookConfigurationV1WebhookObjectSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector">MutatingWebhookConfigurationV1WebhookObjectSelector</a>

---


### MutatingWebhookConfigurationV1WebhookOutputReference <a name="MutatingWebhookConfigurationV1WebhookOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putClientConfig">put_client_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putNamespaceSelector">put_namespace_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putObjectSelector">put_object_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetAdmissionReviewVersions">reset_admission_review_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetFailurePolicy">reset_failure_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetMatchPolicy">reset_match_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetNamespaceSelector">reset_namespace_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetObjectSelector">reset_object_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetReinvocationPolicy">reset_reinvocation_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetRule">reset_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetSideEffects">reset_side_effects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetTimeoutSeconds">reset_timeout_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_client_config` <a name="put_client_config" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putClientConfig"></a>

```python
def put_client_config(
  ca_bundle: str = None,
  service: MutatingWebhookConfigurationV1WebhookClientConfigService = None,
  url: str = None
) -> None
```

###### `ca_bundle`<sup>Optional</sup> <a name="ca_bundle" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putClientConfig.parameter.caBundle"></a>

- *Type:* str

`caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate.

If unspecified, system trust roots on the apiserver are used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#ca_bundle MutatingWebhookConfigurationV1#ca_bundle}

---

###### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putClientConfig.parameter.service"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService">MutatingWebhookConfigurationV1WebhookClientConfigService</a>

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#service MutatingWebhookConfigurationV1#service}

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putClientConfig.parameter.url"></a>

- *Type:* str

`url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`).

Exactly one of `url` or `service` must be specified.

The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.

Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.

The scheme must be "https"; the URL must begin with "https://".

A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.

Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#url MutatingWebhookConfigurationV1#url}

---

##### `put_namespace_selector` <a name="put_namespace_selector" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putNamespaceSelector"></a>

```python
def put_namespace_selector(
  match_expressions: typing.Union[IResolvable, typing.List[MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions]] = None,
  match_labels: typing.Mapping[str] = None
) -> None
```

###### `match_expressions`<sup>Optional</sup> <a name="match_expressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putNamespaceSelector.parameter.matchExpressions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions</a>]]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#match_expressions MutatingWebhookConfigurationV1#match_expressions}

---

###### `match_labels`<sup>Optional</sup> <a name="match_labels" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putNamespaceSelector.parameter.matchLabels"></a>

- *Type:* typing.Mapping[str]

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#match_labels MutatingWebhookConfigurationV1#match_labels}

---

##### `put_object_selector` <a name="put_object_selector" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putObjectSelector"></a>

```python
def put_object_selector(
  match_expressions: typing.Union[IResolvable, typing.List[MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions]] = None,
  match_labels: typing.Mapping[str] = None
) -> None
```

###### `match_expressions`<sup>Optional</sup> <a name="match_expressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putObjectSelector.parameter.matchExpressions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions</a>]]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#match_expressions MutatingWebhookConfigurationV1#match_expressions}

---

###### `match_labels`<sup>Optional</sup> <a name="match_labels" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putObjectSelector.parameter.matchLabels"></a>

- *Type:* typing.Mapping[str]

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/mutating_webhook_configuration_v1#match_labels MutatingWebhookConfigurationV1#match_labels}

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[MutatingWebhookConfigurationV1WebhookRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule">MutatingWebhookConfigurationV1WebhookRule</a>]]

---

##### `reset_admission_review_versions` <a name="reset_admission_review_versions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetAdmissionReviewVersions"></a>

```python
def reset_admission_review_versions() -> None
```

##### `reset_failure_policy` <a name="reset_failure_policy" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetFailurePolicy"></a>

```python
def reset_failure_policy() -> None
```

##### `reset_match_policy` <a name="reset_match_policy" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetMatchPolicy"></a>

```python
def reset_match_policy() -> None
```

##### `reset_namespace_selector` <a name="reset_namespace_selector" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetNamespaceSelector"></a>

```python
def reset_namespace_selector() -> None
```

##### `reset_object_selector` <a name="reset_object_selector" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetObjectSelector"></a>

```python
def reset_object_selector() -> None
```

##### `reset_reinvocation_policy` <a name="reset_reinvocation_policy" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetReinvocationPolicy"></a>

```python
def reset_reinvocation_policy() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetRule"></a>

```python
def reset_rule() -> None
```

##### `reset_side_effects` <a name="reset_side_effects" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetSideEffects"></a>

```python
def reset_side_effects() -> None
```

##### `reset_timeout_seconds` <a name="reset_timeout_seconds" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetTimeoutSeconds"></a>

```python
def reset_timeout_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.clientConfig">client_config</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference">MutatingWebhookConfigurationV1WebhookClientConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.namespaceSelector">namespace_selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference">MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.objectSelector">object_selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference">MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList">MutatingWebhookConfigurationV1WebhookRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.admissionReviewVersionsInput">admission_review_versions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.clientConfigInput">client_config_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig">MutatingWebhookConfigurationV1WebhookClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.failurePolicyInput">failure_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.matchPolicyInput">match_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.namespaceSelectorInput">namespace_selector_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector">MutatingWebhookConfigurationV1WebhookNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.objectSelectorInput">object_selector_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector">MutatingWebhookConfigurationV1WebhookObjectSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.reinvocationPolicyInput">reinvocation_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule">MutatingWebhookConfigurationV1WebhookRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.sideEffectsInput">side_effects_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.timeoutSecondsInput">timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.admissionReviewVersions">admission_review_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.failurePolicy">failure_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.matchPolicy">match_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.reinvocationPolicy">reinvocation_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.sideEffects">side_effects</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook">MutatingWebhookConfigurationV1Webhook</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_config`<sup>Required</sup> <a name="client_config" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.clientConfig"></a>

```python
client_config: MutatingWebhookConfigurationV1WebhookClientConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference">MutatingWebhookConfigurationV1WebhookClientConfigOutputReference</a>

---

##### `namespace_selector`<sup>Required</sup> <a name="namespace_selector" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.namespaceSelector"></a>

```python
namespace_selector: MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference">MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference</a>

---

##### `object_selector`<sup>Required</sup> <a name="object_selector" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.objectSelector"></a>

```python
object_selector: MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference">MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.rule"></a>

```python
rule: MutatingWebhookConfigurationV1WebhookRuleList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList">MutatingWebhookConfigurationV1WebhookRuleList</a>

---

##### `admission_review_versions_input`<sup>Optional</sup> <a name="admission_review_versions_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.admissionReviewVersionsInput"></a>

```python
admission_review_versions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_config_input`<sup>Optional</sup> <a name="client_config_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.clientConfigInput"></a>

```python
client_config_input: MutatingWebhookConfigurationV1WebhookClientConfig
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig">MutatingWebhookConfigurationV1WebhookClientConfig</a>

---

##### `failure_policy_input`<sup>Optional</sup> <a name="failure_policy_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.failurePolicyInput"></a>

```python
failure_policy_input: str
```

- *Type:* str

---

##### `match_policy_input`<sup>Optional</sup> <a name="match_policy_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.matchPolicyInput"></a>

```python
match_policy_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_selector_input`<sup>Optional</sup> <a name="namespace_selector_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.namespaceSelectorInput"></a>

```python
namespace_selector_input: MutatingWebhookConfigurationV1WebhookNamespaceSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector">MutatingWebhookConfigurationV1WebhookNamespaceSelector</a>

---

##### `object_selector_input`<sup>Optional</sup> <a name="object_selector_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.objectSelectorInput"></a>

```python
object_selector_input: MutatingWebhookConfigurationV1WebhookObjectSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector">MutatingWebhookConfigurationV1WebhookObjectSelector</a>

---

##### `reinvocation_policy_input`<sup>Optional</sup> <a name="reinvocation_policy_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.reinvocationPolicyInput"></a>

```python
reinvocation_policy_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[MutatingWebhookConfigurationV1WebhookRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule">MutatingWebhookConfigurationV1WebhookRule</a>]]

---

##### `side_effects_input`<sup>Optional</sup> <a name="side_effects_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.sideEffectsInput"></a>

```python
side_effects_input: str
```

- *Type:* str

---

##### `timeout_seconds_input`<sup>Optional</sup> <a name="timeout_seconds_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.timeoutSecondsInput"></a>

```python
timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `admission_review_versions`<sup>Required</sup> <a name="admission_review_versions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.admissionReviewVersions"></a>

```python
admission_review_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `failure_policy`<sup>Required</sup> <a name="failure_policy" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.failurePolicy"></a>

```python
failure_policy: str
```

- *Type:* str

---

##### `match_policy`<sup>Required</sup> <a name="match_policy" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.matchPolicy"></a>

```python
match_policy: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reinvocation_policy`<sup>Required</sup> <a name="reinvocation_policy" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.reinvocationPolicy"></a>

```python
reinvocation_policy: str
```

- *Type:* str

---

##### `side_effects`<sup>Required</sup> <a name="side_effects" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.sideEffects"></a>

```python
side_effects: str
```

- *Type:* str

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MutatingWebhookConfigurationV1Webhook]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook">MutatingWebhookConfigurationV1Webhook</a>]

---


### MutatingWebhookConfigurationV1WebhookRuleList <a name="MutatingWebhookConfigurationV1WebhookRuleList" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MutatingWebhookConfigurationV1WebhookRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule">MutatingWebhookConfigurationV1WebhookRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MutatingWebhookConfigurationV1WebhookRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule">MutatingWebhookConfigurationV1WebhookRule</a>]]

---


### MutatingWebhookConfigurationV1WebhookRuleOutputReference <a name="MutatingWebhookConfigurationV1WebhookRuleOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import mutating_webhook_configuration_v1

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.resetScope">reset_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiGroupsInput">api_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiVersionsInput">api_versions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.operationsInput">operations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiGroups">api_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiVersions">api_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.operations">operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule">MutatingWebhookConfigurationV1WebhookRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_groups_input`<sup>Optional</sup> <a name="api_groups_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiGroupsInput"></a>

```python
api_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_versions_input`<sup>Optional</sup> <a name="api_versions_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiVersionsInput"></a>

```python
api_versions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operations_input`<sup>Optional</sup> <a name="operations_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.operationsInput"></a>

```python
operations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `api_groups`<sup>Required</sup> <a name="api_groups" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiGroups"></a>

```python
api_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_versions`<sup>Required</sup> <a name="api_versions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiVersions"></a>

```python
api_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.operations"></a>

```python
operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MutatingWebhookConfigurationV1WebhookRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule">MutatingWebhookConfigurationV1WebhookRule</a>]

---



