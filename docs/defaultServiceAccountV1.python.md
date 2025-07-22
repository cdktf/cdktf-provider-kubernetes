# `defaultServiceAccountV1` Submodule <a name="`defaultServiceAccountV1` Submodule" id="@cdktf/provider-kubernetes.defaultServiceAccountV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultServiceAccountV1 <a name="DefaultServiceAccountV1" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1 kubernetes_default_service_account_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import default_service_account_v1

defaultServiceAccountV1.DefaultServiceAccountV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: DefaultServiceAccountV1Metadata,
  automount_service_account_token: typing.Union[bool, IResolvable] = None,
  id: str = None,
  image_pull_secret: typing.Union[IResolvable, typing.List[DefaultServiceAccountV1ImagePullSecret]] = None,
  secret: typing.Union[IResolvable, typing.List[DefaultServiceAccountV1Secret]] = None,
  timeouts: DefaultServiceAccountV1Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata">DefaultServiceAccountV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.automountServiceAccountToken">automount_service_account_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable automatic mounting of the service account token. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#id DefaultServiceAccountV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.imagePullSecret">image_pull_secret</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret">DefaultServiceAccountV1ImagePullSecret</a>]]</code> | image_pull_secret block. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.secret">secret</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret">DefaultServiceAccountV1Secret</a>]]</code> | secret block. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts">DefaultServiceAccountV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata">DefaultServiceAccountV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#metadata DefaultServiceAccountV1#metadata}

---

##### `automount_service_account_token`<sup>Optional</sup> <a name="automount_service_account_token" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.automountServiceAccountToken"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable automatic mounting of the service account token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#automount_service_account_token DefaultServiceAccountV1#automount_service_account_token}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#id DefaultServiceAccountV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_pull_secret`<sup>Optional</sup> <a name="image_pull_secret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.imagePullSecret"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret">DefaultServiceAccountV1ImagePullSecret</a>]]

image_pull_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#image_pull_secret DefaultServiceAccountV1#image_pull_secret}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.secret"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret">DefaultServiceAccountV1Secret</a>]]

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#secret DefaultServiceAccountV1#secret}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts">DefaultServiceAccountV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#timeouts DefaultServiceAccountV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putImagePullSecret">put_image_pull_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putSecret">put_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetAutomountServiceAccountToken">reset_automount_service_account_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetImagePullSecret">reset_image_pull_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetSecret">reset_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_image_pull_secret` <a name="put_image_pull_secret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putImagePullSecret"></a>

```python
def put_image_pull_secret(
  value: typing.Union[IResolvable, typing.List[DefaultServiceAccountV1ImagePullSecret]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putImagePullSecret.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret">DefaultServiceAccountV1ImagePullSecret</a>]]

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putMetadata"></a>

```python
def put_metadata(
  annotations: typing.Mapping[str] = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  namespace: str = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putMetadata.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the service account that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#annotations DefaultServiceAccountV1#annotations}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the service account.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#labels DefaultServiceAccountV1#labels}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putMetadata.parameter.name"></a>

- *Type:* str

Name of the service account, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#name DefaultServiceAccountV1#name}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putMetadata.parameter.namespace"></a>

- *Type:* str

Namespace defines the space within which name of the service account must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#namespace DefaultServiceAccountV1#namespace}

---

##### `put_secret` <a name="put_secret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putSecret"></a>

```python
def put_secret(
  value: typing.Union[IResolvable, typing.List[DefaultServiceAccountV1Secret]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putSecret.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret">DefaultServiceAccountV1Secret</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#create DefaultServiceAccountV1#create}.

---

##### `reset_automount_service_account_token` <a name="reset_automount_service_account_token" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetAutomountServiceAccountToken"></a>

```python
def reset_automount_service_account_token() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_pull_secret` <a name="reset_image_pull_secret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetImagePullSecret"></a>

```python
def reset_image_pull_secret() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetSecret"></a>

```python
def reset_secret() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DefaultServiceAccountV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import default_service_account_v1

defaultServiceAccountV1.DefaultServiceAccountV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import default_service_account_v1

defaultServiceAccountV1.DefaultServiceAccountV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_kubernetes import default_service_account_v1

defaultServiceAccountV1.DefaultServiceAccountV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_kubernetes import default_service_account_v1

defaultServiceAccountV1.DefaultServiceAccountV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DefaultServiceAccountV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DefaultServiceAccountV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DefaultServiceAccountV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DefaultServiceAccountV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.defaultSecretName">default_secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.imagePullSecret">image_pull_secret</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList">DefaultServiceAccountV1ImagePullSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference">DefaultServiceAccountV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList">DefaultServiceAccountV1SecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference">DefaultServiceAccountV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.automountServiceAccountTokenInput">automount_service_account_token_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.imagePullSecretInput">image_pull_secret_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret">DefaultServiceAccountV1ImagePullSecret</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata">DefaultServiceAccountV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.secretInput">secret_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret">DefaultServiceAccountV1Secret</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts">DefaultServiceAccountV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.automountServiceAccountToken">automount_service_account_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_secret_name`<sup>Required</sup> <a name="default_secret_name" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.defaultSecretName"></a>

```python
default_secret_name: str
```

- *Type:* str

---

##### `image_pull_secret`<sup>Required</sup> <a name="image_pull_secret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.imagePullSecret"></a>

```python
image_pull_secret: DefaultServiceAccountV1ImagePullSecretList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList">DefaultServiceAccountV1ImagePullSecretList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.metadata"></a>

```python
metadata: DefaultServiceAccountV1MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference">DefaultServiceAccountV1MetadataOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.secret"></a>

```python
secret: DefaultServiceAccountV1SecretList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList">DefaultServiceAccountV1SecretList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.timeouts"></a>

```python
timeouts: DefaultServiceAccountV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference">DefaultServiceAccountV1TimeoutsOutputReference</a>

---

##### `automount_service_account_token_input`<sup>Optional</sup> <a name="automount_service_account_token_input" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.automountServiceAccountTokenInput"></a>

```python
automount_service_account_token_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_pull_secret_input`<sup>Optional</sup> <a name="image_pull_secret_input" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.imagePullSecretInput"></a>

```python
image_pull_secret_input: typing.Union[IResolvable, typing.List[DefaultServiceAccountV1ImagePullSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret">DefaultServiceAccountV1ImagePullSecret</a>]]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.metadataInput"></a>

```python
metadata_input: DefaultServiceAccountV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata">DefaultServiceAccountV1Metadata</a>

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.secretInput"></a>

```python
secret_input: typing.Union[IResolvable, typing.List[DefaultServiceAccountV1Secret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret">DefaultServiceAccountV1Secret</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DefaultServiceAccountV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts">DefaultServiceAccountV1Timeouts</a>]

---

##### `automount_service_account_token`<sup>Required</sup> <a name="automount_service_account_token" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.automountServiceAccountToken"></a>

```python
automount_service_account_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultServiceAccountV1Config <a name="DefaultServiceAccountV1Config" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import default_service_account_v1

defaultServiceAccountV1.DefaultServiceAccountV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: DefaultServiceAccountV1Metadata,
  automount_service_account_token: typing.Union[bool, IResolvable] = None,
  id: str = None,
  image_pull_secret: typing.Union[IResolvable, typing.List[DefaultServiceAccountV1ImagePullSecret]] = None,
  secret: typing.Union[IResolvable, typing.List[DefaultServiceAccountV1Secret]] = None,
  timeouts: DefaultServiceAccountV1Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata">DefaultServiceAccountV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.automountServiceAccountToken">automount_service_account_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable automatic mounting of the service account token. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#id DefaultServiceAccountV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.imagePullSecret">image_pull_secret</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret">DefaultServiceAccountV1ImagePullSecret</a>]]</code> | image_pull_secret block. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.secret">secret</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret">DefaultServiceAccountV1Secret</a>]]</code> | secret block. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts">DefaultServiceAccountV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.metadata"></a>

```python
metadata: DefaultServiceAccountV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata">DefaultServiceAccountV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#metadata DefaultServiceAccountV1#metadata}

---

##### `automount_service_account_token`<sup>Optional</sup> <a name="automount_service_account_token" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.automountServiceAccountToken"></a>

```python
automount_service_account_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable automatic mounting of the service account token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#automount_service_account_token DefaultServiceAccountV1#automount_service_account_token}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#id DefaultServiceAccountV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_pull_secret`<sup>Optional</sup> <a name="image_pull_secret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.imagePullSecret"></a>

```python
image_pull_secret: typing.Union[IResolvable, typing.List[DefaultServiceAccountV1ImagePullSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret">DefaultServiceAccountV1ImagePullSecret</a>]]

image_pull_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#image_pull_secret DefaultServiceAccountV1#image_pull_secret}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.secret"></a>

```python
secret: typing.Union[IResolvable, typing.List[DefaultServiceAccountV1Secret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret">DefaultServiceAccountV1Secret</a>]]

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#secret DefaultServiceAccountV1#secret}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.timeouts"></a>

```python
timeouts: DefaultServiceAccountV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts">DefaultServiceAccountV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#timeouts DefaultServiceAccountV1#timeouts}

---

### DefaultServiceAccountV1ImagePullSecret <a name="DefaultServiceAccountV1ImagePullSecret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import default_service_account_v1

defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret.property.name">name</a></code> | <code>str</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#name DefaultServiceAccountV1#name}

---

### DefaultServiceAccountV1Metadata <a name="DefaultServiceAccountV1Metadata" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import default_service_account_v1

defaultServiceAccountV1.DefaultServiceAccountV1Metadata(
  annotations: typing.Mapping[str] = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | An unstructured key value map stored with the service account that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the service account. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.property.name">name</a></code> | <code>str</code> | Name of the service account, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.property.namespace">namespace</a></code> | <code>str</code> | Namespace defines the space within which name of the service account must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the service account that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#annotations DefaultServiceAccountV1#annotations}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the service account.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#labels DefaultServiceAccountV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the service account, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#name DefaultServiceAccountV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace defines the space within which name of the service account must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#namespace DefaultServiceAccountV1#namespace}

---

### DefaultServiceAccountV1Secret <a name="DefaultServiceAccountV1Secret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import default_service_account_v1

defaultServiceAccountV1.DefaultServiceAccountV1Secret(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret.property.name">name</a></code> | <code>str</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#name DefaultServiceAccountV1#name}

---

### DefaultServiceAccountV1Timeouts <a name="DefaultServiceAccountV1Timeouts" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import default_service_account_v1

defaultServiceAccountV1.DefaultServiceAccountV1Timeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#create DefaultServiceAccountV1#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/default_service_account_v1#create DefaultServiceAccountV1#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### DefaultServiceAccountV1ImagePullSecretList <a name="DefaultServiceAccountV1ImagePullSecretList" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import default_service_account_v1

defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DefaultServiceAccountV1ImagePullSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret">DefaultServiceAccountV1ImagePullSecret</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DefaultServiceAccountV1ImagePullSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret">DefaultServiceAccountV1ImagePullSecret</a>]]

---


### DefaultServiceAccountV1ImagePullSecretOutputReference <a name="DefaultServiceAccountV1ImagePullSecretOutputReference" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import default_service_account_v1

defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret">DefaultServiceAccountV1ImagePullSecret</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DefaultServiceAccountV1ImagePullSecret]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret">DefaultServiceAccountV1ImagePullSecret</a>]

---


### DefaultServiceAccountV1MetadataOutputReference <a name="DefaultServiceAccountV1MetadataOutputReference" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import default_service_account_v1

defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata">DefaultServiceAccountV1Metadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.internalValue"></a>

```python
internal_value: DefaultServiceAccountV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata">DefaultServiceAccountV1Metadata</a>

---


### DefaultServiceAccountV1SecretList <a name="DefaultServiceAccountV1SecretList" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import default_service_account_v1

defaultServiceAccountV1.DefaultServiceAccountV1SecretList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DefaultServiceAccountV1SecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret">DefaultServiceAccountV1Secret</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DefaultServiceAccountV1Secret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret">DefaultServiceAccountV1Secret</a>]]

---


### DefaultServiceAccountV1SecretOutputReference <a name="DefaultServiceAccountV1SecretOutputReference" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import default_service_account_v1

defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret">DefaultServiceAccountV1Secret</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DefaultServiceAccountV1Secret]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret">DefaultServiceAccountV1Secret</a>]

---


### DefaultServiceAccountV1TimeoutsOutputReference <a name="DefaultServiceAccountV1TimeoutsOutputReference" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import default_service_account_v1

defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts">DefaultServiceAccountV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DefaultServiceAccountV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts">DefaultServiceAccountV1Timeouts</a>]

---



