# `podSecurityPolicyV1Beta1` Submodule <a name="`podSecurityPolicyV1Beta1` Submodule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PodSecurityPolicyV1Beta1 <a name="PodSecurityPolicyV1Beta1" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1 kubernetes_pod_security_policy_v1beta1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: PodSecurityPolicyV1Beta1Metadata,
  spec: PodSecurityPolicyV1Beta1Spec,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata">PodSecurityPolicyV1Beta1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec">PodSecurityPolicyV1Beta1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#id PodSecurityPolicyV1Beta1#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata">PodSecurityPolicyV1Beta1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#metadata PodSecurityPolicyV1Beta1#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec">PodSecurityPolicyV1Beta1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#spec PodSecurityPolicyV1Beta1#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#id PodSecurityPolicyV1Beta1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putMetadata"></a>

```python
def put_metadata(
  annotations: typing.Mapping[str] = None,
  labels: typing.Mapping[str] = None,
  name: str = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putMetadata.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the podsecuritypolicy that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#annotations PodSecurityPolicyV1Beta1#annotations}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the podsecuritypolicy.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#labels PodSecurityPolicyV1Beta1#labels}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putMetadata.parameter.name"></a>

- *Type:* str

Name of the podsecuritypolicy, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#name PodSecurityPolicyV1Beta1#name}

---

##### `put_spec` <a name="put_spec" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec"></a>

```python
def put_spec(
  fs_group: PodSecurityPolicyV1Beta1SpecFsGroup,
  run_as_user: PodSecurityPolicyV1Beta1SpecRunAsUser,
  supplemental_groups: PodSecurityPolicyV1Beta1SpecSupplementalGroups,
  allowed_capabilities: typing.List[str] = None,
  allowed_flex_volumes: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes]] = None,
  allowed_host_paths: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecAllowedHostPaths]] = None,
  allowed_proc_mount_types: typing.List[str] = None,
  allowed_unsafe_sysctls: typing.List[str] = None,
  allow_privilege_escalation: typing.Union[bool, IResolvable] = None,
  default_add_capabilities: typing.List[str] = None,
  default_allow_privilege_escalation: typing.Union[bool, IResolvable] = None,
  forbidden_sysctls: typing.List[str] = None,
  host_ipc: typing.Union[bool, IResolvable] = None,
  host_network: typing.Union[bool, IResolvable] = None,
  host_pid: typing.Union[bool, IResolvable] = None,
  host_ports: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecHostPorts]] = None,
  privileged: typing.Union[bool, IResolvable] = None,
  read_only_root_filesystem: typing.Union[bool, IResolvable] = None,
  required_drop_capabilities: typing.List[str] = None,
  run_as_group: PodSecurityPolicyV1Beta1SpecRunAsGroup = None,
  se_linux: PodSecurityPolicyV1Beta1SpecSeLinux = None,
  volumes: typing.List[str] = None
) -> None
```

###### `fs_group`<sup>Required</sup> <a name="fs_group" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec.parameter.fsGroup"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup">PodSecurityPolicyV1Beta1SpecFsGroup</a>

fs_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#fs_group PodSecurityPolicyV1Beta1#fs_group}

---

###### `run_as_user`<sup>Required</sup> <a name="run_as_user" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec.parameter.runAsUser"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser">PodSecurityPolicyV1Beta1SpecRunAsUser</a>

run_as_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#run_as_user PodSecurityPolicyV1Beta1#run_as_user}

---

###### `supplemental_groups`<sup>Required</sup> <a name="supplemental_groups" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec.parameter.supplementalGroups"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups">PodSecurityPolicyV1Beta1SpecSupplementalGroups</a>

supplemental_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#supplemental_groups PodSecurityPolicyV1Beta1#supplemental_groups}

---

###### `allowed_capabilities`<sup>Optional</sup> <a name="allowed_capabilities" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec.parameter.allowedCapabilities"></a>

- *Type:* typing.List[str]

allowedCapabilities is a list of capabilities that can be requested to add to the container.

Capabilities in this field may be added at the pod author's discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#allowed_capabilities PodSecurityPolicyV1Beta1#allowed_capabilities}

---

###### `allowed_flex_volumes`<sup>Optional</sup> <a name="allowed_flex_volumes" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec.parameter.allowedFlexVolumes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes">PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes</a>]]

allowed_flex_volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#allowed_flex_volumes PodSecurityPolicyV1Beta1#allowed_flex_volumes}

---

###### `allowed_host_paths`<sup>Optional</sup> <a name="allowed_host_paths" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec.parameter.allowedHostPaths"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPaths">PodSecurityPolicyV1Beta1SpecAllowedHostPaths</a>]]

allowed_host_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#allowed_host_paths PodSecurityPolicyV1Beta1#allowed_host_paths}

---

###### `allowed_proc_mount_types`<sup>Optional</sup> <a name="allowed_proc_mount_types" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec.parameter.allowedProcMountTypes"></a>

- *Type:* typing.List[str]

AllowedProcMountTypes is an allowlist of allowed ProcMountTypes.

Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#allowed_proc_mount_types PodSecurityPolicyV1Beta1#allowed_proc_mount_types}

---

###### `allowed_unsafe_sysctls`<sup>Optional</sup> <a name="allowed_unsafe_sysctls" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec.parameter.allowedUnsafeSysctls"></a>

- *Type:* typing.List[str]

allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none.

Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of allowed sysctls. Single * means all unsafe sysctls are allowed. Kubelet has to allowlist all allowed unsafe sysctls explicitly to avoid rejection.

Examples: e.g. "foo/*" allows "foo/bar", "foo/baz", etc. e.g. "foo.*" allows "foo.bar", "foo.baz", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#allowed_unsafe_sysctls PodSecurityPolicyV1Beta1#allowed_unsafe_sysctls}

---

###### `allow_privilege_escalation`<sup>Optional</sup> <a name="allow_privilege_escalation" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec.parameter.allowPrivilegeEscalation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#allow_privilege_escalation PodSecurityPolicyV1Beta1#allow_privilege_escalation}

---

###### `default_add_capabilities`<sup>Optional</sup> <a name="default_add_capabilities" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec.parameter.defaultAddCapabilities"></a>

- *Type:* typing.List[str]

defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.

You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#default_add_capabilities PodSecurityPolicyV1Beta1#default_add_capabilities}

---

###### `default_allow_privilege_escalation`<sup>Optional</sup> <a name="default_allow_privilege_escalation" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec.parameter.defaultAllowPrivilegeEscalation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#default_allow_privilege_escalation PodSecurityPolicyV1Beta1#default_allow_privilege_escalation}

---

###### `forbidden_sysctls`<sup>Optional</sup> <a name="forbidden_sysctls" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec.parameter.forbiddenSysctls"></a>

- *Type:* typing.List[str]

forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none.

Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of forbidden sysctls. Single * means all sysctls are forbidden.

Examples: e.g. "foo/*" forbids "foo/bar", "foo/baz", etc. e.g. "foo.*" forbids "foo.bar", "foo.baz", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#forbidden_sysctls PodSecurityPolicyV1Beta1#forbidden_sysctls}

---

###### `host_ipc`<sup>Optional</sup> <a name="host_ipc" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec.parameter.hostIpc"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

hostIPC determines if the policy allows the use of HostIPC in the pod spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#host_ipc PodSecurityPolicyV1Beta1#host_ipc}

---

###### `host_network`<sup>Optional</sup> <a name="host_network" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec.parameter.hostNetwork"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

hostNetwork determines if the policy allows the use of HostNetwork in the pod spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#host_network PodSecurityPolicyV1Beta1#host_network}

---

###### `host_pid`<sup>Optional</sup> <a name="host_pid" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec.parameter.hostPid"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

hostPID determines if the policy allows the use of HostPID in the pod spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#host_pid PodSecurityPolicyV1Beta1#host_pid}

---

###### `host_ports`<sup>Optional</sup> <a name="host_ports" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec.parameter.hostPorts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPorts">PodSecurityPolicyV1Beta1SpecHostPorts</a>]]

host_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#host_ports PodSecurityPolicyV1Beta1#host_ports}

---

###### `privileged`<sup>Optional</sup> <a name="privileged" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec.parameter.privileged"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

privileged determines if a pod can request to be run as privileged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#privileged PodSecurityPolicyV1Beta1#privileged}

---

###### `read_only_root_filesystem`<sup>Optional</sup> <a name="read_only_root_filesystem" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec.parameter.readOnlyRootFilesystem"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.

If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#read_only_root_filesystem PodSecurityPolicyV1Beta1#read_only_root_filesystem}

---

###### `required_drop_capabilities`<sup>Optional</sup> <a name="required_drop_capabilities" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec.parameter.requiredDropCapabilities"></a>

- *Type:* typing.List[str]

requiredDropCapabilities are the capabilities that will be dropped from the container.

These are required to be dropped and cannot be added.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#required_drop_capabilities PodSecurityPolicyV1Beta1#required_drop_capabilities}

---

###### `run_as_group`<sup>Optional</sup> <a name="run_as_group" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec.parameter.runAsGroup"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup">PodSecurityPolicyV1Beta1SpecRunAsGroup</a>

run_as_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#run_as_group PodSecurityPolicyV1Beta1#run_as_group}

---

###### `se_linux`<sup>Optional</sup> <a name="se_linux" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec.parameter.seLinux"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux">PodSecurityPolicyV1Beta1SpecSeLinux</a>

se_linux block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#se_linux PodSecurityPolicyV1Beta1#se_linux}

---

###### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec.parameter.volumes"></a>

- *Type:* typing.List[str]

volumes is an allowlist of volume plugins.

Empty indicates that no volumes may be used. To allow all volumes you may use '*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#volumes PodSecurityPolicyV1Beta1#volumes}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PodSecurityPolicyV1Beta1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PodSecurityPolicyV1Beta1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PodSecurityPolicyV1Beta1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PodSecurityPolicyV1Beta1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PodSecurityPolicyV1Beta1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference">PodSecurityPolicyV1Beta1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference">PodSecurityPolicyV1Beta1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata">PodSecurityPolicyV1Beta1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.specInput">spec_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec">PodSecurityPolicyV1Beta1Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.metadata"></a>

```python
metadata: PodSecurityPolicyV1Beta1MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference">PodSecurityPolicyV1Beta1MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.spec"></a>

```python
spec: PodSecurityPolicyV1Beta1SpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference">PodSecurityPolicyV1Beta1SpecOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.metadataInput"></a>

```python
metadata_input: PodSecurityPolicyV1Beta1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata">PodSecurityPolicyV1Beta1Metadata</a>

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.specInput"></a>

```python
spec_input: PodSecurityPolicyV1Beta1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec">PodSecurityPolicyV1Beta1Spec</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PodSecurityPolicyV1Beta1Config <a name="PodSecurityPolicyV1Beta1Config" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: PodSecurityPolicyV1Beta1Metadata,
  spec: PodSecurityPolicyV1Beta1Spec,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata">PodSecurityPolicyV1Beta1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec">PodSecurityPolicyV1Beta1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#id PodSecurityPolicyV1Beta1#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.metadata"></a>

```python
metadata: PodSecurityPolicyV1Beta1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata">PodSecurityPolicyV1Beta1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#metadata PodSecurityPolicyV1Beta1#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.spec"></a>

```python
spec: PodSecurityPolicyV1Beta1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec">PodSecurityPolicyV1Beta1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#spec PodSecurityPolicyV1Beta1#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#id PodSecurityPolicyV1Beta1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### PodSecurityPolicyV1Beta1Metadata <a name="PodSecurityPolicyV1Beta1Metadata" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata(
  annotations: typing.Mapping[str] = None,
  labels: typing.Mapping[str] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | An unstructured key value map stored with the podsecuritypolicy that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the podsecuritypolicy. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata.property.name">name</a></code> | <code>str</code> | Name of the podsecuritypolicy, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the podsecuritypolicy that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#annotations PodSecurityPolicyV1Beta1#annotations}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the podsecuritypolicy.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#labels PodSecurityPolicyV1Beta1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the podsecuritypolicy, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#name PodSecurityPolicyV1Beta1#name}

---

### PodSecurityPolicyV1Beta1Spec <a name="PodSecurityPolicyV1Beta1Spec" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec(
  fs_group: PodSecurityPolicyV1Beta1SpecFsGroup,
  run_as_user: PodSecurityPolicyV1Beta1SpecRunAsUser,
  supplemental_groups: PodSecurityPolicyV1Beta1SpecSupplementalGroups,
  allowed_capabilities: typing.List[str] = None,
  allowed_flex_volumes: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes]] = None,
  allowed_host_paths: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecAllowedHostPaths]] = None,
  allowed_proc_mount_types: typing.List[str] = None,
  allowed_unsafe_sysctls: typing.List[str] = None,
  allow_privilege_escalation: typing.Union[bool, IResolvable] = None,
  default_add_capabilities: typing.List[str] = None,
  default_allow_privilege_escalation: typing.Union[bool, IResolvable] = None,
  forbidden_sysctls: typing.List[str] = None,
  host_ipc: typing.Union[bool, IResolvable] = None,
  host_network: typing.Union[bool, IResolvable] = None,
  host_pid: typing.Union[bool, IResolvable] = None,
  host_ports: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecHostPorts]] = None,
  privileged: typing.Union[bool, IResolvable] = None,
  read_only_root_filesystem: typing.Union[bool, IResolvable] = None,
  required_drop_capabilities: typing.List[str] = None,
  run_as_group: PodSecurityPolicyV1Beta1SpecRunAsGroup = None,
  se_linux: PodSecurityPolicyV1Beta1SpecSeLinux = None,
  volumes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.fsGroup">fs_group</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup">PodSecurityPolicyV1Beta1SpecFsGroup</a></code> | fs_group block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.runAsUser">run_as_user</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser">PodSecurityPolicyV1Beta1SpecRunAsUser</a></code> | run_as_user block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.supplementalGroups">supplemental_groups</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups">PodSecurityPolicyV1Beta1SpecSupplementalGroups</a></code> | supplemental_groups block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.allowedCapabilities">allowed_capabilities</a></code> | <code>typing.List[str]</code> | allowedCapabilities is a list of capabilities that can be requested to add to the container. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.allowedFlexVolumes">allowed_flex_volumes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes">PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes</a>]]</code> | allowed_flex_volumes block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.allowedHostPaths">allowed_host_paths</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPaths">PodSecurityPolicyV1Beta1SpecAllowedHostPaths</a>]]</code> | allowed_host_paths block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.allowedProcMountTypes">allowed_proc_mount_types</a></code> | <code>typing.List[str]</code> | AllowedProcMountTypes is an allowlist of allowed ProcMountTypes. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.allowedUnsafeSysctls">allowed_unsafe_sysctls</a></code> | <code>typing.List[str]</code> | allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.allowPrivilegeEscalation">allow_privilege_escalation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.defaultAddCapabilities">default_add_capabilities</a></code> | <code>typing.List[str]</code> | defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.defaultAllowPrivilegeEscalation">default_allow_privilege_escalation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.forbiddenSysctls">forbidden_sysctls</a></code> | <code>typing.List[str]</code> | forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.hostIpc">host_ipc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | hostIPC determines if the policy allows the use of HostIPC in the pod spec. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.hostNetwork">host_network</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | hostNetwork determines if the policy allows the use of HostNetwork in the pod spec. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.hostPid">host_pid</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | hostPID determines if the policy allows the use of HostPID in the pod spec. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.hostPorts">host_ports</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPorts">PodSecurityPolicyV1Beta1SpecHostPorts</a>]]</code> | host_ports block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.privileged">privileged</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | privileged determines if a pod can request to be run as privileged. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.readOnlyRootFilesystem">read_only_root_filesystem</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | readOnlyRootFilesystem when set to true will force containers to run with a read only root file system. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.requiredDropCapabilities">required_drop_capabilities</a></code> | <code>typing.List[str]</code> | requiredDropCapabilities are the capabilities that will be dropped from the container. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.runAsGroup">run_as_group</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup">PodSecurityPolicyV1Beta1SpecRunAsGroup</a></code> | run_as_group block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.seLinux">se_linux</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux">PodSecurityPolicyV1Beta1SpecSeLinux</a></code> | se_linux block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.volumes">volumes</a></code> | <code>typing.List[str]</code> | volumes is an allowlist of volume plugins. |

---

##### `fs_group`<sup>Required</sup> <a name="fs_group" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.fsGroup"></a>

```python
fs_group: PodSecurityPolicyV1Beta1SpecFsGroup
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup">PodSecurityPolicyV1Beta1SpecFsGroup</a>

fs_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#fs_group PodSecurityPolicyV1Beta1#fs_group}

---

##### `run_as_user`<sup>Required</sup> <a name="run_as_user" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.runAsUser"></a>

```python
run_as_user: PodSecurityPolicyV1Beta1SpecRunAsUser
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser">PodSecurityPolicyV1Beta1SpecRunAsUser</a>

run_as_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#run_as_user PodSecurityPolicyV1Beta1#run_as_user}

---

##### `supplemental_groups`<sup>Required</sup> <a name="supplemental_groups" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.supplementalGroups"></a>

```python
supplemental_groups: PodSecurityPolicyV1Beta1SpecSupplementalGroups
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups">PodSecurityPolicyV1Beta1SpecSupplementalGroups</a>

supplemental_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#supplemental_groups PodSecurityPolicyV1Beta1#supplemental_groups}

---

##### `allowed_capabilities`<sup>Optional</sup> <a name="allowed_capabilities" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.allowedCapabilities"></a>

```python
allowed_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

allowedCapabilities is a list of capabilities that can be requested to add to the container.

Capabilities in this field may be added at the pod author's discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#allowed_capabilities PodSecurityPolicyV1Beta1#allowed_capabilities}

---

##### `allowed_flex_volumes`<sup>Optional</sup> <a name="allowed_flex_volumes" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.allowedFlexVolumes"></a>

```python
allowed_flex_volumes: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes">PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes</a>]]

allowed_flex_volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#allowed_flex_volumes PodSecurityPolicyV1Beta1#allowed_flex_volumes}

---

##### `allowed_host_paths`<sup>Optional</sup> <a name="allowed_host_paths" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.allowedHostPaths"></a>

```python
allowed_host_paths: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecAllowedHostPaths]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPaths">PodSecurityPolicyV1Beta1SpecAllowedHostPaths</a>]]

allowed_host_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#allowed_host_paths PodSecurityPolicyV1Beta1#allowed_host_paths}

---

##### `allowed_proc_mount_types`<sup>Optional</sup> <a name="allowed_proc_mount_types" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.allowedProcMountTypes"></a>

```python
allowed_proc_mount_types: typing.List[str]
```

- *Type:* typing.List[str]

AllowedProcMountTypes is an allowlist of allowed ProcMountTypes.

Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#allowed_proc_mount_types PodSecurityPolicyV1Beta1#allowed_proc_mount_types}

---

##### `allowed_unsafe_sysctls`<sup>Optional</sup> <a name="allowed_unsafe_sysctls" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.allowedUnsafeSysctls"></a>

```python
allowed_unsafe_sysctls: typing.List[str]
```

- *Type:* typing.List[str]

allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none.

Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of allowed sysctls. Single * means all unsafe sysctls are allowed. Kubelet has to allowlist all allowed unsafe sysctls explicitly to avoid rejection.

Examples: e.g. "foo/*" allows "foo/bar", "foo/baz", etc. e.g. "foo.*" allows "foo.bar", "foo.baz", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#allowed_unsafe_sysctls PodSecurityPolicyV1Beta1#allowed_unsafe_sysctls}

---

##### `allow_privilege_escalation`<sup>Optional</sup> <a name="allow_privilege_escalation" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.allowPrivilegeEscalation"></a>

```python
allow_privilege_escalation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#allow_privilege_escalation PodSecurityPolicyV1Beta1#allow_privilege_escalation}

---

##### `default_add_capabilities`<sup>Optional</sup> <a name="default_add_capabilities" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.defaultAddCapabilities"></a>

```python
default_add_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.

You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#default_add_capabilities PodSecurityPolicyV1Beta1#default_add_capabilities}

---

##### `default_allow_privilege_escalation`<sup>Optional</sup> <a name="default_allow_privilege_escalation" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.defaultAllowPrivilegeEscalation"></a>

```python
default_allow_privilege_escalation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#default_allow_privilege_escalation PodSecurityPolicyV1Beta1#default_allow_privilege_escalation}

---

##### `forbidden_sysctls`<sup>Optional</sup> <a name="forbidden_sysctls" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.forbiddenSysctls"></a>

```python
forbidden_sysctls: typing.List[str]
```

- *Type:* typing.List[str]

forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none.

Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of forbidden sysctls. Single * means all sysctls are forbidden.

Examples: e.g. "foo/*" forbids "foo/bar", "foo/baz", etc. e.g. "foo.*" forbids "foo.bar", "foo.baz", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#forbidden_sysctls PodSecurityPolicyV1Beta1#forbidden_sysctls}

---

##### `host_ipc`<sup>Optional</sup> <a name="host_ipc" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.hostIpc"></a>

```python
host_ipc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

hostIPC determines if the policy allows the use of HostIPC in the pod spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#host_ipc PodSecurityPolicyV1Beta1#host_ipc}

---

##### `host_network`<sup>Optional</sup> <a name="host_network" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.hostNetwork"></a>

```python
host_network: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

hostNetwork determines if the policy allows the use of HostNetwork in the pod spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#host_network PodSecurityPolicyV1Beta1#host_network}

---

##### `host_pid`<sup>Optional</sup> <a name="host_pid" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.hostPid"></a>

```python
host_pid: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

hostPID determines if the policy allows the use of HostPID in the pod spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#host_pid PodSecurityPolicyV1Beta1#host_pid}

---

##### `host_ports`<sup>Optional</sup> <a name="host_ports" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.hostPorts"></a>

```python
host_ports: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecHostPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPorts">PodSecurityPolicyV1Beta1SpecHostPorts</a>]]

host_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#host_ports PodSecurityPolicyV1Beta1#host_ports}

---

##### `privileged`<sup>Optional</sup> <a name="privileged" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.privileged"></a>

```python
privileged: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

privileged determines if a pod can request to be run as privileged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#privileged PodSecurityPolicyV1Beta1#privileged}

---

##### `read_only_root_filesystem`<sup>Optional</sup> <a name="read_only_root_filesystem" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.readOnlyRootFilesystem"></a>

```python
read_only_root_filesystem: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.

If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#read_only_root_filesystem PodSecurityPolicyV1Beta1#read_only_root_filesystem}

---

##### `required_drop_capabilities`<sup>Optional</sup> <a name="required_drop_capabilities" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.requiredDropCapabilities"></a>

```python
required_drop_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

requiredDropCapabilities are the capabilities that will be dropped from the container.

These are required to be dropped and cannot be added.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#required_drop_capabilities PodSecurityPolicyV1Beta1#required_drop_capabilities}

---

##### `run_as_group`<sup>Optional</sup> <a name="run_as_group" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.runAsGroup"></a>

```python
run_as_group: PodSecurityPolicyV1Beta1SpecRunAsGroup
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup">PodSecurityPolicyV1Beta1SpecRunAsGroup</a>

run_as_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#run_as_group PodSecurityPolicyV1Beta1#run_as_group}

---

##### `se_linux`<sup>Optional</sup> <a name="se_linux" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.seLinux"></a>

```python
se_linux: PodSecurityPolicyV1Beta1SpecSeLinux
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux">PodSecurityPolicyV1Beta1SpecSeLinux</a>

se_linux block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#se_linux PodSecurityPolicyV1Beta1#se_linux}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.volumes"></a>

```python
volumes: typing.List[str]
```

- *Type:* typing.List[str]

volumes is an allowlist of volume plugins.

Empty indicates that no volumes may be used. To allow all volumes you may use '*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#volumes PodSecurityPolicyV1Beta1#volumes}

---

### PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes <a name="PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes(
  driver: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes.property.driver">driver</a></code> | <code>str</code> | driver is the name of the Flexvolume driver. |

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes.property.driver"></a>

```python
driver: str
```

- *Type:* str

driver is the name of the Flexvolume driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#driver PodSecurityPolicyV1Beta1#driver}

---

### PodSecurityPolicyV1Beta1SpecAllowedHostPaths <a name="PodSecurityPolicyV1Beta1SpecAllowedHostPaths" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPaths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPaths.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPaths(
  path_prefix: str,
  read_only: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPaths.property.pathPrefix">path_prefix</a></code> | <code>str</code> | pathPrefix is the path prefix that the host volume must match. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPaths.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | when set to true, will allow host volumes matching the pathPrefix only if all volume mounts are readOnly. |

---

##### `path_prefix`<sup>Required</sup> <a name="path_prefix" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPaths.property.pathPrefix"></a>

```python
path_prefix: str
```

- *Type:* str

pathPrefix is the path prefix that the host volume must match.

It does not support `*`. Trailing slashes are trimmed when validating the path prefix with a host path.

Examples: `/foo` would allow `/foo`, `/foo/` and `/foo/bar` `/foo` would not allow `/food` or `/etc/foo`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#path_prefix PodSecurityPolicyV1Beta1#path_prefix}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPaths.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

when set to true, will allow host volumes matching the pathPrefix only if all volume mounts are readOnly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#read_only PodSecurityPolicyV1Beta1#read_only}

---

### PodSecurityPolicyV1Beta1SpecFsGroup <a name="PodSecurityPolicyV1Beta1SpecFsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup(
  rule: str,
  range: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecFsGroupRange]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup.property.rule">rule</a></code> | <code>str</code> | rule is the strategy that will dictate what FSGroup is used in the SecurityContext. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup.property.range">range</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRange">PodSecurityPolicyV1Beta1SpecFsGroupRange</a>]]</code> | range block. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup.property.rule"></a>

```python
rule: str
```

- *Type:* str

rule is the strategy that will dictate what FSGroup is used in the SecurityContext.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#rule PodSecurityPolicyV1Beta1#rule}

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup.property.range"></a>

```python
range: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecFsGroupRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRange">PodSecurityPolicyV1Beta1SpecFsGroupRange</a>]]

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#range PodSecurityPolicyV1Beta1#range}

---

### PodSecurityPolicyV1Beta1SpecFsGroupRange <a name="PodSecurityPolicyV1Beta1SpecFsGroupRange" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRange.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRange(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRange.property.max">max</a></code> | <code>typing.Union[int, float]</code> | max is the end of the range, inclusive. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRange.property.min">min</a></code> | <code>typing.Union[int, float]</code> | min is the start of the range, inclusive. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRange.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

max is the end of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#max PodSecurityPolicyV1Beta1#max}

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRange.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

min is the start of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#min PodSecurityPolicyV1Beta1#min}

---

### PodSecurityPolicyV1Beta1SpecHostPorts <a name="PodSecurityPolicyV1Beta1SpecHostPorts" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPorts.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPorts(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPorts.property.max">max</a></code> | <code>typing.Union[int, float]</code> | max is the end of the range, inclusive. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPorts.property.min">min</a></code> | <code>typing.Union[int, float]</code> | min is the start of the range, inclusive. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPorts.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

max is the end of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#max PodSecurityPolicyV1Beta1#max}

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPorts.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

min is the start of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#min PodSecurityPolicyV1Beta1#min}

---

### PodSecurityPolicyV1Beta1SpecRunAsGroup <a name="PodSecurityPolicyV1Beta1SpecRunAsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup(
  rule: str,
  range: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecRunAsGroupRange]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup.property.rule">rule</a></code> | <code>str</code> | rule is the strategy that will dictate the allowable RunAsGroup values that may be set. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup.property.range">range</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRange">PodSecurityPolicyV1Beta1SpecRunAsGroupRange</a>]]</code> | range block. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup.property.rule"></a>

```python
rule: str
```

- *Type:* str

rule is the strategy that will dictate the allowable RunAsGroup values that may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#rule PodSecurityPolicyV1Beta1#rule}

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup.property.range"></a>

```python
range: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecRunAsGroupRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRange">PodSecurityPolicyV1Beta1SpecRunAsGroupRange</a>]]

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#range PodSecurityPolicyV1Beta1#range}

---

### PodSecurityPolicyV1Beta1SpecRunAsGroupRange <a name="PodSecurityPolicyV1Beta1SpecRunAsGroupRange" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRange.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRange(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRange.property.max">max</a></code> | <code>typing.Union[int, float]</code> | max is the end of the range, inclusive. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRange.property.min">min</a></code> | <code>typing.Union[int, float]</code> | min is the start of the range, inclusive. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRange.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

max is the end of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#max PodSecurityPolicyV1Beta1#max}

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRange.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

min is the start of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#min PodSecurityPolicyV1Beta1#min}

---

### PodSecurityPolicyV1Beta1SpecRunAsUser <a name="PodSecurityPolicyV1Beta1SpecRunAsUser" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser(
  rule: str,
  range: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecRunAsUserRange]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser.property.rule">rule</a></code> | <code>str</code> | rule is the strategy that will dictate the allowable RunAsUser values that may be set. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser.property.range">range</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRange">PodSecurityPolicyV1Beta1SpecRunAsUserRange</a>]]</code> | range block. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser.property.rule"></a>

```python
rule: str
```

- *Type:* str

rule is the strategy that will dictate the allowable RunAsUser values that may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#rule PodSecurityPolicyV1Beta1#rule}

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser.property.range"></a>

```python
range: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecRunAsUserRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRange">PodSecurityPolicyV1Beta1SpecRunAsUserRange</a>]]

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#range PodSecurityPolicyV1Beta1#range}

---

### PodSecurityPolicyV1Beta1SpecRunAsUserRange <a name="PodSecurityPolicyV1Beta1SpecRunAsUserRange" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRange.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRange(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRange.property.max">max</a></code> | <code>typing.Union[int, float]</code> | max is the end of the range, inclusive. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRange.property.min">min</a></code> | <code>typing.Union[int, float]</code> | min is the start of the range, inclusive. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRange.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

max is the end of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#max PodSecurityPolicyV1Beta1#max}

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRange.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

min is the start of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#min PodSecurityPolicyV1Beta1#min}

---

### PodSecurityPolicyV1Beta1SpecSeLinux <a name="PodSecurityPolicyV1Beta1SpecSeLinux" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux(
  rule: str,
  se_linux_options: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux.property.rule">rule</a></code> | <code>str</code> | rule is the strategy that will dictate the allowable labels that may be set. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux.property.seLinuxOptions">se_linux_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions">PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions</a>]]</code> | se_linux_options block. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux.property.rule"></a>

```python
rule: str
```

- *Type:* str

rule is the strategy that will dictate the allowable labels that may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#rule PodSecurityPolicyV1Beta1#rule}

---

##### `se_linux_options`<sup>Optional</sup> <a name="se_linux_options" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux.property.seLinuxOptions"></a>

```python
se_linux_options: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions">PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions</a>]]

se_linux_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#se_linux_options PodSecurityPolicyV1Beta1#se_linux_options}

---

### PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions <a name="PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions(
  level: str,
  role: str,
  type: str,
  user: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions.property.level">level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#level PodSecurityPolicyV1Beta1#level}. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#role PodSecurityPolicyV1Beta1#role}. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#type PodSecurityPolicyV1Beta1#type}. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions.property.user">user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#user PodSecurityPolicyV1Beta1#user}. |

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions.property.level"></a>

```python
level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#level PodSecurityPolicyV1Beta1#level}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#role PodSecurityPolicyV1Beta1#role}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#type PodSecurityPolicyV1Beta1#type}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions.property.user"></a>

```python
user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#user PodSecurityPolicyV1Beta1#user}.

---

### PodSecurityPolicyV1Beta1SpecSupplementalGroups <a name="PodSecurityPolicyV1Beta1SpecSupplementalGroups" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups(
  rule: str,
  range: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups.property.rule">rule</a></code> | <code>str</code> | rule is the strategy that will dictate what supplemental groups is used in the SecurityContext. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups.property.range">range</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange">PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange</a>]]</code> | range block. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups.property.rule"></a>

```python
rule: str
```

- *Type:* str

rule is the strategy that will dictate what supplemental groups is used in the SecurityContext.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#rule PodSecurityPolicyV1Beta1#rule}

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups.property.range"></a>

```python
range: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange">PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange</a>]]

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#range PodSecurityPolicyV1Beta1#range}

---

### PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange <a name="PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange.property.max">max</a></code> | <code>typing.Union[int, float]</code> | max is the end of the range, inclusive. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange.property.min">min</a></code> | <code>typing.Union[int, float]</code> | min is the start of the range, inclusive. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

max is the end of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#max PodSecurityPolicyV1Beta1#max}

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

min is the start of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#min PodSecurityPolicyV1Beta1#min}

---

## Classes <a name="Classes" id="Classes"></a>

### PodSecurityPolicyV1Beta1MetadataOutputReference <a name="PodSecurityPolicyV1Beta1MetadataOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata">PodSecurityPolicyV1Beta1Metadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.internalValue"></a>

```python
internal_value: PodSecurityPolicyV1Beta1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata">PodSecurityPolicyV1Beta1Metadata</a>

---


### PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList <a name="PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes">PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes">PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes</a>]]

---


### PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference <a name="PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.property.driverInput">driver_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.property.driver">driver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes">PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `driver_input`<sup>Optional</sup> <a name="driver_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.property.driverInput"></a>

```python
driver_input: str
```

- *Type:* str

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.property.driver"></a>

```python
driver: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes">PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes</a>]

---


### PodSecurityPolicyV1Beta1SpecAllowedHostPathsList <a name="PodSecurityPolicyV1Beta1SpecAllowedHostPathsList" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPaths">PodSecurityPolicyV1Beta1SpecAllowedHostPaths</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecAllowedHostPaths]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPaths">PodSecurityPolicyV1Beta1SpecAllowedHostPaths</a>]]

---


### PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference <a name="PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.pathPrefixInput">path_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.pathPrefix">path_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPaths">PodSecurityPolicyV1Beta1SpecAllowedHostPaths</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_prefix_input`<sup>Optional</sup> <a name="path_prefix_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.pathPrefixInput"></a>

```python
path_prefix_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `path_prefix`<sup>Required</sup> <a name="path_prefix" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.pathPrefix"></a>

```python
path_prefix: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PodSecurityPolicyV1Beta1SpecAllowedHostPaths]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPaths">PodSecurityPolicyV1Beta1SpecAllowedHostPaths</a>]

---


### PodSecurityPolicyV1Beta1SpecFsGroupOutputReference <a name="PodSecurityPolicyV1Beta1SpecFsGroupOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.putRange">put_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.resetRange">reset_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_range` <a name="put_range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.putRange"></a>

```python
def put_range(
  value: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecFsGroupRange]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.putRange.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRange">PodSecurityPolicyV1Beta1SpecFsGroupRange</a>]]

---

##### `reset_range` <a name="reset_range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.resetRange"></a>

```python
def reset_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList">PodSecurityPolicyV1Beta1SpecFsGroupRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.rangeInput">range_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRange">PodSecurityPolicyV1Beta1SpecFsGroupRange</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.ruleInput">rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.rule">rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup">PodSecurityPolicyV1Beta1SpecFsGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.range"></a>

```python
range: PodSecurityPolicyV1Beta1SpecFsGroupRangeList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList">PodSecurityPolicyV1Beta1SpecFsGroupRangeList</a>

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.rangeInput"></a>

```python
range_input: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecFsGroupRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRange">PodSecurityPolicyV1Beta1SpecFsGroupRange</a>]]

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.ruleInput"></a>

```python
rule_input: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.rule"></a>

```python
rule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.internalValue"></a>

```python
internal_value: PodSecurityPolicyV1Beta1SpecFsGroup
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup">PodSecurityPolicyV1Beta1SpecFsGroup</a>

---


### PodSecurityPolicyV1Beta1SpecFsGroupRangeList <a name="PodSecurityPolicyV1Beta1SpecFsGroupRangeList" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRange">PodSecurityPolicyV1Beta1SpecFsGroupRange</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecFsGroupRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRange">PodSecurityPolicyV1Beta1SpecFsGroupRange</a>]]

---


### PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference <a name="PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRange">PodSecurityPolicyV1Beta1SpecFsGroupRange</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PodSecurityPolicyV1Beta1SpecFsGroupRange]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRange">PodSecurityPolicyV1Beta1SpecFsGroupRange</a>]

---


### PodSecurityPolicyV1Beta1SpecHostPortsList <a name="PodSecurityPolicyV1Beta1SpecHostPortsList" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PodSecurityPolicyV1Beta1SpecHostPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPorts">PodSecurityPolicyV1Beta1SpecHostPorts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecHostPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPorts">PodSecurityPolicyV1Beta1SpecHostPorts</a>]]

---


### PodSecurityPolicyV1Beta1SpecHostPortsOutputReference <a name="PodSecurityPolicyV1Beta1SpecHostPortsOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPorts">PodSecurityPolicyV1Beta1SpecHostPorts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PodSecurityPolicyV1Beta1SpecHostPorts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPorts">PodSecurityPolicyV1Beta1SpecHostPorts</a>]

---


### PodSecurityPolicyV1Beta1SpecOutputReference <a name="PodSecurityPolicyV1Beta1SpecOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putAllowedFlexVolumes">put_allowed_flex_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putAllowedHostPaths">put_allowed_host_paths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putFsGroup">put_fs_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putHostPorts">put_host_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putRunAsGroup">put_run_as_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putRunAsUser">put_run_as_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putSeLinux">put_se_linux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putSupplementalGroups">put_supplemental_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetAllowedCapabilities">reset_allowed_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetAllowedFlexVolumes">reset_allowed_flex_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetAllowedHostPaths">reset_allowed_host_paths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetAllowedProcMountTypes">reset_allowed_proc_mount_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetAllowedUnsafeSysctls">reset_allowed_unsafe_sysctls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetAllowPrivilegeEscalation">reset_allow_privilege_escalation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetDefaultAddCapabilities">reset_default_add_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetDefaultAllowPrivilegeEscalation">reset_default_allow_privilege_escalation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetForbiddenSysctls">reset_forbidden_sysctls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetHostIpc">reset_host_ipc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetHostNetwork">reset_host_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetHostPid">reset_host_pid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetHostPorts">reset_host_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetPrivileged">reset_privileged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetReadOnlyRootFilesystem">reset_read_only_root_filesystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetRequiredDropCapabilities">reset_required_drop_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetRunAsGroup">reset_run_as_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetSeLinux">reset_se_linux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetVolumes">reset_volumes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allowed_flex_volumes` <a name="put_allowed_flex_volumes" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putAllowedFlexVolumes"></a>

```python
def put_allowed_flex_volumes(
  value: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putAllowedFlexVolumes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes">PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes</a>]]

---

##### `put_allowed_host_paths` <a name="put_allowed_host_paths" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putAllowedHostPaths"></a>

```python
def put_allowed_host_paths(
  value: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecAllowedHostPaths]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putAllowedHostPaths.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPaths">PodSecurityPolicyV1Beta1SpecAllowedHostPaths</a>]]

---

##### `put_fs_group` <a name="put_fs_group" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putFsGroup"></a>

```python
def put_fs_group(
  rule: str,
  range: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecFsGroupRange]] = None
) -> None
```

###### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putFsGroup.parameter.rule"></a>

- *Type:* str

rule is the strategy that will dictate what FSGroup is used in the SecurityContext.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#rule PodSecurityPolicyV1Beta1#rule}

---

###### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putFsGroup.parameter.range"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRange">PodSecurityPolicyV1Beta1SpecFsGroupRange</a>]]

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#range PodSecurityPolicyV1Beta1#range}

---

##### `put_host_ports` <a name="put_host_ports" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putHostPorts"></a>

```python
def put_host_ports(
  value: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecHostPorts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putHostPorts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPorts">PodSecurityPolicyV1Beta1SpecHostPorts</a>]]

---

##### `put_run_as_group` <a name="put_run_as_group" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putRunAsGroup"></a>

```python
def put_run_as_group(
  rule: str,
  range: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecRunAsGroupRange]] = None
) -> None
```

###### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putRunAsGroup.parameter.rule"></a>

- *Type:* str

rule is the strategy that will dictate the allowable RunAsGroup values that may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#rule PodSecurityPolicyV1Beta1#rule}

---

###### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putRunAsGroup.parameter.range"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRange">PodSecurityPolicyV1Beta1SpecRunAsGroupRange</a>]]

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#range PodSecurityPolicyV1Beta1#range}

---

##### `put_run_as_user` <a name="put_run_as_user" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putRunAsUser"></a>

```python
def put_run_as_user(
  rule: str,
  range: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecRunAsUserRange]] = None
) -> None
```

###### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putRunAsUser.parameter.rule"></a>

- *Type:* str

rule is the strategy that will dictate the allowable RunAsUser values that may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#rule PodSecurityPolicyV1Beta1#rule}

---

###### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putRunAsUser.parameter.range"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRange">PodSecurityPolicyV1Beta1SpecRunAsUserRange</a>]]

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#range PodSecurityPolicyV1Beta1#range}

---

##### `put_se_linux` <a name="put_se_linux" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putSeLinux"></a>

```python
def put_se_linux(
  rule: str,
  se_linux_options: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions]] = None
) -> None
```

###### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putSeLinux.parameter.rule"></a>

- *Type:* str

rule is the strategy that will dictate the allowable labels that may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#rule PodSecurityPolicyV1Beta1#rule}

---

###### `se_linux_options`<sup>Optional</sup> <a name="se_linux_options" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putSeLinux.parameter.seLinuxOptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions">PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions</a>]]

se_linux_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#se_linux_options PodSecurityPolicyV1Beta1#se_linux_options}

---

##### `put_supplemental_groups` <a name="put_supplemental_groups" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putSupplementalGroups"></a>

```python
def put_supplemental_groups(
  rule: str,
  range: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange]] = None
) -> None
```

###### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putSupplementalGroups.parameter.rule"></a>

- *Type:* str

rule is the strategy that will dictate what supplemental groups is used in the SecurityContext.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#rule PodSecurityPolicyV1Beta1#rule}

---

###### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putSupplementalGroups.parameter.range"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange">PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange</a>]]

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#range PodSecurityPolicyV1Beta1#range}

---

##### `reset_allowed_capabilities` <a name="reset_allowed_capabilities" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetAllowedCapabilities"></a>

```python
def reset_allowed_capabilities() -> None
```

##### `reset_allowed_flex_volumes` <a name="reset_allowed_flex_volumes" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetAllowedFlexVolumes"></a>

```python
def reset_allowed_flex_volumes() -> None
```

##### `reset_allowed_host_paths` <a name="reset_allowed_host_paths" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetAllowedHostPaths"></a>

```python
def reset_allowed_host_paths() -> None
```

##### `reset_allowed_proc_mount_types` <a name="reset_allowed_proc_mount_types" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetAllowedProcMountTypes"></a>

```python
def reset_allowed_proc_mount_types() -> None
```

##### `reset_allowed_unsafe_sysctls` <a name="reset_allowed_unsafe_sysctls" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetAllowedUnsafeSysctls"></a>

```python
def reset_allowed_unsafe_sysctls() -> None
```

##### `reset_allow_privilege_escalation` <a name="reset_allow_privilege_escalation" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetAllowPrivilegeEscalation"></a>

```python
def reset_allow_privilege_escalation() -> None
```

##### `reset_default_add_capabilities` <a name="reset_default_add_capabilities" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetDefaultAddCapabilities"></a>

```python
def reset_default_add_capabilities() -> None
```

##### `reset_default_allow_privilege_escalation` <a name="reset_default_allow_privilege_escalation" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetDefaultAllowPrivilegeEscalation"></a>

```python
def reset_default_allow_privilege_escalation() -> None
```

##### `reset_forbidden_sysctls` <a name="reset_forbidden_sysctls" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetForbiddenSysctls"></a>

```python
def reset_forbidden_sysctls() -> None
```

##### `reset_host_ipc` <a name="reset_host_ipc" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetHostIpc"></a>

```python
def reset_host_ipc() -> None
```

##### `reset_host_network` <a name="reset_host_network" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetHostNetwork"></a>

```python
def reset_host_network() -> None
```

##### `reset_host_pid` <a name="reset_host_pid" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetHostPid"></a>

```python
def reset_host_pid() -> None
```

##### `reset_host_ports` <a name="reset_host_ports" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetHostPorts"></a>

```python
def reset_host_ports() -> None
```

##### `reset_privileged` <a name="reset_privileged" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetPrivileged"></a>

```python
def reset_privileged() -> None
```

##### `reset_read_only_root_filesystem` <a name="reset_read_only_root_filesystem" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetReadOnlyRootFilesystem"></a>

```python
def reset_read_only_root_filesystem() -> None
```

##### `reset_required_drop_capabilities` <a name="reset_required_drop_capabilities" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetRequiredDropCapabilities"></a>

```python
def reset_required_drop_capabilities() -> None
```

##### `reset_run_as_group` <a name="reset_run_as_group" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetRunAsGroup"></a>

```python
def reset_run_as_group() -> None
```

##### `reset_se_linux` <a name="reset_se_linux" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetSeLinux"></a>

```python
def reset_se_linux() -> None
```

##### `reset_volumes` <a name="reset_volumes" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetVolumes"></a>

```python
def reset_volumes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedFlexVolumes">allowed_flex_volumes</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList">PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedHostPaths">allowed_host_paths</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList">PodSecurityPolicyV1Beta1SpecAllowedHostPathsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.fsGroup">fs_group</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference">PodSecurityPolicyV1Beta1SpecFsGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostPorts">host_ports</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList">PodSecurityPolicyV1Beta1SpecHostPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.runAsGroup">run_as_group</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference">PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.runAsUser">run_as_user</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference">PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.seLinux">se_linux</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference">PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.supplementalGroups">supplemental_groups</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference">PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedCapabilitiesInput">allowed_capabilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedFlexVolumesInput">allowed_flex_volumes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes">PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedHostPathsInput">allowed_host_paths_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPaths">PodSecurityPolicyV1Beta1SpecAllowedHostPaths</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedProcMountTypesInput">allowed_proc_mount_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedUnsafeSysctlsInput">allowed_unsafe_sysctls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowPrivilegeEscalationInput">allow_privilege_escalation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.defaultAddCapabilitiesInput">default_add_capabilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.defaultAllowPrivilegeEscalationInput">default_allow_privilege_escalation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.forbiddenSysctlsInput">forbidden_sysctls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.fsGroupInput">fs_group_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup">PodSecurityPolicyV1Beta1SpecFsGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostIpcInput">host_ipc_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostNetworkInput">host_network_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostPidInput">host_pid_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostPortsInput">host_ports_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPorts">PodSecurityPolicyV1Beta1SpecHostPorts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.privilegedInput">privileged_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.readOnlyRootFilesystemInput">read_only_root_filesystem_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.requiredDropCapabilitiesInput">required_drop_capabilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.runAsGroupInput">run_as_group_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup">PodSecurityPolicyV1Beta1SpecRunAsGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.runAsUserInput">run_as_user_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser">PodSecurityPolicyV1Beta1SpecRunAsUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.seLinuxInput">se_linux_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux">PodSecurityPolicyV1Beta1SpecSeLinux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.supplementalGroupsInput">supplemental_groups_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups">PodSecurityPolicyV1Beta1SpecSupplementalGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.volumesInput">volumes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedCapabilities">allowed_capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedProcMountTypes">allowed_proc_mount_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedUnsafeSysctls">allowed_unsafe_sysctls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowPrivilegeEscalation">allow_privilege_escalation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.defaultAddCapabilities">default_add_capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.defaultAllowPrivilegeEscalation">default_allow_privilege_escalation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.forbiddenSysctls">forbidden_sysctls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostIpc">host_ipc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostNetwork">host_network</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostPid">host_pid</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.privileged">privileged</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.readOnlyRootFilesystem">read_only_root_filesystem</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.requiredDropCapabilities">required_drop_capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.volumes">volumes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec">PodSecurityPolicyV1Beta1Spec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_flex_volumes`<sup>Required</sup> <a name="allowed_flex_volumes" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedFlexVolumes"></a>

```python
allowed_flex_volumes: PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList">PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList</a>

---

##### `allowed_host_paths`<sup>Required</sup> <a name="allowed_host_paths" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedHostPaths"></a>

```python
allowed_host_paths: PodSecurityPolicyV1Beta1SpecAllowedHostPathsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList">PodSecurityPolicyV1Beta1SpecAllowedHostPathsList</a>

---

##### `fs_group`<sup>Required</sup> <a name="fs_group" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.fsGroup"></a>

```python
fs_group: PodSecurityPolicyV1Beta1SpecFsGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference">PodSecurityPolicyV1Beta1SpecFsGroupOutputReference</a>

---

##### `host_ports`<sup>Required</sup> <a name="host_ports" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostPorts"></a>

```python
host_ports: PodSecurityPolicyV1Beta1SpecHostPortsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList">PodSecurityPolicyV1Beta1SpecHostPortsList</a>

---

##### `run_as_group`<sup>Required</sup> <a name="run_as_group" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.runAsGroup"></a>

```python
run_as_group: PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference">PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference</a>

---

##### `run_as_user`<sup>Required</sup> <a name="run_as_user" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.runAsUser"></a>

```python
run_as_user: PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference">PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference</a>

---

##### `se_linux`<sup>Required</sup> <a name="se_linux" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.seLinux"></a>

```python
se_linux: PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference">PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference</a>

---

##### `supplemental_groups`<sup>Required</sup> <a name="supplemental_groups" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.supplementalGroups"></a>

```python
supplemental_groups: PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference">PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference</a>

---

##### `allowed_capabilities_input`<sup>Optional</sup> <a name="allowed_capabilities_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedCapabilitiesInput"></a>

```python
allowed_capabilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_flex_volumes_input`<sup>Optional</sup> <a name="allowed_flex_volumes_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedFlexVolumesInput"></a>

```python
allowed_flex_volumes_input: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes">PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes</a>]]

---

##### `allowed_host_paths_input`<sup>Optional</sup> <a name="allowed_host_paths_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedHostPathsInput"></a>

```python
allowed_host_paths_input: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecAllowedHostPaths]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPaths">PodSecurityPolicyV1Beta1SpecAllowedHostPaths</a>]]

---

##### `allowed_proc_mount_types_input`<sup>Optional</sup> <a name="allowed_proc_mount_types_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedProcMountTypesInput"></a>

```python
allowed_proc_mount_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_unsafe_sysctls_input`<sup>Optional</sup> <a name="allowed_unsafe_sysctls_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedUnsafeSysctlsInput"></a>

```python
allowed_unsafe_sysctls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_privilege_escalation_input`<sup>Optional</sup> <a name="allow_privilege_escalation_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowPrivilegeEscalationInput"></a>

```python
allow_privilege_escalation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_add_capabilities_input`<sup>Optional</sup> <a name="default_add_capabilities_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.defaultAddCapabilitiesInput"></a>

```python
default_add_capabilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_allow_privilege_escalation_input`<sup>Optional</sup> <a name="default_allow_privilege_escalation_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.defaultAllowPrivilegeEscalationInput"></a>

```python
default_allow_privilege_escalation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forbidden_sysctls_input`<sup>Optional</sup> <a name="forbidden_sysctls_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.forbiddenSysctlsInput"></a>

```python
forbidden_sysctls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fs_group_input`<sup>Optional</sup> <a name="fs_group_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.fsGroupInput"></a>

```python
fs_group_input: PodSecurityPolicyV1Beta1SpecFsGroup
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup">PodSecurityPolicyV1Beta1SpecFsGroup</a>

---

##### `host_ipc_input`<sup>Optional</sup> <a name="host_ipc_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostIpcInput"></a>

```python
host_ipc_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_network_input`<sup>Optional</sup> <a name="host_network_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostNetworkInput"></a>

```python
host_network_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_pid_input`<sup>Optional</sup> <a name="host_pid_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostPidInput"></a>

```python
host_pid_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_ports_input`<sup>Optional</sup> <a name="host_ports_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostPortsInput"></a>

```python
host_ports_input: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecHostPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPorts">PodSecurityPolicyV1Beta1SpecHostPorts</a>]]

---

##### `privileged_input`<sup>Optional</sup> <a name="privileged_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.privilegedInput"></a>

```python
privileged_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_only_root_filesystem_input`<sup>Optional</sup> <a name="read_only_root_filesystem_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.readOnlyRootFilesystemInput"></a>

```python
read_only_root_filesystem_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `required_drop_capabilities_input`<sup>Optional</sup> <a name="required_drop_capabilities_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.requiredDropCapabilitiesInput"></a>

```python
required_drop_capabilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `run_as_group_input`<sup>Optional</sup> <a name="run_as_group_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.runAsGroupInput"></a>

```python
run_as_group_input: PodSecurityPolicyV1Beta1SpecRunAsGroup
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup">PodSecurityPolicyV1Beta1SpecRunAsGroup</a>

---

##### `run_as_user_input`<sup>Optional</sup> <a name="run_as_user_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.runAsUserInput"></a>

```python
run_as_user_input: PodSecurityPolicyV1Beta1SpecRunAsUser
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser">PodSecurityPolicyV1Beta1SpecRunAsUser</a>

---

##### `se_linux_input`<sup>Optional</sup> <a name="se_linux_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.seLinuxInput"></a>

```python
se_linux_input: PodSecurityPolicyV1Beta1SpecSeLinux
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux">PodSecurityPolicyV1Beta1SpecSeLinux</a>

---

##### `supplemental_groups_input`<sup>Optional</sup> <a name="supplemental_groups_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.supplementalGroupsInput"></a>

```python
supplemental_groups_input: PodSecurityPolicyV1Beta1SpecSupplementalGroups
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups">PodSecurityPolicyV1Beta1SpecSupplementalGroups</a>

---

##### `volumes_input`<sup>Optional</sup> <a name="volumes_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.volumesInput"></a>

```python
volumes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_capabilities`<sup>Required</sup> <a name="allowed_capabilities" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedCapabilities"></a>

```python
allowed_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_proc_mount_types`<sup>Required</sup> <a name="allowed_proc_mount_types" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedProcMountTypes"></a>

```python
allowed_proc_mount_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_unsafe_sysctls`<sup>Required</sup> <a name="allowed_unsafe_sysctls" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedUnsafeSysctls"></a>

```python
allowed_unsafe_sysctls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_privilege_escalation`<sup>Required</sup> <a name="allow_privilege_escalation" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowPrivilegeEscalation"></a>

```python
allow_privilege_escalation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_add_capabilities`<sup>Required</sup> <a name="default_add_capabilities" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.defaultAddCapabilities"></a>

```python
default_add_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_allow_privilege_escalation`<sup>Required</sup> <a name="default_allow_privilege_escalation" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.defaultAllowPrivilegeEscalation"></a>

```python
default_allow_privilege_escalation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forbidden_sysctls`<sup>Required</sup> <a name="forbidden_sysctls" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.forbiddenSysctls"></a>

```python
forbidden_sysctls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `host_ipc`<sup>Required</sup> <a name="host_ipc" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostIpc"></a>

```python
host_ipc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_network`<sup>Required</sup> <a name="host_network" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostNetwork"></a>

```python
host_network: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_pid`<sup>Required</sup> <a name="host_pid" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostPid"></a>

```python
host_pid: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `privileged`<sup>Required</sup> <a name="privileged" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.privileged"></a>

```python
privileged: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_only_root_filesystem`<sup>Required</sup> <a name="read_only_root_filesystem" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.readOnlyRootFilesystem"></a>

```python
read_only_root_filesystem: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `required_drop_capabilities`<sup>Required</sup> <a name="required_drop_capabilities" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.requiredDropCapabilities"></a>

```python
required_drop_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.volumes"></a>

```python
volumes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.internalValue"></a>

```python
internal_value: PodSecurityPolicyV1Beta1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec">PodSecurityPolicyV1Beta1Spec</a>

---


### PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference <a name="PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.putRange">put_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.resetRange">reset_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_range` <a name="put_range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.putRange"></a>

```python
def put_range(
  value: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecRunAsGroupRange]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.putRange.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRange">PodSecurityPolicyV1Beta1SpecRunAsGroupRange</a>]]

---

##### `reset_range` <a name="reset_range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.resetRange"></a>

```python
def reset_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList">PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.rangeInput">range_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRange">PodSecurityPolicyV1Beta1SpecRunAsGroupRange</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.ruleInput">rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.rule">rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup">PodSecurityPolicyV1Beta1SpecRunAsGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.range"></a>

```python
range: PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList">PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList</a>

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.rangeInput"></a>

```python
range_input: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecRunAsGroupRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRange">PodSecurityPolicyV1Beta1SpecRunAsGroupRange</a>]]

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.ruleInput"></a>

```python
rule_input: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.rule"></a>

```python
rule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.internalValue"></a>

```python
internal_value: PodSecurityPolicyV1Beta1SpecRunAsGroup
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup">PodSecurityPolicyV1Beta1SpecRunAsGroup</a>

---


### PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList <a name="PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRange">PodSecurityPolicyV1Beta1SpecRunAsGroupRange</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecRunAsGroupRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRange">PodSecurityPolicyV1Beta1SpecRunAsGroupRange</a>]]

---


### PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference <a name="PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRange">PodSecurityPolicyV1Beta1SpecRunAsGroupRange</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PodSecurityPolicyV1Beta1SpecRunAsGroupRange]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRange">PodSecurityPolicyV1Beta1SpecRunAsGroupRange</a>]

---


### PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference <a name="PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.putRange">put_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.resetRange">reset_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_range` <a name="put_range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.putRange"></a>

```python
def put_range(
  value: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecRunAsUserRange]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.putRange.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRange">PodSecurityPolicyV1Beta1SpecRunAsUserRange</a>]]

---

##### `reset_range` <a name="reset_range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.resetRange"></a>

```python
def reset_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList">PodSecurityPolicyV1Beta1SpecRunAsUserRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.rangeInput">range_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRange">PodSecurityPolicyV1Beta1SpecRunAsUserRange</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.ruleInput">rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.rule">rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser">PodSecurityPolicyV1Beta1SpecRunAsUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.range"></a>

```python
range: PodSecurityPolicyV1Beta1SpecRunAsUserRangeList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList">PodSecurityPolicyV1Beta1SpecRunAsUserRangeList</a>

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.rangeInput"></a>

```python
range_input: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecRunAsUserRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRange">PodSecurityPolicyV1Beta1SpecRunAsUserRange</a>]]

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.ruleInput"></a>

```python
rule_input: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.rule"></a>

```python
rule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.internalValue"></a>

```python
internal_value: PodSecurityPolicyV1Beta1SpecRunAsUser
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser">PodSecurityPolicyV1Beta1SpecRunAsUser</a>

---


### PodSecurityPolicyV1Beta1SpecRunAsUserRangeList <a name="PodSecurityPolicyV1Beta1SpecRunAsUserRangeList" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRange">PodSecurityPolicyV1Beta1SpecRunAsUserRange</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecRunAsUserRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRange">PodSecurityPolicyV1Beta1SpecRunAsUserRange</a>]]

---


### PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference <a name="PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRange">PodSecurityPolicyV1Beta1SpecRunAsUserRange</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PodSecurityPolicyV1Beta1SpecRunAsUserRange]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRange">PodSecurityPolicyV1Beta1SpecRunAsUserRange</a>]

---


### PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference <a name="PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.putSeLinuxOptions">put_se_linux_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.resetSeLinuxOptions">reset_se_linux_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_se_linux_options` <a name="put_se_linux_options" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.putSeLinuxOptions"></a>

```python
def put_se_linux_options(
  value: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.putSeLinuxOptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions">PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions</a>]]

---

##### `reset_se_linux_options` <a name="reset_se_linux_options" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.resetSeLinuxOptions"></a>

```python
def reset_se_linux_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.seLinuxOptions">se_linux_options</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList">PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.ruleInput">rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.seLinuxOptionsInput">se_linux_options_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions">PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.rule">rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux">PodSecurityPolicyV1Beta1SpecSeLinux</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `se_linux_options`<sup>Required</sup> <a name="se_linux_options" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.seLinuxOptions"></a>

```python
se_linux_options: PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList">PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList</a>

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.ruleInput"></a>

```python
rule_input: str
```

- *Type:* str

---

##### `se_linux_options_input`<sup>Optional</sup> <a name="se_linux_options_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.seLinuxOptionsInput"></a>

```python
se_linux_options_input: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions">PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions</a>]]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.rule"></a>

```python
rule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.internalValue"></a>

```python
internal_value: PodSecurityPolicyV1Beta1SpecSeLinux
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux">PodSecurityPolicyV1Beta1SpecSeLinux</a>

---


### PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList <a name="PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions">PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions">PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions</a>]]

---


### PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference <a name="PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.levelInput">level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions">PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `level_input`<sup>Optional</sup> <a name="level_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.levelInput"></a>

```python
level_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions">PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions</a>]

---


### PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference <a name="PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.putRange">put_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.resetRange">reset_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_range` <a name="put_range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.putRange"></a>

```python
def put_range(
  value: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.putRange.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange">PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange</a>]]

---

##### `reset_range` <a name="reset_range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.resetRange"></a>

```python
def reset_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList">PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.rangeInput">range_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange">PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.ruleInput">rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.rule">rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups">PodSecurityPolicyV1Beta1SpecSupplementalGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.range"></a>

```python
range: PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList">PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList</a>

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.rangeInput"></a>

```python
range_input: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange">PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange</a>]]

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.ruleInput"></a>

```python
rule_input: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.rule"></a>

```python
rule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.internalValue"></a>

```python
internal_value: PodSecurityPolicyV1Beta1SpecSupplementalGroups
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups">PodSecurityPolicyV1Beta1SpecSupplementalGroups</a>

---


### PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList <a name="PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange">PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange">PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange</a>]]

---


### PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference <a name="PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy_v1_beta1

podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange">PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange">PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange</a>]

---



