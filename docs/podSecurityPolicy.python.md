# `podSecurityPolicy` Submodule <a name="`podSecurityPolicy` Submodule" id="@cdktf/provider-kubernetes.podSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PodSecurityPolicy <a name="PodSecurityPolicy" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy kubernetes_pod_security_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: PodSecurityPolicyMetadata,
  spec: PodSecurityPolicySpec,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata">PodSecurityPolicyMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec">PodSecurityPolicySpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#id PodSecurityPolicy#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata">PodSecurityPolicyMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#metadata PodSecurityPolicy#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec">PodSecurityPolicySpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#spec PodSecurityPolicy#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#id PodSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putMetadata"></a>

```python
def put_metadata(
  annotations: typing.Mapping[str] = None,
  labels: typing.Mapping[str] = None,
  name: str = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putMetadata.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the podsecuritypolicy that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#annotations PodSecurityPolicy#annotations}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the podsecuritypolicy.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#labels PodSecurityPolicy#labels}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putMetadata.parameter.name"></a>

- *Type:* str

Name of the podsecuritypolicy, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#name PodSecurityPolicy#name}

---

##### `put_spec` <a name="put_spec" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec"></a>

```python
def put_spec(
  fs_group: PodSecurityPolicySpecFsGroup,
  run_as_user: PodSecurityPolicySpecRunAsUser,
  supplemental_groups: PodSecurityPolicySpecSupplementalGroups,
  allowed_capabilities: typing.List[str] = None,
  allowed_flex_volumes: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecAllowedFlexVolumes]] = None,
  allowed_host_paths: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecAllowedHostPaths]] = None,
  allowed_proc_mount_types: typing.List[str] = None,
  allowed_unsafe_sysctls: typing.List[str] = None,
  allow_privilege_escalation: typing.Union[bool, IResolvable] = None,
  default_add_capabilities: typing.List[str] = None,
  default_allow_privilege_escalation: typing.Union[bool, IResolvable] = None,
  forbidden_sysctls: typing.List[str] = None,
  host_ipc: typing.Union[bool, IResolvable] = None,
  host_network: typing.Union[bool, IResolvable] = None,
  host_pid: typing.Union[bool, IResolvable] = None,
  host_ports: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecHostPorts]] = None,
  privileged: typing.Union[bool, IResolvable] = None,
  read_only_root_filesystem: typing.Union[bool, IResolvable] = None,
  required_drop_capabilities: typing.List[str] = None,
  run_as_group: PodSecurityPolicySpecRunAsGroup = None,
  se_linux: PodSecurityPolicySpecSeLinux = None,
  volumes: typing.List[str] = None
) -> None
```

###### `fs_group`<sup>Required</sup> <a name="fs_group" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec.parameter.fsGroup"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup">PodSecurityPolicySpecFsGroup</a>

fs_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#fs_group PodSecurityPolicy#fs_group}

---

###### `run_as_user`<sup>Required</sup> <a name="run_as_user" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec.parameter.runAsUser"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser">PodSecurityPolicySpecRunAsUser</a>

run_as_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#run_as_user PodSecurityPolicy#run_as_user}

---

###### `supplemental_groups`<sup>Required</sup> <a name="supplemental_groups" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec.parameter.supplementalGroups"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups">PodSecurityPolicySpecSupplementalGroups</a>

supplemental_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#supplemental_groups PodSecurityPolicy#supplemental_groups}

---

###### `allowed_capabilities`<sup>Optional</sup> <a name="allowed_capabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec.parameter.allowedCapabilities"></a>

- *Type:* typing.List[str]

allowedCapabilities is a list of capabilities that can be requested to add to the container.

Capabilities in this field may be added at the pod author's discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#allowed_capabilities PodSecurityPolicy#allowed_capabilities}

---

###### `allowed_flex_volumes`<sup>Optional</sup> <a name="allowed_flex_volumes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec.parameter.allowedFlexVolumes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes">PodSecurityPolicySpecAllowedFlexVolumes</a>]]

allowed_flex_volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#allowed_flex_volumes PodSecurityPolicy#allowed_flex_volumes}

---

###### `allowed_host_paths`<sup>Optional</sup> <a name="allowed_host_paths" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec.parameter.allowedHostPaths"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths">PodSecurityPolicySpecAllowedHostPaths</a>]]

allowed_host_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#allowed_host_paths PodSecurityPolicy#allowed_host_paths}

---

###### `allowed_proc_mount_types`<sup>Optional</sup> <a name="allowed_proc_mount_types" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec.parameter.allowedProcMountTypes"></a>

- *Type:* typing.List[str]

AllowedProcMountTypes is an allowlist of allowed ProcMountTypes.

Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#allowed_proc_mount_types PodSecurityPolicy#allowed_proc_mount_types}

---

###### `allowed_unsafe_sysctls`<sup>Optional</sup> <a name="allowed_unsafe_sysctls" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec.parameter.allowedUnsafeSysctls"></a>

- *Type:* typing.List[str]

allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none.

Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of allowed sysctls. Single * means all unsafe sysctls are allowed. Kubelet has to allowlist all allowed unsafe sysctls explicitly to avoid rejection.

Examples: e.g. "foo/*" allows "foo/bar", "foo/baz", etc. e.g. "foo.*" allows "foo.bar", "foo.baz", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#allowed_unsafe_sysctls PodSecurityPolicy#allowed_unsafe_sysctls}

---

###### `allow_privilege_escalation`<sup>Optional</sup> <a name="allow_privilege_escalation" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec.parameter.allowPrivilegeEscalation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#allow_privilege_escalation PodSecurityPolicy#allow_privilege_escalation}

---

###### `default_add_capabilities`<sup>Optional</sup> <a name="default_add_capabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec.parameter.defaultAddCapabilities"></a>

- *Type:* typing.List[str]

defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.

You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#default_add_capabilities PodSecurityPolicy#default_add_capabilities}

---

###### `default_allow_privilege_escalation`<sup>Optional</sup> <a name="default_allow_privilege_escalation" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec.parameter.defaultAllowPrivilegeEscalation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#default_allow_privilege_escalation PodSecurityPolicy#default_allow_privilege_escalation}

---

###### `forbidden_sysctls`<sup>Optional</sup> <a name="forbidden_sysctls" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec.parameter.forbiddenSysctls"></a>

- *Type:* typing.List[str]

forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none.

Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of forbidden sysctls. Single * means all sysctls are forbidden.

Examples: e.g. "foo/*" forbids "foo/bar", "foo/baz", etc. e.g. "foo.*" forbids "foo.bar", "foo.baz", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#forbidden_sysctls PodSecurityPolicy#forbidden_sysctls}

---

###### `host_ipc`<sup>Optional</sup> <a name="host_ipc" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec.parameter.hostIpc"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

hostIPC determines if the policy allows the use of HostIPC in the pod spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#host_ipc PodSecurityPolicy#host_ipc}

---

###### `host_network`<sup>Optional</sup> <a name="host_network" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec.parameter.hostNetwork"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

hostNetwork determines if the policy allows the use of HostNetwork in the pod spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#host_network PodSecurityPolicy#host_network}

---

###### `host_pid`<sup>Optional</sup> <a name="host_pid" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec.parameter.hostPid"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

hostPID determines if the policy allows the use of HostPID in the pod spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#host_pid PodSecurityPolicy#host_pid}

---

###### `host_ports`<sup>Optional</sup> <a name="host_ports" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec.parameter.hostPorts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts">PodSecurityPolicySpecHostPorts</a>]]

host_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#host_ports PodSecurityPolicy#host_ports}

---

###### `privileged`<sup>Optional</sup> <a name="privileged" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec.parameter.privileged"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

privileged determines if a pod can request to be run as privileged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#privileged PodSecurityPolicy#privileged}

---

###### `read_only_root_filesystem`<sup>Optional</sup> <a name="read_only_root_filesystem" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec.parameter.readOnlyRootFilesystem"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.

If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#read_only_root_filesystem PodSecurityPolicy#read_only_root_filesystem}

---

###### `required_drop_capabilities`<sup>Optional</sup> <a name="required_drop_capabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec.parameter.requiredDropCapabilities"></a>

- *Type:* typing.List[str]

requiredDropCapabilities are the capabilities that will be dropped from the container.

These are required to be dropped and cannot be added.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#required_drop_capabilities PodSecurityPolicy#required_drop_capabilities}

---

###### `run_as_group`<sup>Optional</sup> <a name="run_as_group" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec.parameter.runAsGroup"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup">PodSecurityPolicySpecRunAsGroup</a>

run_as_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#run_as_group PodSecurityPolicy#run_as_group}

---

###### `se_linux`<sup>Optional</sup> <a name="se_linux" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec.parameter.seLinux"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux">PodSecurityPolicySpecSeLinux</a>

se_linux block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#se_linux PodSecurityPolicy#se_linux}

---

###### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec.parameter.volumes"></a>

- *Type:* typing.List[str]

volumes is an allowlist of volume plugins.

Empty indicates that no volumes may be used. To allow all volumes you may use '*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#volumes PodSecurityPolicy#volumes}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PodSecurityPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PodSecurityPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PodSecurityPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PodSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PodSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference">PodSecurityPolicyMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference">PodSecurityPolicySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata">PodSecurityPolicyMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.specInput">spec_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec">PodSecurityPolicySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.metadata"></a>

```python
metadata: PodSecurityPolicyMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference">PodSecurityPolicyMetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.spec"></a>

```python
spec: PodSecurityPolicySpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference">PodSecurityPolicySpecOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.metadataInput"></a>

```python
metadata_input: PodSecurityPolicyMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata">PodSecurityPolicyMetadata</a>

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.specInput"></a>

```python
spec_input: PodSecurityPolicySpec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec">PodSecurityPolicySpec</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PodSecurityPolicyConfig <a name="PodSecurityPolicyConfig" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: PodSecurityPolicyMetadata,
  spec: PodSecurityPolicySpec,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata">PodSecurityPolicyMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec">PodSecurityPolicySpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#id PodSecurityPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.metadata"></a>

```python
metadata: PodSecurityPolicyMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata">PodSecurityPolicyMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#metadata PodSecurityPolicy#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.spec"></a>

```python
spec: PodSecurityPolicySpec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec">PodSecurityPolicySpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#spec PodSecurityPolicy#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#id PodSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### PodSecurityPolicyMetadata <a name="PodSecurityPolicyMetadata" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicyMetadata(
  annotations: typing.Mapping[str] = None,
  labels: typing.Mapping[str] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | An unstructured key value map stored with the podsecuritypolicy that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the podsecuritypolicy. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata.property.name">name</a></code> | <code>str</code> | Name of the podsecuritypolicy, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the podsecuritypolicy that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#annotations PodSecurityPolicy#annotations}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the podsecuritypolicy.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#labels PodSecurityPolicy#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the podsecuritypolicy, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#name PodSecurityPolicy#name}

---

### PodSecurityPolicySpec <a name="PodSecurityPolicySpec" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpec(
  fs_group: PodSecurityPolicySpecFsGroup,
  run_as_user: PodSecurityPolicySpecRunAsUser,
  supplemental_groups: PodSecurityPolicySpecSupplementalGroups,
  allowed_capabilities: typing.List[str] = None,
  allowed_flex_volumes: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecAllowedFlexVolumes]] = None,
  allowed_host_paths: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecAllowedHostPaths]] = None,
  allowed_proc_mount_types: typing.List[str] = None,
  allowed_unsafe_sysctls: typing.List[str] = None,
  allow_privilege_escalation: typing.Union[bool, IResolvable] = None,
  default_add_capabilities: typing.List[str] = None,
  default_allow_privilege_escalation: typing.Union[bool, IResolvable] = None,
  forbidden_sysctls: typing.List[str] = None,
  host_ipc: typing.Union[bool, IResolvable] = None,
  host_network: typing.Union[bool, IResolvable] = None,
  host_pid: typing.Union[bool, IResolvable] = None,
  host_ports: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecHostPorts]] = None,
  privileged: typing.Union[bool, IResolvable] = None,
  read_only_root_filesystem: typing.Union[bool, IResolvable] = None,
  required_drop_capabilities: typing.List[str] = None,
  run_as_group: PodSecurityPolicySpecRunAsGroup = None,
  se_linux: PodSecurityPolicySpecSeLinux = None,
  volumes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.fsGroup">fs_group</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup">PodSecurityPolicySpecFsGroup</a></code> | fs_group block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.runAsUser">run_as_user</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser">PodSecurityPolicySpecRunAsUser</a></code> | run_as_user block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.supplementalGroups">supplemental_groups</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups">PodSecurityPolicySpecSupplementalGroups</a></code> | supplemental_groups block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedCapabilities">allowed_capabilities</a></code> | <code>typing.List[str]</code> | allowedCapabilities is a list of capabilities that can be requested to add to the container. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedFlexVolumes">allowed_flex_volumes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes">PodSecurityPolicySpecAllowedFlexVolumes</a>]]</code> | allowed_flex_volumes block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedHostPaths">allowed_host_paths</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths">PodSecurityPolicySpecAllowedHostPaths</a>]]</code> | allowed_host_paths block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedProcMountTypes">allowed_proc_mount_types</a></code> | <code>typing.List[str]</code> | AllowedProcMountTypes is an allowlist of allowed ProcMountTypes. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedUnsafeSysctls">allowed_unsafe_sysctls</a></code> | <code>typing.List[str]</code> | allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowPrivilegeEscalation">allow_privilege_escalation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.defaultAddCapabilities">default_add_capabilities</a></code> | <code>typing.List[str]</code> | defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.defaultAllowPrivilegeEscalation">default_allow_privilege_escalation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.forbiddenSysctls">forbidden_sysctls</a></code> | <code>typing.List[str]</code> | forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.hostIpc">host_ipc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | hostIPC determines if the policy allows the use of HostIPC in the pod spec. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.hostNetwork">host_network</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | hostNetwork determines if the policy allows the use of HostNetwork in the pod spec. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.hostPid">host_pid</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | hostPID determines if the policy allows the use of HostPID in the pod spec. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.hostPorts">host_ports</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts">PodSecurityPolicySpecHostPorts</a>]]</code> | host_ports block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.privileged">privileged</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | privileged determines if a pod can request to be run as privileged. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.readOnlyRootFilesystem">read_only_root_filesystem</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | readOnlyRootFilesystem when set to true will force containers to run with a read only root file system. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.requiredDropCapabilities">required_drop_capabilities</a></code> | <code>typing.List[str]</code> | requiredDropCapabilities are the capabilities that will be dropped from the container. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.runAsGroup">run_as_group</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup">PodSecurityPolicySpecRunAsGroup</a></code> | run_as_group block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.seLinux">se_linux</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux">PodSecurityPolicySpecSeLinux</a></code> | se_linux block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.volumes">volumes</a></code> | <code>typing.List[str]</code> | volumes is an allowlist of volume plugins. |

---

##### `fs_group`<sup>Required</sup> <a name="fs_group" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.fsGroup"></a>

```python
fs_group: PodSecurityPolicySpecFsGroup
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup">PodSecurityPolicySpecFsGroup</a>

fs_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#fs_group PodSecurityPolicy#fs_group}

---

##### `run_as_user`<sup>Required</sup> <a name="run_as_user" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.runAsUser"></a>

```python
run_as_user: PodSecurityPolicySpecRunAsUser
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser">PodSecurityPolicySpecRunAsUser</a>

run_as_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#run_as_user PodSecurityPolicy#run_as_user}

---

##### `supplemental_groups`<sup>Required</sup> <a name="supplemental_groups" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.supplementalGroups"></a>

```python
supplemental_groups: PodSecurityPolicySpecSupplementalGroups
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups">PodSecurityPolicySpecSupplementalGroups</a>

supplemental_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#supplemental_groups PodSecurityPolicy#supplemental_groups}

---

##### `allowed_capabilities`<sup>Optional</sup> <a name="allowed_capabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedCapabilities"></a>

```python
allowed_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

allowedCapabilities is a list of capabilities that can be requested to add to the container.

Capabilities in this field may be added at the pod author's discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#allowed_capabilities PodSecurityPolicy#allowed_capabilities}

---

##### `allowed_flex_volumes`<sup>Optional</sup> <a name="allowed_flex_volumes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedFlexVolumes"></a>

```python
allowed_flex_volumes: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecAllowedFlexVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes">PodSecurityPolicySpecAllowedFlexVolumes</a>]]

allowed_flex_volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#allowed_flex_volumes PodSecurityPolicy#allowed_flex_volumes}

---

##### `allowed_host_paths`<sup>Optional</sup> <a name="allowed_host_paths" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedHostPaths"></a>

```python
allowed_host_paths: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecAllowedHostPaths]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths">PodSecurityPolicySpecAllowedHostPaths</a>]]

allowed_host_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#allowed_host_paths PodSecurityPolicy#allowed_host_paths}

---

##### `allowed_proc_mount_types`<sup>Optional</sup> <a name="allowed_proc_mount_types" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedProcMountTypes"></a>

```python
allowed_proc_mount_types: typing.List[str]
```

- *Type:* typing.List[str]

AllowedProcMountTypes is an allowlist of allowed ProcMountTypes.

Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#allowed_proc_mount_types PodSecurityPolicy#allowed_proc_mount_types}

---

##### `allowed_unsafe_sysctls`<sup>Optional</sup> <a name="allowed_unsafe_sysctls" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedUnsafeSysctls"></a>

```python
allowed_unsafe_sysctls: typing.List[str]
```

- *Type:* typing.List[str]

allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none.

Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of allowed sysctls. Single * means all unsafe sysctls are allowed. Kubelet has to allowlist all allowed unsafe sysctls explicitly to avoid rejection.

Examples: e.g. "foo/*" allows "foo/bar", "foo/baz", etc. e.g. "foo.*" allows "foo.bar", "foo.baz", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#allowed_unsafe_sysctls PodSecurityPolicy#allowed_unsafe_sysctls}

---

##### `allow_privilege_escalation`<sup>Optional</sup> <a name="allow_privilege_escalation" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowPrivilegeEscalation"></a>

```python
allow_privilege_escalation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#allow_privilege_escalation PodSecurityPolicy#allow_privilege_escalation}

---

##### `default_add_capabilities`<sup>Optional</sup> <a name="default_add_capabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.defaultAddCapabilities"></a>

```python
default_add_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.

You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#default_add_capabilities PodSecurityPolicy#default_add_capabilities}

---

##### `default_allow_privilege_escalation`<sup>Optional</sup> <a name="default_allow_privilege_escalation" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.defaultAllowPrivilegeEscalation"></a>

```python
default_allow_privilege_escalation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#default_allow_privilege_escalation PodSecurityPolicy#default_allow_privilege_escalation}

---

##### `forbidden_sysctls`<sup>Optional</sup> <a name="forbidden_sysctls" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.forbiddenSysctls"></a>

```python
forbidden_sysctls: typing.List[str]
```

- *Type:* typing.List[str]

forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none.

Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of forbidden sysctls. Single * means all sysctls are forbidden.

Examples: e.g. "foo/*" forbids "foo/bar", "foo/baz", etc. e.g. "foo.*" forbids "foo.bar", "foo.baz", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#forbidden_sysctls PodSecurityPolicy#forbidden_sysctls}

---

##### `host_ipc`<sup>Optional</sup> <a name="host_ipc" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.hostIpc"></a>

```python
host_ipc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

hostIPC determines if the policy allows the use of HostIPC in the pod spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#host_ipc PodSecurityPolicy#host_ipc}

---

##### `host_network`<sup>Optional</sup> <a name="host_network" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.hostNetwork"></a>

```python
host_network: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

hostNetwork determines if the policy allows the use of HostNetwork in the pod spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#host_network PodSecurityPolicy#host_network}

---

##### `host_pid`<sup>Optional</sup> <a name="host_pid" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.hostPid"></a>

```python
host_pid: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

hostPID determines if the policy allows the use of HostPID in the pod spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#host_pid PodSecurityPolicy#host_pid}

---

##### `host_ports`<sup>Optional</sup> <a name="host_ports" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.hostPorts"></a>

```python
host_ports: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecHostPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts">PodSecurityPolicySpecHostPorts</a>]]

host_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#host_ports PodSecurityPolicy#host_ports}

---

##### `privileged`<sup>Optional</sup> <a name="privileged" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.privileged"></a>

```python
privileged: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

privileged determines if a pod can request to be run as privileged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#privileged PodSecurityPolicy#privileged}

---

##### `read_only_root_filesystem`<sup>Optional</sup> <a name="read_only_root_filesystem" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.readOnlyRootFilesystem"></a>

```python
read_only_root_filesystem: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.

If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#read_only_root_filesystem PodSecurityPolicy#read_only_root_filesystem}

---

##### `required_drop_capabilities`<sup>Optional</sup> <a name="required_drop_capabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.requiredDropCapabilities"></a>

```python
required_drop_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

requiredDropCapabilities are the capabilities that will be dropped from the container.

These are required to be dropped and cannot be added.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#required_drop_capabilities PodSecurityPolicy#required_drop_capabilities}

---

##### `run_as_group`<sup>Optional</sup> <a name="run_as_group" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.runAsGroup"></a>

```python
run_as_group: PodSecurityPolicySpecRunAsGroup
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup">PodSecurityPolicySpecRunAsGroup</a>

run_as_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#run_as_group PodSecurityPolicy#run_as_group}

---

##### `se_linux`<sup>Optional</sup> <a name="se_linux" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.seLinux"></a>

```python
se_linux: PodSecurityPolicySpecSeLinux
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux">PodSecurityPolicySpecSeLinux</a>

se_linux block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#se_linux PodSecurityPolicy#se_linux}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.volumes"></a>

```python
volumes: typing.List[str]
```

- *Type:* typing.List[str]

volumes is an allowlist of volume plugins.

Empty indicates that no volumes may be used. To allow all volumes you may use '*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#volumes PodSecurityPolicy#volumes}

---

### PodSecurityPolicySpecAllowedFlexVolumes <a name="PodSecurityPolicySpecAllowedFlexVolumes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes(
  driver: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes.property.driver">driver</a></code> | <code>str</code> | driver is the name of the Flexvolume driver. |

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes.property.driver"></a>

```python
driver: str
```

- *Type:* str

driver is the name of the Flexvolume driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#driver PodSecurityPolicy#driver}

---

### PodSecurityPolicySpecAllowedHostPaths <a name="PodSecurityPolicySpecAllowedHostPaths" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths(
  path_prefix: str,
  read_only: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths.property.pathPrefix">path_prefix</a></code> | <code>str</code> | pathPrefix is the path prefix that the host volume must match. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | when set to true, will allow host volumes matching the pathPrefix only if all volume mounts are readOnly. |

---

##### `path_prefix`<sup>Required</sup> <a name="path_prefix" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths.property.pathPrefix"></a>

```python
path_prefix: str
```

- *Type:* str

pathPrefix is the path prefix that the host volume must match.

It does not support `*`. Trailing slashes are trimmed when validating the path prefix with a host path.

Examples: `/foo` would allow `/foo`, `/foo/` and `/foo/bar` `/foo` would not allow `/food` or `/etc/foo`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#path_prefix PodSecurityPolicy#path_prefix}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

when set to true, will allow host volumes matching the pathPrefix only if all volume mounts are readOnly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#read_only PodSecurityPolicy#read_only}

---

### PodSecurityPolicySpecFsGroup <a name="PodSecurityPolicySpecFsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecFsGroup(
  rule: str,
  range: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecFsGroupRange]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup.property.rule">rule</a></code> | <code>str</code> | rule is the strategy that will dictate what FSGroup is used in the SecurityContext. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup.property.range">range</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange">PodSecurityPolicySpecFsGroupRange</a>]]</code> | range block. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup.property.rule"></a>

```python
rule: str
```

- *Type:* str

rule is the strategy that will dictate what FSGroup is used in the SecurityContext.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#rule PodSecurityPolicy#rule}

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup.property.range"></a>

```python
range: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecFsGroupRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange">PodSecurityPolicySpecFsGroupRange</a>]]

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#range PodSecurityPolicy#range}

---

### PodSecurityPolicySpecFsGroupRange <a name="PodSecurityPolicySpecFsGroupRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecFsGroupRange(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange.property.max">max</a></code> | <code>typing.Union[int, float]</code> | max is the end of the range, inclusive. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange.property.min">min</a></code> | <code>typing.Union[int, float]</code> | min is the start of the range, inclusive. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

max is the end of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#max PodSecurityPolicy#max}

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

min is the start of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#min PodSecurityPolicy#min}

---

### PodSecurityPolicySpecHostPorts <a name="PodSecurityPolicySpecHostPorts" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecHostPorts(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts.property.max">max</a></code> | <code>typing.Union[int, float]</code> | max is the end of the range, inclusive. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts.property.min">min</a></code> | <code>typing.Union[int, float]</code> | min is the start of the range, inclusive. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

max is the end of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#max PodSecurityPolicy#max}

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

min is the start of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#min PodSecurityPolicy#min}

---

### PodSecurityPolicySpecRunAsGroup <a name="PodSecurityPolicySpecRunAsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecRunAsGroup(
  rule: str,
  range: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecRunAsGroupRange]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup.property.rule">rule</a></code> | <code>str</code> | rule is the strategy that will dictate the allowable RunAsGroup values that may be set. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup.property.range">range</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange">PodSecurityPolicySpecRunAsGroupRange</a>]]</code> | range block. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup.property.rule"></a>

```python
rule: str
```

- *Type:* str

rule is the strategy that will dictate the allowable RunAsGroup values that may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#rule PodSecurityPolicy#rule}

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup.property.range"></a>

```python
range: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecRunAsGroupRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange">PodSecurityPolicySpecRunAsGroupRange</a>]]

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#range PodSecurityPolicy#range}

---

### PodSecurityPolicySpecRunAsGroupRange <a name="PodSecurityPolicySpecRunAsGroupRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange.property.max">max</a></code> | <code>typing.Union[int, float]</code> | max is the end of the range, inclusive. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange.property.min">min</a></code> | <code>typing.Union[int, float]</code> | min is the start of the range, inclusive. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

max is the end of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#max PodSecurityPolicy#max}

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

min is the start of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#min PodSecurityPolicy#min}

---

### PodSecurityPolicySpecRunAsUser <a name="PodSecurityPolicySpecRunAsUser" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecRunAsUser(
  rule: str,
  range: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecRunAsUserRange]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser.property.rule">rule</a></code> | <code>str</code> | rule is the strategy that will dictate the allowable RunAsUser values that may be set. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser.property.range">range</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange">PodSecurityPolicySpecRunAsUserRange</a>]]</code> | range block. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser.property.rule"></a>

```python
rule: str
```

- *Type:* str

rule is the strategy that will dictate the allowable RunAsUser values that may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#rule PodSecurityPolicy#rule}

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser.property.range"></a>

```python
range: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecRunAsUserRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange">PodSecurityPolicySpecRunAsUserRange</a>]]

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#range PodSecurityPolicy#range}

---

### PodSecurityPolicySpecRunAsUserRange <a name="PodSecurityPolicySpecRunAsUserRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange.property.max">max</a></code> | <code>typing.Union[int, float]</code> | max is the end of the range, inclusive. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange.property.min">min</a></code> | <code>typing.Union[int, float]</code> | min is the start of the range, inclusive. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

max is the end of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#max PodSecurityPolicy#max}

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

min is the start of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#min PodSecurityPolicy#min}

---

### PodSecurityPolicySpecSeLinux <a name="PodSecurityPolicySpecSeLinux" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecSeLinux(
  rule: str,
  se_linux_options: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecSeLinuxSeLinuxOptions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux.property.rule">rule</a></code> | <code>str</code> | rule is the strategy that will dictate the allowable labels that may be set. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux.property.seLinuxOptions">se_linux_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions">PodSecurityPolicySpecSeLinuxSeLinuxOptions</a>]]</code> | se_linux_options block. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux.property.rule"></a>

```python
rule: str
```

- *Type:* str

rule is the strategy that will dictate the allowable labels that may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#rule PodSecurityPolicy#rule}

---

##### `se_linux_options`<sup>Optional</sup> <a name="se_linux_options" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux.property.seLinuxOptions"></a>

```python
se_linux_options: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecSeLinuxSeLinuxOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions">PodSecurityPolicySpecSeLinuxSeLinuxOptions</a>]]

se_linux_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#se_linux_options PodSecurityPolicy#se_linux_options}

---

### PodSecurityPolicySpecSeLinuxSeLinuxOptions <a name="PodSecurityPolicySpecSeLinuxSeLinuxOptions" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions(
  level: str,
  role: str,
  type: str,
  user: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.property.level">level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#level PodSecurityPolicy#level}. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#role PodSecurityPolicy#role}. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#type PodSecurityPolicy#type}. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.property.user">user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#user PodSecurityPolicy#user}. |

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.property.level"></a>

```python
level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#level PodSecurityPolicy#level}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#role PodSecurityPolicy#role}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#type PodSecurityPolicy#type}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.property.user"></a>

```python
user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#user PodSecurityPolicy#user}.

---

### PodSecurityPolicySpecSupplementalGroups <a name="PodSecurityPolicySpecSupplementalGroups" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups(
  rule: str,
  range: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecSupplementalGroupsRange]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups.property.rule">rule</a></code> | <code>str</code> | rule is the strategy that will dictate what supplemental groups is used in the SecurityContext. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups.property.range">range</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange">PodSecurityPolicySpecSupplementalGroupsRange</a>]]</code> | range block. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups.property.rule"></a>

```python
rule: str
```

- *Type:* str

rule is the strategy that will dictate what supplemental groups is used in the SecurityContext.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#rule PodSecurityPolicy#rule}

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups.property.range"></a>

```python
range: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecSupplementalGroupsRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange">PodSecurityPolicySpecSupplementalGroupsRange</a>]]

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#range PodSecurityPolicy#range}

---

### PodSecurityPolicySpecSupplementalGroupsRange <a name="PodSecurityPolicySpecSupplementalGroupsRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange.property.max">max</a></code> | <code>typing.Union[int, float]</code> | max is the end of the range, inclusive. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange.property.min">min</a></code> | <code>typing.Union[int, float]</code> | min is the start of the range, inclusive. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

max is the end of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#max PodSecurityPolicy#max}

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

min is the start of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#min PodSecurityPolicy#min}

---

## Classes <a name="Classes" id="Classes"></a>

### PodSecurityPolicyMetadataOutputReference <a name="PodSecurityPolicyMetadataOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicyMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata">PodSecurityPolicyMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.internalValue"></a>

```python
internal_value: PodSecurityPolicyMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata">PodSecurityPolicyMetadata</a>

---


### PodSecurityPolicySpecAllowedFlexVolumesList <a name="PodSecurityPolicySpecAllowedFlexVolumesList" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PodSecurityPolicySpecAllowedFlexVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes">PodSecurityPolicySpecAllowedFlexVolumes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecAllowedFlexVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes">PodSecurityPolicySpecAllowedFlexVolumes</a>]]

---


### PodSecurityPolicySpecAllowedFlexVolumesOutputReference <a name="PodSecurityPolicySpecAllowedFlexVolumesOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.driverInput">driver_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.driver">driver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes">PodSecurityPolicySpecAllowedFlexVolumes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `driver_input`<sup>Optional</sup> <a name="driver_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.driverInput"></a>

```python
driver_input: str
```

- *Type:* str

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.driver"></a>

```python
driver: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PodSecurityPolicySpecAllowedFlexVolumes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes">PodSecurityPolicySpecAllowedFlexVolumes</a>]

---


### PodSecurityPolicySpecAllowedHostPathsList <a name="PodSecurityPolicySpecAllowedHostPathsList" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PodSecurityPolicySpecAllowedHostPathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths">PodSecurityPolicySpecAllowedHostPaths</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecAllowedHostPaths]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths">PodSecurityPolicySpecAllowedHostPaths</a>]]

---


### PodSecurityPolicySpecAllowedHostPathsOutputReference <a name="PodSecurityPolicySpecAllowedHostPathsOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.pathPrefixInput">path_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.pathPrefix">path_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths">PodSecurityPolicySpecAllowedHostPaths</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_prefix_input`<sup>Optional</sup> <a name="path_prefix_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.pathPrefixInput"></a>

```python
path_prefix_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `path_prefix`<sup>Required</sup> <a name="path_prefix" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.pathPrefix"></a>

```python
path_prefix: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PodSecurityPolicySpecAllowedHostPaths]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths">PodSecurityPolicySpecAllowedHostPaths</a>]

---


### PodSecurityPolicySpecFsGroupOutputReference <a name="PodSecurityPolicySpecFsGroupOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.putRange">put_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.resetRange">reset_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_range` <a name="put_range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.putRange"></a>

```python
def put_range(
  value: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecFsGroupRange]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.putRange.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange">PodSecurityPolicySpecFsGroupRange</a>]]

---

##### `reset_range` <a name="reset_range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.resetRange"></a>

```python
def reset_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList">PodSecurityPolicySpecFsGroupRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.rangeInput">range_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange">PodSecurityPolicySpecFsGroupRange</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.ruleInput">rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.rule">rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup">PodSecurityPolicySpecFsGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.range"></a>

```python
range: PodSecurityPolicySpecFsGroupRangeList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList">PodSecurityPolicySpecFsGroupRangeList</a>

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.rangeInput"></a>

```python
range_input: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecFsGroupRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange">PodSecurityPolicySpecFsGroupRange</a>]]

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.ruleInput"></a>

```python
rule_input: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.rule"></a>

```python
rule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.internalValue"></a>

```python
internal_value: PodSecurityPolicySpecFsGroup
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup">PodSecurityPolicySpecFsGroup</a>

---


### PodSecurityPolicySpecFsGroupRangeList <a name="PodSecurityPolicySpecFsGroupRangeList" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PodSecurityPolicySpecFsGroupRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange">PodSecurityPolicySpecFsGroupRange</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecFsGroupRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange">PodSecurityPolicySpecFsGroupRange</a>]]

---


### PodSecurityPolicySpecFsGroupRangeOutputReference <a name="PodSecurityPolicySpecFsGroupRangeOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange">PodSecurityPolicySpecFsGroupRange</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PodSecurityPolicySpecFsGroupRange]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange">PodSecurityPolicySpecFsGroupRange</a>]

---


### PodSecurityPolicySpecHostPortsList <a name="PodSecurityPolicySpecHostPortsList" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecHostPortsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PodSecurityPolicySpecHostPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts">PodSecurityPolicySpecHostPorts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecHostPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts">PodSecurityPolicySpecHostPorts</a>]]

---


### PodSecurityPolicySpecHostPortsOutputReference <a name="PodSecurityPolicySpecHostPortsOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts">PodSecurityPolicySpecHostPorts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PodSecurityPolicySpecHostPorts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts">PodSecurityPolicySpecHostPorts</a>]

---


### PodSecurityPolicySpecOutputReference <a name="PodSecurityPolicySpecOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putAllowedFlexVolumes">put_allowed_flex_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putAllowedHostPaths">put_allowed_host_paths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putFsGroup">put_fs_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putHostPorts">put_host_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putRunAsGroup">put_run_as_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putRunAsUser">put_run_as_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putSeLinux">put_se_linux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putSupplementalGroups">put_supplemental_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedCapabilities">reset_allowed_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedFlexVolumes">reset_allowed_flex_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedHostPaths">reset_allowed_host_paths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedProcMountTypes">reset_allowed_proc_mount_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedUnsafeSysctls">reset_allowed_unsafe_sysctls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowPrivilegeEscalation">reset_allow_privilege_escalation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetDefaultAddCapabilities">reset_default_add_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetDefaultAllowPrivilegeEscalation">reset_default_allow_privilege_escalation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetForbiddenSysctls">reset_forbidden_sysctls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetHostIpc">reset_host_ipc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetHostNetwork">reset_host_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetHostPid">reset_host_pid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetHostPorts">reset_host_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetPrivileged">reset_privileged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetReadOnlyRootFilesystem">reset_read_only_root_filesystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetRequiredDropCapabilities">reset_required_drop_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetRunAsGroup">reset_run_as_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetSeLinux">reset_se_linux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetVolumes">reset_volumes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allowed_flex_volumes` <a name="put_allowed_flex_volumes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putAllowedFlexVolumes"></a>

```python
def put_allowed_flex_volumes(
  value: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecAllowedFlexVolumes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putAllowedFlexVolumes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes">PodSecurityPolicySpecAllowedFlexVolumes</a>]]

---

##### `put_allowed_host_paths` <a name="put_allowed_host_paths" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putAllowedHostPaths"></a>

```python
def put_allowed_host_paths(
  value: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecAllowedHostPaths]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putAllowedHostPaths.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths">PodSecurityPolicySpecAllowedHostPaths</a>]]

---

##### `put_fs_group` <a name="put_fs_group" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putFsGroup"></a>

```python
def put_fs_group(
  rule: str,
  range: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecFsGroupRange]] = None
) -> None
```

###### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putFsGroup.parameter.rule"></a>

- *Type:* str

rule is the strategy that will dictate what FSGroup is used in the SecurityContext.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#rule PodSecurityPolicy#rule}

---

###### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putFsGroup.parameter.range"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange">PodSecurityPolicySpecFsGroupRange</a>]]

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#range PodSecurityPolicy#range}

---

##### `put_host_ports` <a name="put_host_ports" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putHostPorts"></a>

```python
def put_host_ports(
  value: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecHostPorts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putHostPorts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts">PodSecurityPolicySpecHostPorts</a>]]

---

##### `put_run_as_group` <a name="put_run_as_group" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putRunAsGroup"></a>

```python
def put_run_as_group(
  rule: str,
  range: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecRunAsGroupRange]] = None
) -> None
```

###### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putRunAsGroup.parameter.rule"></a>

- *Type:* str

rule is the strategy that will dictate the allowable RunAsGroup values that may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#rule PodSecurityPolicy#rule}

---

###### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putRunAsGroup.parameter.range"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange">PodSecurityPolicySpecRunAsGroupRange</a>]]

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#range PodSecurityPolicy#range}

---

##### `put_run_as_user` <a name="put_run_as_user" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putRunAsUser"></a>

```python
def put_run_as_user(
  rule: str,
  range: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecRunAsUserRange]] = None
) -> None
```

###### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putRunAsUser.parameter.rule"></a>

- *Type:* str

rule is the strategy that will dictate the allowable RunAsUser values that may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#rule PodSecurityPolicy#rule}

---

###### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putRunAsUser.parameter.range"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange">PodSecurityPolicySpecRunAsUserRange</a>]]

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#range PodSecurityPolicy#range}

---

##### `put_se_linux` <a name="put_se_linux" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putSeLinux"></a>

```python
def put_se_linux(
  rule: str,
  se_linux_options: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecSeLinuxSeLinuxOptions]] = None
) -> None
```

###### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putSeLinux.parameter.rule"></a>

- *Type:* str

rule is the strategy that will dictate the allowable labels that may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#rule PodSecurityPolicy#rule}

---

###### `se_linux_options`<sup>Optional</sup> <a name="se_linux_options" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putSeLinux.parameter.seLinuxOptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions">PodSecurityPolicySpecSeLinuxSeLinuxOptions</a>]]

se_linux_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#se_linux_options PodSecurityPolicy#se_linux_options}

---

##### `put_supplemental_groups` <a name="put_supplemental_groups" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putSupplementalGroups"></a>

```python
def put_supplemental_groups(
  rule: str,
  range: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecSupplementalGroupsRange]] = None
) -> None
```

###### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putSupplementalGroups.parameter.rule"></a>

- *Type:* str

rule is the strategy that will dictate what supplemental groups is used in the SecurityContext.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#rule PodSecurityPolicy#rule}

---

###### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putSupplementalGroups.parameter.range"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange">PodSecurityPolicySpecSupplementalGroupsRange</a>]]

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#range PodSecurityPolicy#range}

---

##### `reset_allowed_capabilities` <a name="reset_allowed_capabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedCapabilities"></a>

```python
def reset_allowed_capabilities() -> None
```

##### `reset_allowed_flex_volumes` <a name="reset_allowed_flex_volumes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedFlexVolumes"></a>

```python
def reset_allowed_flex_volumes() -> None
```

##### `reset_allowed_host_paths` <a name="reset_allowed_host_paths" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedHostPaths"></a>

```python
def reset_allowed_host_paths() -> None
```

##### `reset_allowed_proc_mount_types` <a name="reset_allowed_proc_mount_types" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedProcMountTypes"></a>

```python
def reset_allowed_proc_mount_types() -> None
```

##### `reset_allowed_unsafe_sysctls` <a name="reset_allowed_unsafe_sysctls" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedUnsafeSysctls"></a>

```python
def reset_allowed_unsafe_sysctls() -> None
```

##### `reset_allow_privilege_escalation` <a name="reset_allow_privilege_escalation" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowPrivilegeEscalation"></a>

```python
def reset_allow_privilege_escalation() -> None
```

##### `reset_default_add_capabilities` <a name="reset_default_add_capabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetDefaultAddCapabilities"></a>

```python
def reset_default_add_capabilities() -> None
```

##### `reset_default_allow_privilege_escalation` <a name="reset_default_allow_privilege_escalation" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetDefaultAllowPrivilegeEscalation"></a>

```python
def reset_default_allow_privilege_escalation() -> None
```

##### `reset_forbidden_sysctls` <a name="reset_forbidden_sysctls" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetForbiddenSysctls"></a>

```python
def reset_forbidden_sysctls() -> None
```

##### `reset_host_ipc` <a name="reset_host_ipc" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetHostIpc"></a>

```python
def reset_host_ipc() -> None
```

##### `reset_host_network` <a name="reset_host_network" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetHostNetwork"></a>

```python
def reset_host_network() -> None
```

##### `reset_host_pid` <a name="reset_host_pid" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetHostPid"></a>

```python
def reset_host_pid() -> None
```

##### `reset_host_ports` <a name="reset_host_ports" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetHostPorts"></a>

```python
def reset_host_ports() -> None
```

##### `reset_privileged` <a name="reset_privileged" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetPrivileged"></a>

```python
def reset_privileged() -> None
```

##### `reset_read_only_root_filesystem` <a name="reset_read_only_root_filesystem" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetReadOnlyRootFilesystem"></a>

```python
def reset_read_only_root_filesystem() -> None
```

##### `reset_required_drop_capabilities` <a name="reset_required_drop_capabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetRequiredDropCapabilities"></a>

```python
def reset_required_drop_capabilities() -> None
```

##### `reset_run_as_group` <a name="reset_run_as_group" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetRunAsGroup"></a>

```python
def reset_run_as_group() -> None
```

##### `reset_se_linux` <a name="reset_se_linux" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetSeLinux"></a>

```python
def reset_se_linux() -> None
```

##### `reset_volumes` <a name="reset_volumes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetVolumes"></a>

```python
def reset_volumes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedFlexVolumes">allowed_flex_volumes</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList">PodSecurityPolicySpecAllowedFlexVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedHostPaths">allowed_host_paths</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList">PodSecurityPolicySpecAllowedHostPathsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.fsGroup">fs_group</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference">PodSecurityPolicySpecFsGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostPorts">host_ports</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList">PodSecurityPolicySpecHostPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.runAsGroup">run_as_group</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference">PodSecurityPolicySpecRunAsGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.runAsUser">run_as_user</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference">PodSecurityPolicySpecRunAsUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.seLinux">se_linux</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference">PodSecurityPolicySpecSeLinuxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.supplementalGroups">supplemental_groups</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference">PodSecurityPolicySpecSupplementalGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedCapabilitiesInput">allowed_capabilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedFlexVolumesInput">allowed_flex_volumes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes">PodSecurityPolicySpecAllowedFlexVolumes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedHostPathsInput">allowed_host_paths_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths">PodSecurityPolicySpecAllowedHostPaths</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedProcMountTypesInput">allowed_proc_mount_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedUnsafeSysctlsInput">allowed_unsafe_sysctls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowPrivilegeEscalationInput">allow_privilege_escalation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.defaultAddCapabilitiesInput">default_add_capabilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.defaultAllowPrivilegeEscalationInput">default_allow_privilege_escalation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.forbiddenSysctlsInput">forbidden_sysctls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.fsGroupInput">fs_group_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup">PodSecurityPolicySpecFsGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostIpcInput">host_ipc_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostNetworkInput">host_network_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostPidInput">host_pid_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostPortsInput">host_ports_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts">PodSecurityPolicySpecHostPorts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.privilegedInput">privileged_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.readOnlyRootFilesystemInput">read_only_root_filesystem_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.requiredDropCapabilitiesInput">required_drop_capabilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.runAsGroupInput">run_as_group_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup">PodSecurityPolicySpecRunAsGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.runAsUserInput">run_as_user_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser">PodSecurityPolicySpecRunAsUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.seLinuxInput">se_linux_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux">PodSecurityPolicySpecSeLinux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.supplementalGroupsInput">supplemental_groups_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups">PodSecurityPolicySpecSupplementalGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.volumesInput">volumes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedCapabilities">allowed_capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedProcMountTypes">allowed_proc_mount_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedUnsafeSysctls">allowed_unsafe_sysctls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowPrivilegeEscalation">allow_privilege_escalation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.defaultAddCapabilities">default_add_capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.defaultAllowPrivilegeEscalation">default_allow_privilege_escalation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.forbiddenSysctls">forbidden_sysctls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostIpc">host_ipc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostNetwork">host_network</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostPid">host_pid</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.privileged">privileged</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.readOnlyRootFilesystem">read_only_root_filesystem</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.requiredDropCapabilities">required_drop_capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.volumes">volumes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec">PodSecurityPolicySpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_flex_volumes`<sup>Required</sup> <a name="allowed_flex_volumes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedFlexVolumes"></a>

```python
allowed_flex_volumes: PodSecurityPolicySpecAllowedFlexVolumesList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList">PodSecurityPolicySpecAllowedFlexVolumesList</a>

---

##### `allowed_host_paths`<sup>Required</sup> <a name="allowed_host_paths" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedHostPaths"></a>

```python
allowed_host_paths: PodSecurityPolicySpecAllowedHostPathsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList">PodSecurityPolicySpecAllowedHostPathsList</a>

---

##### `fs_group`<sup>Required</sup> <a name="fs_group" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.fsGroup"></a>

```python
fs_group: PodSecurityPolicySpecFsGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference">PodSecurityPolicySpecFsGroupOutputReference</a>

---

##### `host_ports`<sup>Required</sup> <a name="host_ports" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostPorts"></a>

```python
host_ports: PodSecurityPolicySpecHostPortsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList">PodSecurityPolicySpecHostPortsList</a>

---

##### `run_as_group`<sup>Required</sup> <a name="run_as_group" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.runAsGroup"></a>

```python
run_as_group: PodSecurityPolicySpecRunAsGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference">PodSecurityPolicySpecRunAsGroupOutputReference</a>

---

##### `run_as_user`<sup>Required</sup> <a name="run_as_user" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.runAsUser"></a>

```python
run_as_user: PodSecurityPolicySpecRunAsUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference">PodSecurityPolicySpecRunAsUserOutputReference</a>

---

##### `se_linux`<sup>Required</sup> <a name="se_linux" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.seLinux"></a>

```python
se_linux: PodSecurityPolicySpecSeLinuxOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference">PodSecurityPolicySpecSeLinuxOutputReference</a>

---

##### `supplemental_groups`<sup>Required</sup> <a name="supplemental_groups" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.supplementalGroups"></a>

```python
supplemental_groups: PodSecurityPolicySpecSupplementalGroupsOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference">PodSecurityPolicySpecSupplementalGroupsOutputReference</a>

---

##### `allowed_capabilities_input`<sup>Optional</sup> <a name="allowed_capabilities_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedCapabilitiesInput"></a>

```python
allowed_capabilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_flex_volumes_input`<sup>Optional</sup> <a name="allowed_flex_volumes_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedFlexVolumesInput"></a>

```python
allowed_flex_volumes_input: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecAllowedFlexVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes">PodSecurityPolicySpecAllowedFlexVolumes</a>]]

---

##### `allowed_host_paths_input`<sup>Optional</sup> <a name="allowed_host_paths_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedHostPathsInput"></a>

```python
allowed_host_paths_input: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecAllowedHostPaths]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths">PodSecurityPolicySpecAllowedHostPaths</a>]]

---

##### `allowed_proc_mount_types_input`<sup>Optional</sup> <a name="allowed_proc_mount_types_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedProcMountTypesInput"></a>

```python
allowed_proc_mount_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_unsafe_sysctls_input`<sup>Optional</sup> <a name="allowed_unsafe_sysctls_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedUnsafeSysctlsInput"></a>

```python
allowed_unsafe_sysctls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_privilege_escalation_input`<sup>Optional</sup> <a name="allow_privilege_escalation_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowPrivilegeEscalationInput"></a>

```python
allow_privilege_escalation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_add_capabilities_input`<sup>Optional</sup> <a name="default_add_capabilities_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.defaultAddCapabilitiesInput"></a>

```python
default_add_capabilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_allow_privilege_escalation_input`<sup>Optional</sup> <a name="default_allow_privilege_escalation_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.defaultAllowPrivilegeEscalationInput"></a>

```python
default_allow_privilege_escalation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forbidden_sysctls_input`<sup>Optional</sup> <a name="forbidden_sysctls_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.forbiddenSysctlsInput"></a>

```python
forbidden_sysctls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fs_group_input`<sup>Optional</sup> <a name="fs_group_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.fsGroupInput"></a>

```python
fs_group_input: PodSecurityPolicySpecFsGroup
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup">PodSecurityPolicySpecFsGroup</a>

---

##### `host_ipc_input`<sup>Optional</sup> <a name="host_ipc_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostIpcInput"></a>

```python
host_ipc_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_network_input`<sup>Optional</sup> <a name="host_network_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostNetworkInput"></a>

```python
host_network_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_pid_input`<sup>Optional</sup> <a name="host_pid_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostPidInput"></a>

```python
host_pid_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_ports_input`<sup>Optional</sup> <a name="host_ports_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostPortsInput"></a>

```python
host_ports_input: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecHostPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts">PodSecurityPolicySpecHostPorts</a>]]

---

##### `privileged_input`<sup>Optional</sup> <a name="privileged_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.privilegedInput"></a>

```python
privileged_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_only_root_filesystem_input`<sup>Optional</sup> <a name="read_only_root_filesystem_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.readOnlyRootFilesystemInput"></a>

```python
read_only_root_filesystem_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `required_drop_capabilities_input`<sup>Optional</sup> <a name="required_drop_capabilities_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.requiredDropCapabilitiesInput"></a>

```python
required_drop_capabilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `run_as_group_input`<sup>Optional</sup> <a name="run_as_group_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.runAsGroupInput"></a>

```python
run_as_group_input: PodSecurityPolicySpecRunAsGroup
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup">PodSecurityPolicySpecRunAsGroup</a>

---

##### `run_as_user_input`<sup>Optional</sup> <a name="run_as_user_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.runAsUserInput"></a>

```python
run_as_user_input: PodSecurityPolicySpecRunAsUser
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser">PodSecurityPolicySpecRunAsUser</a>

---

##### `se_linux_input`<sup>Optional</sup> <a name="se_linux_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.seLinuxInput"></a>

```python
se_linux_input: PodSecurityPolicySpecSeLinux
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux">PodSecurityPolicySpecSeLinux</a>

---

##### `supplemental_groups_input`<sup>Optional</sup> <a name="supplemental_groups_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.supplementalGroupsInput"></a>

```python
supplemental_groups_input: PodSecurityPolicySpecSupplementalGroups
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups">PodSecurityPolicySpecSupplementalGroups</a>

---

##### `volumes_input`<sup>Optional</sup> <a name="volumes_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.volumesInput"></a>

```python
volumes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_capabilities`<sup>Required</sup> <a name="allowed_capabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedCapabilities"></a>

```python
allowed_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_proc_mount_types`<sup>Required</sup> <a name="allowed_proc_mount_types" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedProcMountTypes"></a>

```python
allowed_proc_mount_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_unsafe_sysctls`<sup>Required</sup> <a name="allowed_unsafe_sysctls" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedUnsafeSysctls"></a>

```python
allowed_unsafe_sysctls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_privilege_escalation`<sup>Required</sup> <a name="allow_privilege_escalation" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowPrivilegeEscalation"></a>

```python
allow_privilege_escalation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_add_capabilities`<sup>Required</sup> <a name="default_add_capabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.defaultAddCapabilities"></a>

```python
default_add_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_allow_privilege_escalation`<sup>Required</sup> <a name="default_allow_privilege_escalation" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.defaultAllowPrivilegeEscalation"></a>

```python
default_allow_privilege_escalation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forbidden_sysctls`<sup>Required</sup> <a name="forbidden_sysctls" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.forbiddenSysctls"></a>

```python
forbidden_sysctls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `host_ipc`<sup>Required</sup> <a name="host_ipc" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostIpc"></a>

```python
host_ipc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_network`<sup>Required</sup> <a name="host_network" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostNetwork"></a>

```python
host_network: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_pid`<sup>Required</sup> <a name="host_pid" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostPid"></a>

```python
host_pid: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `privileged`<sup>Required</sup> <a name="privileged" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.privileged"></a>

```python
privileged: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_only_root_filesystem`<sup>Required</sup> <a name="read_only_root_filesystem" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.readOnlyRootFilesystem"></a>

```python
read_only_root_filesystem: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `required_drop_capabilities`<sup>Required</sup> <a name="required_drop_capabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.requiredDropCapabilities"></a>

```python
required_drop_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.volumes"></a>

```python
volumes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.internalValue"></a>

```python
internal_value: PodSecurityPolicySpec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec">PodSecurityPolicySpec</a>

---


### PodSecurityPolicySpecRunAsGroupOutputReference <a name="PodSecurityPolicySpecRunAsGroupOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.putRange">put_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.resetRange">reset_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_range` <a name="put_range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.putRange"></a>

```python
def put_range(
  value: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecRunAsGroupRange]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.putRange.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange">PodSecurityPolicySpecRunAsGroupRange</a>]]

---

##### `reset_range` <a name="reset_range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.resetRange"></a>

```python
def reset_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList">PodSecurityPolicySpecRunAsGroupRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.rangeInput">range_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange">PodSecurityPolicySpecRunAsGroupRange</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.ruleInput">rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.rule">rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup">PodSecurityPolicySpecRunAsGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.range"></a>

```python
range: PodSecurityPolicySpecRunAsGroupRangeList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList">PodSecurityPolicySpecRunAsGroupRangeList</a>

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.rangeInput"></a>

```python
range_input: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecRunAsGroupRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange">PodSecurityPolicySpecRunAsGroupRange</a>]]

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.ruleInput"></a>

```python
rule_input: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.rule"></a>

```python
rule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.internalValue"></a>

```python
internal_value: PodSecurityPolicySpecRunAsGroup
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup">PodSecurityPolicySpecRunAsGroup</a>

---


### PodSecurityPolicySpecRunAsGroupRangeList <a name="PodSecurityPolicySpecRunAsGroupRangeList" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PodSecurityPolicySpecRunAsGroupRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange">PodSecurityPolicySpecRunAsGroupRange</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecRunAsGroupRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange">PodSecurityPolicySpecRunAsGroupRange</a>]]

---


### PodSecurityPolicySpecRunAsGroupRangeOutputReference <a name="PodSecurityPolicySpecRunAsGroupRangeOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange">PodSecurityPolicySpecRunAsGroupRange</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PodSecurityPolicySpecRunAsGroupRange]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange">PodSecurityPolicySpecRunAsGroupRange</a>]

---


### PodSecurityPolicySpecRunAsUserOutputReference <a name="PodSecurityPolicySpecRunAsUserOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.putRange">put_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.resetRange">reset_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_range` <a name="put_range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.putRange"></a>

```python
def put_range(
  value: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecRunAsUserRange]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.putRange.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange">PodSecurityPolicySpecRunAsUserRange</a>]]

---

##### `reset_range` <a name="reset_range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.resetRange"></a>

```python
def reset_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList">PodSecurityPolicySpecRunAsUserRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.rangeInput">range_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange">PodSecurityPolicySpecRunAsUserRange</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.ruleInput">rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.rule">rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser">PodSecurityPolicySpecRunAsUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.range"></a>

```python
range: PodSecurityPolicySpecRunAsUserRangeList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList">PodSecurityPolicySpecRunAsUserRangeList</a>

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.rangeInput"></a>

```python
range_input: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecRunAsUserRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange">PodSecurityPolicySpecRunAsUserRange</a>]]

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.ruleInput"></a>

```python
rule_input: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.rule"></a>

```python
rule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.internalValue"></a>

```python
internal_value: PodSecurityPolicySpecRunAsUser
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser">PodSecurityPolicySpecRunAsUser</a>

---


### PodSecurityPolicySpecRunAsUserRangeList <a name="PodSecurityPolicySpecRunAsUserRangeList" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PodSecurityPolicySpecRunAsUserRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange">PodSecurityPolicySpecRunAsUserRange</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecRunAsUserRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange">PodSecurityPolicySpecRunAsUserRange</a>]]

---


### PodSecurityPolicySpecRunAsUserRangeOutputReference <a name="PodSecurityPolicySpecRunAsUserRangeOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange">PodSecurityPolicySpecRunAsUserRange</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PodSecurityPolicySpecRunAsUserRange]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange">PodSecurityPolicySpecRunAsUserRange</a>]

---


### PodSecurityPolicySpecSeLinuxOutputReference <a name="PodSecurityPolicySpecSeLinuxOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.putSeLinuxOptions">put_se_linux_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.resetSeLinuxOptions">reset_se_linux_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_se_linux_options` <a name="put_se_linux_options" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.putSeLinuxOptions"></a>

```python
def put_se_linux_options(
  value: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecSeLinuxSeLinuxOptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.putSeLinuxOptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions">PodSecurityPolicySpecSeLinuxSeLinuxOptions</a>]]

---

##### `reset_se_linux_options` <a name="reset_se_linux_options" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.resetSeLinuxOptions"></a>

```python
def reset_se_linux_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.seLinuxOptions">se_linux_options</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList">PodSecurityPolicySpecSeLinuxSeLinuxOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.ruleInput">rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.seLinuxOptionsInput">se_linux_options_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions">PodSecurityPolicySpecSeLinuxSeLinuxOptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.rule">rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux">PodSecurityPolicySpecSeLinux</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `se_linux_options`<sup>Required</sup> <a name="se_linux_options" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.seLinuxOptions"></a>

```python
se_linux_options: PodSecurityPolicySpecSeLinuxSeLinuxOptionsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList">PodSecurityPolicySpecSeLinuxSeLinuxOptionsList</a>

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.ruleInput"></a>

```python
rule_input: str
```

- *Type:* str

---

##### `se_linux_options_input`<sup>Optional</sup> <a name="se_linux_options_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.seLinuxOptionsInput"></a>

```python
se_linux_options_input: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecSeLinuxSeLinuxOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions">PodSecurityPolicySpecSeLinuxSeLinuxOptions</a>]]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.rule"></a>

```python
rule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.internalValue"></a>

```python
internal_value: PodSecurityPolicySpecSeLinux
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux">PodSecurityPolicySpecSeLinux</a>

---


### PodSecurityPolicySpecSeLinuxSeLinuxOptionsList <a name="PodSecurityPolicySpecSeLinuxSeLinuxOptionsList" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions">PodSecurityPolicySpecSeLinuxSeLinuxOptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecSeLinuxSeLinuxOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions">PodSecurityPolicySpecSeLinuxSeLinuxOptions</a>]]

---


### PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference <a name="PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.levelInput">level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions">PodSecurityPolicySpecSeLinuxSeLinuxOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `level_input`<sup>Optional</sup> <a name="level_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.levelInput"></a>

```python
level_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PodSecurityPolicySpecSeLinuxSeLinuxOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions">PodSecurityPolicySpecSeLinuxSeLinuxOptions</a>]

---


### PodSecurityPolicySpecSupplementalGroupsOutputReference <a name="PodSecurityPolicySpecSupplementalGroupsOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.putRange">put_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.resetRange">reset_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_range` <a name="put_range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.putRange"></a>

```python
def put_range(
  value: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecSupplementalGroupsRange]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.putRange.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange">PodSecurityPolicySpecSupplementalGroupsRange</a>]]

---

##### `reset_range` <a name="reset_range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.resetRange"></a>

```python
def reset_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList">PodSecurityPolicySpecSupplementalGroupsRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.rangeInput">range_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange">PodSecurityPolicySpecSupplementalGroupsRange</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.ruleInput">rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.rule">rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups">PodSecurityPolicySpecSupplementalGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.range"></a>

```python
range: PodSecurityPolicySpecSupplementalGroupsRangeList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList">PodSecurityPolicySpecSupplementalGroupsRangeList</a>

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.rangeInput"></a>

```python
range_input: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecSupplementalGroupsRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange">PodSecurityPolicySpecSupplementalGroupsRange</a>]]

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.ruleInput"></a>

```python
rule_input: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.rule"></a>

```python
rule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.internalValue"></a>

```python
internal_value: PodSecurityPolicySpecSupplementalGroups
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups">PodSecurityPolicySpecSupplementalGroups</a>

---


### PodSecurityPolicySpecSupplementalGroupsRangeList <a name="PodSecurityPolicySpecSupplementalGroupsRangeList" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PodSecurityPolicySpecSupplementalGroupsRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange">PodSecurityPolicySpecSupplementalGroupsRange</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PodSecurityPolicySpecSupplementalGroupsRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange">PodSecurityPolicySpecSupplementalGroupsRange</a>]]

---


### PodSecurityPolicySpecSupplementalGroupsRangeOutputReference <a name="PodSecurityPolicySpecSupplementalGroupsRangeOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import pod_security_policy

podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange">PodSecurityPolicySpecSupplementalGroupsRange</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PodSecurityPolicySpecSupplementalGroupsRange]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange">PodSecurityPolicySpecSupplementalGroupsRange</a>]

---



