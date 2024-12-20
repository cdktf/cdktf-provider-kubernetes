# `env` Submodule <a name="`env` Submodule" id="@cdktf/provider-kubernetes.env"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Env <a name="Env" id="@cdktf/provider-kubernetes.env.Env"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env kubernetes_env}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.Env.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import env

env.Env(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_version: str,
  env: typing.Union[IResolvable, typing.List[EnvEnv]],
  kind: str,
  metadata: EnvMetadata,
  container: str = None,
  field_manager: str = None,
  force: typing.Union[bool, IResolvable] = None,
  id: str = None,
  init_container: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.Initializer.parameter.apiVersion">api_version</a></code> | <code>str</code> | Resource API version. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.Initializer.parameter.env">env</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.env.EnvEnv">EnvEnv</a>]]</code> | env block. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.Initializer.parameter.kind">kind</a></code> | <code>str</code> | Resource Kind. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadata">EnvMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.Initializer.parameter.container">container</a></code> | <code>str</code> | Name of the container for which we are updating the environment variables. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.Initializer.parameter.fieldManager">field_manager</a></code> | <code>str</code> | Set the name of the field manager for the specified environment variables. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.Initializer.parameter.force">force</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Force overwriting environments that were created or edited outside of Terraform. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#id Env#id}. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.Initializer.parameter.initContainer">init_container</a></code> | <code>str</code> | Name of the initContainer for which we are updating the environment variables. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.env.Env.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.env.Env.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.env.Env.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.env.Env.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.env.Env.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.env.Env.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.env.Env.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.env.Env.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.env.Env.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_version`<sup>Required</sup> <a name="api_version" id="@cdktf/provider-kubernetes.env.Env.Initializer.parameter.apiVersion"></a>

- *Type:* str

Resource API version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#api_version Env#api_version}

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-kubernetes.env.Env.Initializer.parameter.env"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.env.EnvEnv">EnvEnv</a>]]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#env Env#env}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.env.Env.Initializer.parameter.kind"></a>

- *Type:* str

Resource Kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#kind Env#kind}

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.env.Env.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvMetadata">EnvMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#metadata Env#metadata}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-kubernetes.env.Env.Initializer.parameter.container"></a>

- *Type:* str

Name of the container for which we are updating the environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#container Env#container}

---

##### `field_manager`<sup>Optional</sup> <a name="field_manager" id="@cdktf/provider-kubernetes.env.Env.Initializer.parameter.fieldManager"></a>

- *Type:* str

Set the name of the field manager for the specified environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#field_manager Env#field_manager}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktf/provider-kubernetes.env.Env.Initializer.parameter.force"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Force overwriting environments that were created or edited outside of Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#force Env#force}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.env.Env.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#id Env#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `init_container`<sup>Optional</sup> <a name="init_container" id="@cdktf/provider-kubernetes.env.Env.Initializer.parameter.initContainer"></a>

- *Type:* str

Name of the initContainer for which we are updating the environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#init_container Env#init_container}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.putEnv">put_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.resetContainer">reset_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.resetFieldManager">reset_field_manager</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.resetForce">reset_force</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.resetInitContainer">reset_init_container</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.env.Env.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.env.Env.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.env.Env.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.env.Env.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.env.Env.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.env.Env.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.env.Env.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-kubernetes.env.Env.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.env.Env.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.env.Env.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-kubernetes.env.Env.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.env.Env.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.env.Env.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.Env.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.env.Env.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.Env.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.env.Env.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.Env.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.env.Env.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.Env.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.env.Env.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.Env.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.env.Env.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.Env.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.env.Env.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.Env.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.env.Env.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.Env.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.env.Env.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.Env.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-kubernetes.env.Env.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-kubernetes.env.Env.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.env.Env.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.env.Env.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.env.Env.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.Env.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-kubernetes.env.Env.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.env.Env.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-kubernetes.env.Env.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.env.Env.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.env.Env.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-kubernetes.env.Env.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.env.Env.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_env` <a name="put_env" id="@cdktf/provider-kubernetes.env.Env.putEnv"></a>

```python
def put_env(
  value: typing.Union[IResolvable, typing.List[EnvEnv]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.env.Env.putEnv.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.env.EnvEnv">EnvEnv</a>]]

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-kubernetes.env.Env.putMetadata"></a>

```python
def put_metadata(
  name: str,
  namespace: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.env.Env.putMetadata.parameter.name"></a>

- *Type:* str

The name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#name Env#name}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.env.Env.putMetadata.parameter.namespace"></a>

- *Type:* str

The namespace of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#namespace Env#namespace}

---

##### `reset_container` <a name="reset_container" id="@cdktf/provider-kubernetes.env.Env.resetContainer"></a>

```python
def reset_container() -> None
```

##### `reset_field_manager` <a name="reset_field_manager" id="@cdktf/provider-kubernetes.env.Env.resetFieldManager"></a>

```python
def reset_field_manager() -> None
```

##### `reset_force` <a name="reset_force" id="@cdktf/provider-kubernetes.env.Env.resetForce"></a>

```python
def reset_force() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-kubernetes.env.Env.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_init_container` <a name="reset_init_container" id="@cdktf/provider-kubernetes.env.Env.resetInitContainer"></a>

```python
def reset_init_container() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Env resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.env.Env.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import env

env.Env.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.env.Env.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.env.Env.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import env

env.Env.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.env.Env.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-kubernetes.env.Env.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_kubernetes import env

env.Env.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.env.Env.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-kubernetes.env.Env.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_kubernetes import env

env.Env.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Env resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.env.Env.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-kubernetes.env.Env.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Env to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-kubernetes.env.Env.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Env that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.env.Env.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Env to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.env">env</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList">EnvEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference">EnvMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.apiVersionInput">api_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.containerInput">container_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.envInput">env_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.env.EnvEnv">EnvEnv</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.fieldManagerInput">field_manager_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.forceInput">force_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.initContainerInput">init_container_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadata">EnvMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.apiVersion">api_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.container">container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.fieldManager">field_manager</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.force">force</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.initContainer">init_container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.kind">kind</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.env.Env.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.env.Env.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.env.Env.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.env.Env.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.env.Env.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.env.Env.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.env.Env.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.env.Env.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.env.Env.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.env.Env.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.env.Env.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.env.Env.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.env.Env.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.env.Env.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-kubernetes.env.Env.property.env"></a>

```python
env: EnvEnvList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvList">EnvEnvList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.env.Env.property.metadata"></a>

```python
metadata: EnvMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference">EnvMetadataOutputReference</a>

---

##### `api_version_input`<sup>Optional</sup> <a name="api_version_input" id="@cdktf/provider-kubernetes.env.Env.property.apiVersionInput"></a>

```python
api_version_input: str
```

- *Type:* str

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktf/provider-kubernetes.env.Env.property.containerInput"></a>

```python
container_input: str
```

- *Type:* str

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktf/provider-kubernetes.env.Env.property.envInput"></a>

```python
env_input: typing.Union[IResolvable, typing.List[EnvEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.env.EnvEnv">EnvEnv</a>]]

---

##### `field_manager_input`<sup>Optional</sup> <a name="field_manager_input" id="@cdktf/provider-kubernetes.env.Env.property.fieldManagerInput"></a>

```python
field_manager_input: str
```

- *Type:* str

---

##### `force_input`<sup>Optional</sup> <a name="force_input" id="@cdktf/provider-kubernetes.env.Env.property.forceInput"></a>

```python
force_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-kubernetes.env.Env.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `init_container_input`<sup>Optional</sup> <a name="init_container_input" id="@cdktf/provider-kubernetes.env.Env.property.initContainerInput"></a>

```python
init_container_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-kubernetes.env.Env.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-kubernetes.env.Env.property.metadataInput"></a>

```python
metadata_input: EnvMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvMetadata">EnvMetadata</a>

---

##### `api_version`<sup>Required</sup> <a name="api_version" id="@cdktf/provider-kubernetes.env.Env.property.apiVersion"></a>

```python
api_version: str
```

- *Type:* str

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-kubernetes.env.Env.property.container"></a>

```python
container: str
```

- *Type:* str

---

##### `field_manager`<sup>Required</sup> <a name="field_manager" id="@cdktf/provider-kubernetes.env.Env.property.fieldManager"></a>

```python
field_manager: str
```

- *Type:* str

---

##### `force`<sup>Required</sup> <a name="force" id="@cdktf/provider-kubernetes.env.Env.property.force"></a>

```python
force: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.env.Env.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `init_container`<sup>Required</sup> <a name="init_container" id="@cdktf/provider-kubernetes.env.Env.property.initContainer"></a>

```python
init_container: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.env.Env.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.env.Env.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EnvConfig <a name="EnvConfig" id="@cdktf/provider-kubernetes.env.EnvConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.env.EnvConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import env

env.EnvConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_version: str,
  env: typing.Union[IResolvable, typing.List[EnvEnv]],
  kind: str,
  metadata: EnvMetadata,
  container: str = None,
  field_manager: str = None,
  force: typing.Union[bool, IResolvable] = None,
  id: str = None,
  init_container: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.apiVersion">api_version</a></code> | <code>str</code> | Resource API version. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.env">env</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.env.EnvEnv">EnvEnv</a>]]</code> | env block. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.kind">kind</a></code> | <code>str</code> | Resource Kind. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadata">EnvMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.container">container</a></code> | <code>str</code> | Name of the container for which we are updating the environment variables. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.fieldManager">field_manager</a></code> | <code>str</code> | Set the name of the field manager for the specified environment variables. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.force">force</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Force overwriting environments that were created or edited outside of Terraform. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#id Env#id}. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.initContainer">init_container</a></code> | <code>str</code> | Name of the initContainer for which we are updating the environment variables. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.env.EnvConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.env.EnvConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.env.EnvConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.env.EnvConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.env.EnvConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.env.EnvConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.env.EnvConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_version`<sup>Required</sup> <a name="api_version" id="@cdktf/provider-kubernetes.env.EnvConfig.property.apiVersion"></a>

```python
api_version: str
```

- *Type:* str

Resource API version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#api_version Env#api_version}

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-kubernetes.env.EnvConfig.property.env"></a>

```python
env: typing.Union[IResolvable, typing.List[EnvEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.env.EnvEnv">EnvEnv</a>]]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#env Env#env}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.env.EnvConfig.property.kind"></a>

```python
kind: str
```

- *Type:* str

Resource Kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#kind Env#kind}

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.env.EnvConfig.property.metadata"></a>

```python
metadata: EnvMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvMetadata">EnvMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#metadata Env#metadata}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-kubernetes.env.EnvConfig.property.container"></a>

```python
container: str
```

- *Type:* str

Name of the container for which we are updating the environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#container Env#container}

---

##### `field_manager`<sup>Optional</sup> <a name="field_manager" id="@cdktf/provider-kubernetes.env.EnvConfig.property.fieldManager"></a>

```python
field_manager: str
```

- *Type:* str

Set the name of the field manager for the specified environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#field_manager Env#field_manager}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktf/provider-kubernetes.env.EnvConfig.property.force"></a>

```python
force: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Force overwriting environments that were created or edited outside of Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#force Env#force}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.env.EnvConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#id Env#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `init_container`<sup>Optional</sup> <a name="init_container" id="@cdktf/provider-kubernetes.env.EnvConfig.property.initContainer"></a>

```python
init_container: str
```

- *Type:* str

Name of the initContainer for which we are updating the environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#init_container Env#init_container}

---

### EnvEnv <a name="EnvEnv" id="@cdktf/provider-kubernetes.env.EnvEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.env.EnvEnv.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import env

env.EnvEnv(
  name: str,
  value: str = None,
  value_from: EnvEnvValueFrom = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnv.property.name">name</a></code> | <code>str</code> | Name of the environment variable. Must be a C_IDENTIFIER. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnv.property.value">value</a></code> | <code>str</code> | Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnv.property.valueFrom">value_from</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom">EnvEnvValueFrom</a></code> | value_from block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.env.EnvEnv.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the environment variable. Must be a C_IDENTIFIER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#name Env#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-kubernetes.env.EnvEnv.property.value"></a>

```python
value: str
```

- *Type:* str

Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables.

If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#value Env#value}

---

##### `value_from`<sup>Optional</sup> <a name="value_from" id="@cdktf/provider-kubernetes.env.EnvEnv.property.valueFrom"></a>

```python
value_from: EnvEnvValueFrom
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom">EnvEnvValueFrom</a>

value_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#value_from Env#value_from}

---

### EnvEnvValueFrom <a name="EnvEnvValueFrom" id="@cdktf/provider-kubernetes.env.EnvEnvValueFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.env.EnvEnvValueFrom.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import env

env.EnvEnvValueFrom(
  config_map_key_ref: EnvEnvValueFromConfigMapKeyRef = None,
  field_ref: EnvEnvValueFromFieldRef = None,
  resource_field_ref: EnvEnvValueFromResourceFieldRef = None,
  secret_key_ref: EnvEnvValueFromSecretKeyRef = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom.property.configMapKeyRef">config_map_key_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef">EnvEnvValueFromConfigMapKeyRef</a></code> | config_map_key_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom.property.fieldRef">field_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef">EnvEnvValueFromFieldRef</a></code> | field_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom.property.resourceFieldRef">resource_field_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef">EnvEnvValueFromResourceFieldRef</a></code> | resource_field_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom.property.secretKeyRef">secret_key_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef">EnvEnvValueFromSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `config_map_key_ref`<sup>Optional</sup> <a name="config_map_key_ref" id="@cdktf/provider-kubernetes.env.EnvEnvValueFrom.property.configMapKeyRef"></a>

```python
config_map_key_ref: EnvEnvValueFromConfigMapKeyRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef">EnvEnvValueFromConfigMapKeyRef</a>

config_map_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#config_map_key_ref Env#config_map_key_ref}

---

##### `field_ref`<sup>Optional</sup> <a name="field_ref" id="@cdktf/provider-kubernetes.env.EnvEnvValueFrom.property.fieldRef"></a>

```python
field_ref: EnvEnvValueFromFieldRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef">EnvEnvValueFromFieldRef</a>

field_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#field_ref Env#field_ref}

---

##### `resource_field_ref`<sup>Optional</sup> <a name="resource_field_ref" id="@cdktf/provider-kubernetes.env.EnvEnvValueFrom.property.resourceFieldRef"></a>

```python
resource_field_ref: EnvEnvValueFromResourceFieldRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef">EnvEnvValueFromResourceFieldRef</a>

resource_field_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#resource_field_ref Env#resource_field_ref}

---

##### `secret_key_ref`<sup>Optional</sup> <a name="secret_key_ref" id="@cdktf/provider-kubernetes.env.EnvEnvValueFrom.property.secretKeyRef"></a>

```python
secret_key_ref: EnvEnvValueFromSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef">EnvEnvValueFromSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#secret_key_ref Env#secret_key_ref}

---

### EnvEnvValueFromConfigMapKeyRef <a name="EnvEnvValueFromConfigMapKeyRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import env

env.EnvEnvValueFromConfigMapKeyRef(
  key: str = None,
  name: str = None,
  optional: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef.property.key">key</a></code> | <code>str</code> | The key to select. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef.property.name">name</a></code> | <code>str</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef.property.optional">optional</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specify whether the ConfigMap or its key must be defined. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef.property.key"></a>

```python
key: str
```

- *Type:* str

The key to select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#key Env#key}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#name Env#name}

---

##### `optional`<sup>Optional</sup> <a name="optional" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef.property.optional"></a>

```python
optional: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specify whether the ConfigMap or its key must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#optional Env#optional}

---

### EnvEnvValueFromFieldRef <a name="EnvEnvValueFromFieldRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import env

env.EnvEnvValueFromFieldRef(
  api_version: str = None,
  field_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef.property.apiVersion">api_version</a></code> | <code>str</code> | Version of the schema the FieldPath is written in terms of, defaults to "v1". |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef.property.fieldPath">field_path</a></code> | <code>str</code> | Path of the field to select in the specified API version. |

---

##### `api_version`<sup>Optional</sup> <a name="api_version" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef.property.apiVersion"></a>

```python
api_version: str
```

- *Type:* str

Version of the schema the FieldPath is written in terms of, defaults to "v1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#api_version Env#api_version}

---

##### `field_path`<sup>Optional</sup> <a name="field_path" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

Path of the field to select in the specified API version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#field_path Env#field_path}

---

### EnvEnvValueFromResourceFieldRef <a name="EnvEnvValueFromResourceFieldRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import env

env.EnvEnvValueFromResourceFieldRef(
  resource: str,
  container_name: str = None,
  divisor: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef.property.resource">resource</a></code> | <code>str</code> | Resource to select. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef.property.containerName">container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#container_name Env#container_name}. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef.property.divisor">divisor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#divisor Env#divisor}. |

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef.property.resource"></a>

```python
resource: str
```

- *Type:* str

Resource to select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#resource Env#resource}

---

##### `container_name`<sup>Optional</sup> <a name="container_name" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#container_name Env#container_name}.

---

##### `divisor`<sup>Optional</sup> <a name="divisor" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef.property.divisor"></a>

```python
divisor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#divisor Env#divisor}.

---

### EnvEnvValueFromSecretKeyRef <a name="EnvEnvValueFromSecretKeyRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import env

env.EnvEnvValueFromSecretKeyRef(
  key: str = None,
  name: str = None,
  optional: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef.property.key">key</a></code> | <code>str</code> | The key of the secret to select from. Must be a valid secret key. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef.property.name">name</a></code> | <code>str</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef.property.optional">optional</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specify whether the Secret or its key must be defined. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the secret to select from. Must be a valid secret key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#key Env#key}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#name Env#name}

---

##### `optional`<sup>Optional</sup> <a name="optional" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef.property.optional"></a>

```python
optional: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specify whether the Secret or its key must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#optional Env#optional}

---

### EnvMetadata <a name="EnvMetadata" id="@cdktf/provider-kubernetes.env.EnvMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.env.EnvMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import env

env.EnvMetadata(
  name: str,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadata.property.name">name</a></code> | <code>str</code> | The name of the resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadata.property.namespace">namespace</a></code> | <code>str</code> | The namespace of the resource. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.env.EnvMetadata.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#name Env#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.env.EnvMetadata.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#namespace Env#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### EnvEnvList <a name="EnvEnvList" id="@cdktf/provider-kubernetes.env.EnvEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.EnvEnvList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import env

env.EnvEnvList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.env.EnvEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.env.EnvEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.env.EnvEnvList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.env.EnvEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.env.EnvEnvList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.env.EnvEnvList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.env.EnvEnvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.env.EnvEnvList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.env.EnvEnvList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EnvEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.env.EnvEnvList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.env.EnvEnv">EnvEnv</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.env.EnvEnvList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.env.EnvEnvList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.env.EnvEnvList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EnvEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.env.EnvEnv">EnvEnv</a>]]

---


### EnvEnvOutputReference <a name="EnvEnvOutputReference" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import env

env.EnvEnvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.putValueFrom">put_value_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.resetValueFrom">reset_value_from</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value_from` <a name="put_value_from" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.putValueFrom"></a>

```python
def put_value_from(
  config_map_key_ref: EnvEnvValueFromConfigMapKeyRef = None,
  field_ref: EnvEnvValueFromFieldRef = None,
  resource_field_ref: EnvEnvValueFromResourceFieldRef = None,
  secret_key_ref: EnvEnvValueFromSecretKeyRef = None
) -> None
```

###### `config_map_key_ref`<sup>Optional</sup> <a name="config_map_key_ref" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.putValueFrom.parameter.configMapKeyRef"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef">EnvEnvValueFromConfigMapKeyRef</a>

config_map_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#config_map_key_ref Env#config_map_key_ref}

---

###### `field_ref`<sup>Optional</sup> <a name="field_ref" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.putValueFrom.parameter.fieldRef"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef">EnvEnvValueFromFieldRef</a>

field_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#field_ref Env#field_ref}

---

###### `resource_field_ref`<sup>Optional</sup> <a name="resource_field_ref" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.putValueFrom.parameter.resourceFieldRef"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef">EnvEnvValueFromResourceFieldRef</a>

resource_field_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#resource_field_ref Env#resource_field_ref}

---

###### `secret_key_ref`<sup>Optional</sup> <a name="secret_key_ref" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.putValueFrom.parameter.secretKeyRef"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef">EnvEnvValueFromSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#secret_key_ref Env#secret_key_ref}

---

##### `reset_value` <a name="reset_value" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_value_from` <a name="reset_value_from" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.resetValueFrom"></a>

```python
def reset_value_from() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.valueFrom">value_from</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference">EnvEnvValueFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.valueFromInput">value_from_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom">EnvEnvValueFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.env.EnvEnv">EnvEnv</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_from`<sup>Required</sup> <a name="value_from" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.valueFrom"></a>

```python
value_from: EnvEnvValueFromOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference">EnvEnvValueFromOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_from_input`<sup>Optional</sup> <a name="value_from_input" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.valueFromInput"></a>

```python
value_from_input: EnvEnvValueFrom
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom">EnvEnvValueFrom</a>

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EnvEnv]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.env.EnvEnv">EnvEnv</a>]

---


### EnvEnvValueFromConfigMapKeyRefOutputReference <a name="EnvEnvValueFromConfigMapKeyRefOutputReference" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import env

env.EnvEnvValueFromConfigMapKeyRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resetOptional">reset_optional</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_optional` <a name="reset_optional" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resetOptional"></a>

```python
def reset_optional() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.optionalInput">optional_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.optional">optional</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef">EnvEnvValueFromConfigMapKeyRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `optional_input`<sup>Optional</sup> <a name="optional_input" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.optionalInput"></a>

```python
optional_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `optional`<sup>Required</sup> <a name="optional" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.optional"></a>

```python
optional: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.internalValue"></a>

```python
internal_value: EnvEnvValueFromConfigMapKeyRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef">EnvEnvValueFromConfigMapKeyRef</a>

---


### EnvEnvValueFromFieldRefOutputReference <a name="EnvEnvValueFromFieldRefOutputReference" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import env

env.EnvEnvValueFromFieldRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.resetApiVersion">reset_api_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.resetFieldPath">reset_field_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_api_version` <a name="reset_api_version" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.resetApiVersion"></a>

```python
def reset_api_version() -> None
```

##### `reset_field_path` <a name="reset_field_path" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.resetFieldPath"></a>

```python
def reset_field_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.apiVersionInput">api_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.fieldPathInput">field_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.apiVersion">api_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.fieldPath">field_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef">EnvEnvValueFromFieldRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_version_input`<sup>Optional</sup> <a name="api_version_input" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.apiVersionInput"></a>

```python
api_version_input: str
```

- *Type:* str

---

##### `field_path_input`<sup>Optional</sup> <a name="field_path_input" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.fieldPathInput"></a>

```python
field_path_input: str
```

- *Type:* str

---

##### `api_version`<sup>Required</sup> <a name="api_version" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.apiVersion"></a>

```python
api_version: str
```

- *Type:* str

---

##### `field_path`<sup>Required</sup> <a name="field_path" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.internalValue"></a>

```python
internal_value: EnvEnvValueFromFieldRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef">EnvEnvValueFromFieldRef</a>

---


### EnvEnvValueFromOutputReference <a name="EnvEnvValueFromOutputReference" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import env

env.EnvEnvValueFromOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putConfigMapKeyRef">put_config_map_key_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putFieldRef">put_field_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putResourceFieldRef">put_resource_field_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putSecretKeyRef">put_secret_key_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resetConfigMapKeyRef">reset_config_map_key_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resetFieldRef">reset_field_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resetResourceFieldRef">reset_resource_field_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resetSecretKeyRef">reset_secret_key_ref</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_config_map_key_ref` <a name="put_config_map_key_ref" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putConfigMapKeyRef"></a>

```python
def put_config_map_key_ref(
  key: str = None,
  name: str = None,
  optional: typing.Union[bool, IResolvable] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putConfigMapKeyRef.parameter.key"></a>

- *Type:* str

The key to select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#key Env#key}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putConfigMapKeyRef.parameter.name"></a>

- *Type:* str

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#name Env#name}

---

###### `optional`<sup>Optional</sup> <a name="optional" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putConfigMapKeyRef.parameter.optional"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specify whether the ConfigMap or its key must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#optional Env#optional}

---

##### `put_field_ref` <a name="put_field_ref" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putFieldRef"></a>

```python
def put_field_ref(
  api_version: str = None,
  field_path: str = None
) -> None
```

###### `api_version`<sup>Optional</sup> <a name="api_version" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putFieldRef.parameter.apiVersion"></a>

- *Type:* str

Version of the schema the FieldPath is written in terms of, defaults to "v1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#api_version Env#api_version}

---

###### `field_path`<sup>Optional</sup> <a name="field_path" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putFieldRef.parameter.fieldPath"></a>

- *Type:* str

Path of the field to select in the specified API version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#field_path Env#field_path}

---

##### `put_resource_field_ref` <a name="put_resource_field_ref" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putResourceFieldRef"></a>

```python
def put_resource_field_ref(
  resource: str,
  container_name: str = None,
  divisor: str = None
) -> None
```

###### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putResourceFieldRef.parameter.resource"></a>

- *Type:* str

Resource to select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#resource Env#resource}

---

###### `container_name`<sup>Optional</sup> <a name="container_name" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putResourceFieldRef.parameter.containerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#container_name Env#container_name}.

---

###### `divisor`<sup>Optional</sup> <a name="divisor" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putResourceFieldRef.parameter.divisor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#divisor Env#divisor}.

---

##### `put_secret_key_ref` <a name="put_secret_key_ref" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putSecretKeyRef"></a>

```python
def put_secret_key_ref(
  key: str = None,
  name: str = None,
  optional: typing.Union[bool, IResolvable] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putSecretKeyRef.parameter.key"></a>

- *Type:* str

The key of the secret to select from. Must be a valid secret key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#key Env#key}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putSecretKeyRef.parameter.name"></a>

- *Type:* str

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#name Env#name}

---

###### `optional`<sup>Optional</sup> <a name="optional" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putSecretKeyRef.parameter.optional"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specify whether the Secret or its key must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.1/docs/resources/env#optional Env#optional}

---

##### `reset_config_map_key_ref` <a name="reset_config_map_key_ref" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resetConfigMapKeyRef"></a>

```python
def reset_config_map_key_ref() -> None
```

##### `reset_field_ref` <a name="reset_field_ref" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resetFieldRef"></a>

```python
def reset_field_ref() -> None
```

##### `reset_resource_field_ref` <a name="reset_resource_field_ref" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resetResourceFieldRef"></a>

```python
def reset_resource_field_ref() -> None
```

##### `reset_secret_key_ref` <a name="reset_secret_key_ref" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resetSecretKeyRef"></a>

```python
def reset_secret_key_ref() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.configMapKeyRef">config_map_key_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference">EnvEnvValueFromConfigMapKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.fieldRef">field_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference">EnvEnvValueFromFieldRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.resourceFieldRef">resource_field_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference">EnvEnvValueFromResourceFieldRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.secretKeyRef">secret_key_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference">EnvEnvValueFromSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.configMapKeyRefInput">config_map_key_ref_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef">EnvEnvValueFromConfigMapKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.fieldRefInput">field_ref_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef">EnvEnvValueFromFieldRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.resourceFieldRefInput">resource_field_ref_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef">EnvEnvValueFromResourceFieldRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.secretKeyRefInput">secret_key_ref_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef">EnvEnvValueFromSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom">EnvEnvValueFrom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_map_key_ref`<sup>Required</sup> <a name="config_map_key_ref" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.configMapKeyRef"></a>

```python
config_map_key_ref: EnvEnvValueFromConfigMapKeyRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference">EnvEnvValueFromConfigMapKeyRefOutputReference</a>

---

##### `field_ref`<sup>Required</sup> <a name="field_ref" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.fieldRef"></a>

```python
field_ref: EnvEnvValueFromFieldRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference">EnvEnvValueFromFieldRefOutputReference</a>

---

##### `resource_field_ref`<sup>Required</sup> <a name="resource_field_ref" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.resourceFieldRef"></a>

```python
resource_field_ref: EnvEnvValueFromResourceFieldRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference">EnvEnvValueFromResourceFieldRefOutputReference</a>

---

##### `secret_key_ref`<sup>Required</sup> <a name="secret_key_ref" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.secretKeyRef"></a>

```python
secret_key_ref: EnvEnvValueFromSecretKeyRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference">EnvEnvValueFromSecretKeyRefOutputReference</a>

---

##### `config_map_key_ref_input`<sup>Optional</sup> <a name="config_map_key_ref_input" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.configMapKeyRefInput"></a>

```python
config_map_key_ref_input: EnvEnvValueFromConfigMapKeyRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef">EnvEnvValueFromConfigMapKeyRef</a>

---

##### `field_ref_input`<sup>Optional</sup> <a name="field_ref_input" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.fieldRefInput"></a>

```python
field_ref_input: EnvEnvValueFromFieldRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef">EnvEnvValueFromFieldRef</a>

---

##### `resource_field_ref_input`<sup>Optional</sup> <a name="resource_field_ref_input" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.resourceFieldRefInput"></a>

```python
resource_field_ref_input: EnvEnvValueFromResourceFieldRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef">EnvEnvValueFromResourceFieldRef</a>

---

##### `secret_key_ref_input`<sup>Optional</sup> <a name="secret_key_ref_input" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.secretKeyRefInput"></a>

```python
secret_key_ref_input: EnvEnvValueFromSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef">EnvEnvValueFromSecretKeyRef</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.internalValue"></a>

```python
internal_value: EnvEnvValueFrom
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom">EnvEnvValueFrom</a>

---


### EnvEnvValueFromResourceFieldRefOutputReference <a name="EnvEnvValueFromResourceFieldRefOutputReference" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import env

env.EnvEnvValueFromResourceFieldRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.resetContainerName">reset_container_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.resetDivisor">reset_divisor</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_container_name` <a name="reset_container_name" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.resetContainerName"></a>

```python
def reset_container_name() -> None
```

##### `reset_divisor` <a name="reset_divisor" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.resetDivisor"></a>

```python
def reset_divisor() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.containerNameInput">container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.divisorInput">divisor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.divisor">divisor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef">EnvEnvValueFromResourceFieldRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_name_input`<sup>Optional</sup> <a name="container_name_input" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.containerNameInput"></a>

```python
container_name_input: str
```

- *Type:* str

---

##### `divisor_input`<sup>Optional</sup> <a name="divisor_input" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.divisorInput"></a>

```python
divisor_input: str
```

- *Type:* str

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `divisor`<sup>Required</sup> <a name="divisor" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.divisor"></a>

```python
divisor: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.internalValue"></a>

```python
internal_value: EnvEnvValueFromResourceFieldRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef">EnvEnvValueFromResourceFieldRef</a>

---


### EnvEnvValueFromSecretKeyRefOutputReference <a name="EnvEnvValueFromSecretKeyRefOutputReference" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import env

env.EnvEnvValueFromSecretKeyRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resetOptional">reset_optional</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_optional` <a name="reset_optional" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resetOptional"></a>

```python
def reset_optional() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.optionalInput">optional_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.optional">optional</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef">EnvEnvValueFromSecretKeyRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `optional_input`<sup>Optional</sup> <a name="optional_input" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.optionalInput"></a>

```python
optional_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `optional`<sup>Required</sup> <a name="optional" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.optional"></a>

```python
optional: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.internalValue"></a>

```python
internal_value: EnvEnvValueFromSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef">EnvEnvValueFromSecretKeyRef</a>

---


### EnvMetadataOutputReference <a name="EnvMetadataOutputReference" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import env

env.EnvMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadata">EnvMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.internalValue"></a>

```python
internal_value: EnvMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvMetadata">EnvMetadata</a>

---



