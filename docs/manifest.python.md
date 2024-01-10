# `manifest` Submodule <a name="`manifest` Submodule" id="@cdktf/provider-kubernetes.manifest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Manifest <a name="Manifest" id="@cdktf/provider-kubernetes.manifest.Manifest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest kubernetes_manifest}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import manifest

manifest.Manifest(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  manifest: typing.Mapping[typing.Any],
  computed_fields: typing.List[str] = None,
  field_manager: ManifestFieldManager = None,
  object: typing.Mapping[typing.Any] = None,
  timeouts: ManifestTimeouts = None,
  wait: ManifestWait = None,
  wait_for: ManifestWaitFor = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.manifest">manifest</a></code> | <code>typing.Mapping[typing.Any]</code> | A Kubernetes manifest describing the desired state of the resource in HCL format. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.computedFields">computed_fields</a></code> | <code>typing.List[str]</code> | List of manifest fields whose values can be altered by the API server during 'apply'. Defaults to: ["metadata.annotations", "metadata.labels"]. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.fieldManager">field_manager</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a></code> | field_manager block. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.object">object</a></code> | <code>typing.Mapping[typing.Any]</code> | The resulting resource state, as returned by the API server after applying the desired state from `manifest`. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.wait">wait</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWait">ManifestWait</a></code> | wait block. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.waitFor">wait_for</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a></code> | A map of attribute paths and desired patterns to be matched. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.manifest"></a>

- *Type:* typing.Mapping[typing.Any]

A Kubernetes manifest describing the desired state of the resource in HCL format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#manifest Manifest#manifest}

---

##### `computed_fields`<sup>Optional</sup> <a name="computed_fields" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.computedFields"></a>

- *Type:* typing.List[str]

List of manifest fields whose values can be altered by the API server during 'apply'. Defaults to: ["metadata.annotations", "metadata.labels"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#computed_fields Manifest#computed_fields}

---

##### `field_manager`<sup>Optional</sup> <a name="field_manager" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.fieldManager"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a>

field_manager block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#field_manager Manifest#field_manager}

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.object"></a>

- *Type:* typing.Mapping[typing.Any]

The resulting resource state, as returned by the API server after applying the desired state from `manifest`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#object Manifest#object}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#timeouts Manifest#timeouts}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.wait"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWait">ManifestWait</a>

wait block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#wait Manifest#wait}

---

##### `wait_for`<sup>Optional</sup> <a name="wait_for" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.waitFor"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a>

A map of attribute paths and desired patterns to be matched.

After each apply the provider will wait for all attributes listed here to reach a value that matches the desired pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#wait_for Manifest#wait_for}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.putFieldManager">put_field_manager</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.putWait">put_wait</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.putWaitFor">put_wait_for</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.resetComputedFields">reset_computed_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.resetFieldManager">reset_field_manager</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.resetObject">reset_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.resetWait">reset_wait</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.resetWaitFor">reset_wait_for</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.manifest.Manifest.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.manifest.Manifest.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.manifest.Manifest.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.manifest.Manifest.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.manifest.Manifest.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.manifest.Manifest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.manifest.Manifest.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-kubernetes.manifest.Manifest.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.manifest.Manifest.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.manifest.Manifest.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-kubernetes.manifest.Manifest.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.manifest.Manifest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-kubernetes.manifest.Manifest.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-kubernetes.manifest.Manifest.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.manifest.Manifest.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.manifest.Manifest.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.manifest.Manifest.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.Manifest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-kubernetes.manifest.Manifest.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.manifest.Manifest.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-kubernetes.manifest.Manifest.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.manifest.Manifest.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.manifest.Manifest.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-kubernetes.manifest.Manifest.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.manifest.Manifest.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_field_manager` <a name="put_field_manager" id="@cdktf/provider-kubernetes.manifest.Manifest.putFieldManager"></a>

```python
def put_field_manager(
  force_conflicts: typing.Union[bool, IResolvable] = None,
  name: str = None
) -> None
```

###### `force_conflicts`<sup>Optional</sup> <a name="force_conflicts" id="@cdktf/provider-kubernetes.manifest.Manifest.putFieldManager.parameter.forceConflicts"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Force changes against conflicts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#force_conflicts Manifest#force_conflicts}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.manifest.Manifest.putFieldManager.parameter.name"></a>

- *Type:* str

The name to use for the field manager when creating and updating the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#name Manifest#name}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-kubernetes.manifest.Manifest.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.manifest.Manifest.putTimeouts.parameter.create"></a>

- *Type:* str

Timeout for the create operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#create Manifest#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-kubernetes.manifest.Manifest.putTimeouts.parameter.delete"></a>

- *Type:* str

Timeout for the delete operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#delete Manifest#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-kubernetes.manifest.Manifest.putTimeouts.parameter.update"></a>

- *Type:* str

Timeout for the update operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#update Manifest#update}

---

##### `put_wait` <a name="put_wait" id="@cdktf/provider-kubernetes.manifest.Manifest.putWait"></a>

```python
def put_wait(
  condition: typing.Union[IResolvable, typing.List[ManifestWaitCondition]] = None,
  fields: typing.Mapping[str] = None,
  rollout: typing.Union[bool, IResolvable] = None
) -> None
```

###### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-kubernetes.manifest.Manifest.putWait.parameter.condition"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>]]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#condition Manifest#condition}

---

###### `fields`<sup>Optional</sup> <a name="fields" id="@cdktf/provider-kubernetes.manifest.Manifest.putWait.parameter.fields"></a>

- *Type:* typing.Mapping[str]

A map of paths to fields to wait for a specific field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#fields Manifest#fields}

---

###### `rollout`<sup>Optional</sup> <a name="rollout" id="@cdktf/provider-kubernetes.manifest.Manifest.putWait.parameter.rollout"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Wait for rollout to complete on resources that support `kubectl rollout status`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#rollout Manifest#rollout}

---

##### `put_wait_for` <a name="put_wait_for" id="@cdktf/provider-kubernetes.manifest.Manifest.putWaitFor"></a>

```python
def put_wait_for(
  fields: typing.Mapping[str] = None
) -> None
```

###### `fields`<sup>Optional</sup> <a name="fields" id="@cdktf/provider-kubernetes.manifest.Manifest.putWaitFor.parameter.fields"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#fields Manifest#fields}.

---

##### `reset_computed_fields` <a name="reset_computed_fields" id="@cdktf/provider-kubernetes.manifest.Manifest.resetComputedFields"></a>

```python
def reset_computed_fields() -> None
```

##### `reset_field_manager` <a name="reset_field_manager" id="@cdktf/provider-kubernetes.manifest.Manifest.resetFieldManager"></a>

```python
def reset_field_manager() -> None
```

##### `reset_object` <a name="reset_object" id="@cdktf/provider-kubernetes.manifest.Manifest.resetObject"></a>

```python
def reset_object() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-kubernetes.manifest.Manifest.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_wait` <a name="reset_wait" id="@cdktf/provider-kubernetes.manifest.Manifest.resetWait"></a>

```python
def reset_wait() -> None
```

##### `reset_wait_for` <a name="reset_wait_for" id="@cdktf/provider-kubernetes.manifest.Manifest.resetWaitFor"></a>

```python
def reset_wait_for() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Manifest resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.manifest.Manifest.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import manifest

manifest.Manifest.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.manifest.Manifest.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.manifest.Manifest.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import manifest

manifest.Manifest.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.manifest.Manifest.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-kubernetes.manifest.Manifest.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_kubernetes import manifest

manifest.Manifest.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.manifest.Manifest.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-kubernetes.manifest.Manifest.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_kubernetes import manifest

manifest.Manifest.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Manifest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.manifest.Manifest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-kubernetes.manifest.Manifest.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Manifest to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-kubernetes.manifest.Manifest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Manifest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.manifest.Manifest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Manifest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.fieldManager">field_manager</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference">ManifestFieldManagerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference">ManifestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.wait">wait</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference">ManifestWaitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.waitFor">wait_for</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference">ManifestWaitForOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.computedFieldsInput">computed_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.fieldManagerInput">field_manager_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.manifestInput">manifest_input</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.objectInput">object_input</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.timeoutsInput">timeouts_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.waitForInput">wait_for_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.waitInput">wait_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWait">ManifestWait</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.computedFields">computed_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.manifest">manifest</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.object">object</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.manifest.Manifest.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.manifest.Manifest.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.manifest.Manifest.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.manifest.Manifest.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.manifest.Manifest.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.manifest.Manifest.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.manifest.Manifest.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.manifest.Manifest.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.manifest.Manifest.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.manifest.Manifest.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.manifest.Manifest.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.manifest.Manifest.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.manifest.Manifest.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.manifest.Manifest.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `field_manager`<sup>Required</sup> <a name="field_manager" id="@cdktf/provider-kubernetes.manifest.Manifest.property.fieldManager"></a>

```python
field_manager: ManifestFieldManagerOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference">ManifestFieldManagerOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.manifest.Manifest.property.timeouts"></a>

```python
timeouts: ManifestTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference">ManifestTimeoutsOutputReference</a>

---

##### `wait`<sup>Required</sup> <a name="wait" id="@cdktf/provider-kubernetes.manifest.Manifest.property.wait"></a>

```python
wait: ManifestWaitOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference">ManifestWaitOutputReference</a>

---

##### `wait_for`<sup>Required</sup> <a name="wait_for" id="@cdktf/provider-kubernetes.manifest.Manifest.property.waitFor"></a>

```python
wait_for: ManifestWaitForOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference">ManifestWaitForOutputReference</a>

---

##### `computed_fields_input`<sup>Optional</sup> <a name="computed_fields_input" id="@cdktf/provider-kubernetes.manifest.Manifest.property.computedFieldsInput"></a>

```python
computed_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field_manager_input`<sup>Optional</sup> <a name="field_manager_input" id="@cdktf/provider-kubernetes.manifest.Manifest.property.fieldManagerInput"></a>

```python
field_manager_input: ManifestFieldManager
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a>

---

##### `manifest_input`<sup>Optional</sup> <a name="manifest_input" id="@cdktf/provider-kubernetes.manifest.Manifest.property.manifestInput"></a>

```python
manifest_input: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="@cdktf/provider-kubernetes.manifest.Manifest.property.objectInput"></a>

```python
object_input: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-kubernetes.manifest.Manifest.property.timeoutsInput"></a>

```python
timeouts_input: ManifestTimeouts
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a>

---

##### `wait_for_input`<sup>Optional</sup> <a name="wait_for_input" id="@cdktf/provider-kubernetes.manifest.Manifest.property.waitForInput"></a>

```python
wait_for_input: typing.Union[IResolvable, ManifestWaitFor]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a>]

---

##### `wait_input`<sup>Optional</sup> <a name="wait_input" id="@cdktf/provider-kubernetes.manifest.Manifest.property.waitInput"></a>

```python
wait_input: ManifestWait
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWait">ManifestWait</a>

---

##### `computed_fields`<sup>Required</sup> <a name="computed_fields" id="@cdktf/provider-kubernetes.manifest.Manifest.property.computedFields"></a>

```python
computed_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-kubernetes.manifest.Manifest.property.manifest"></a>

```python
manifest: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-kubernetes.manifest.Manifest.property.object"></a>

```python
object: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.manifest.Manifest.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ManifestConfig <a name="ManifestConfig" id="@cdktf/provider-kubernetes.manifest.ManifestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import manifest

manifest.ManifestConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  manifest: typing.Mapping[typing.Any],
  computed_fields: typing.List[str] = None,
  field_manager: ManifestFieldManager = None,
  object: typing.Mapping[typing.Any] = None,
  timeouts: ManifestTimeouts = None,
  wait: ManifestWait = None,
  wait_for: ManifestWaitFor = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.manifest">manifest</a></code> | <code>typing.Mapping[typing.Any]</code> | A Kubernetes manifest describing the desired state of the resource in HCL format. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.computedFields">computed_fields</a></code> | <code>typing.List[str]</code> | List of manifest fields whose values can be altered by the API server during 'apply'. Defaults to: ["metadata.annotations", "metadata.labels"]. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.fieldManager">field_manager</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a></code> | field_manager block. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.object">object</a></code> | <code>typing.Mapping[typing.Any]</code> | The resulting resource state, as returned by the API server after applying the desired state from `manifest`. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.wait">wait</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWait">ManifestWait</a></code> | wait block. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.waitFor">wait_for</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a></code> | A map of attribute paths and desired patterns to be matched. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.manifest"></a>

```python
manifest: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

A Kubernetes manifest describing the desired state of the resource in HCL format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#manifest Manifest#manifest}

---

##### `computed_fields`<sup>Optional</sup> <a name="computed_fields" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.computedFields"></a>

```python
computed_fields: typing.List[str]
```

- *Type:* typing.List[str]

List of manifest fields whose values can be altered by the API server during 'apply'. Defaults to: ["metadata.annotations", "metadata.labels"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#computed_fields Manifest#computed_fields}

---

##### `field_manager`<sup>Optional</sup> <a name="field_manager" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.fieldManager"></a>

```python
field_manager: ManifestFieldManager
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a>

field_manager block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#field_manager Manifest#field_manager}

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.object"></a>

```python
object: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

The resulting resource state, as returned by the API server after applying the desired state from `manifest`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#object Manifest#object}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.timeouts"></a>

```python
timeouts: ManifestTimeouts
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#timeouts Manifest#timeouts}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.wait"></a>

```python
wait: ManifestWait
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWait">ManifestWait</a>

wait block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#wait Manifest#wait}

---

##### `wait_for`<sup>Optional</sup> <a name="wait_for" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.waitFor"></a>

```python
wait_for: ManifestWaitFor
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a>

A map of attribute paths and desired patterns to be matched.

After each apply the provider will wait for all attributes listed here to reach a value that matches the desired pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#wait_for Manifest#wait_for}

---

### ManifestFieldManager <a name="ManifestFieldManager" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManager"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManager.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import manifest

manifest.ManifestFieldManager(
  force_conflicts: typing.Union[bool, IResolvable] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager.property.forceConflicts">force_conflicts</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Force changes against conflicts. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager.property.name">name</a></code> | <code>str</code> | The name to use for the field manager when creating and updating the resource. |

---

##### `force_conflicts`<sup>Optional</sup> <a name="force_conflicts" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManager.property.forceConflicts"></a>

```python
force_conflicts: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Force changes against conflicts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#force_conflicts Manifest#force_conflicts}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManager.property.name"></a>

```python
name: str
```

- *Type:* str

The name to use for the field manager when creating and updating the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#name Manifest#name}

---

### ManifestTimeouts <a name="ManifestTimeouts" id="@cdktf/provider-kubernetes.manifest.ManifestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.manifest.ManifestTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import manifest

manifest.ManifestTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts.property.create">create</a></code> | <code>str</code> | Timeout for the create operation. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts.property.delete">delete</a></code> | <code>str</code> | Timeout for the delete operation. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts.property.update">update</a></code> | <code>str</code> | Timeout for the update operation. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.manifest.ManifestTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Timeout for the create operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#create Manifest#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-kubernetes.manifest.ManifestTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Timeout for the delete operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#delete Manifest#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-kubernetes.manifest.ManifestTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Timeout for the update operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#update Manifest#update}

---

### ManifestWait <a name="ManifestWait" id="@cdktf/provider-kubernetes.manifest.ManifestWait"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.manifest.ManifestWait.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import manifest

manifest.ManifestWait(
  condition: typing.Union[IResolvable, typing.List[ManifestWaitCondition]] = None,
  fields: typing.Mapping[str] = None,
  rollout: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWait.property.condition">condition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>]]</code> | condition block. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWait.property.fields">fields</a></code> | <code>typing.Mapping[str]</code> | A map of paths to fields to wait for a specific field value. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWait.property.rollout">rollout</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Wait for rollout to complete on resources that support `kubectl rollout status`. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-kubernetes.manifest.ManifestWait.property.condition"></a>

```python
condition: typing.Union[IResolvable, typing.List[ManifestWaitCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>]]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#condition Manifest#condition}

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktf/provider-kubernetes.manifest.ManifestWait.property.fields"></a>

```python
fields: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of paths to fields to wait for a specific field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#fields Manifest#fields}

---

##### `rollout`<sup>Optional</sup> <a name="rollout" id="@cdktf/provider-kubernetes.manifest.ManifestWait.property.rollout"></a>

```python
rollout: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Wait for rollout to complete on resources that support `kubectl rollout status`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#rollout Manifest#rollout}

---

### ManifestWaitCondition <a name="ManifestWaitCondition" id="@cdktf/provider-kubernetes.manifest.ManifestWaitCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.manifest.ManifestWaitCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import manifest

manifest.ManifestWaitCondition(
  status: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition.property.status">status</a></code> | <code>str</code> | The condition status. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition.property.type">type</a></code> | <code>str</code> | The type of condition. |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-kubernetes.manifest.ManifestWaitCondition.property.status"></a>

```python
status: str
```

- *Type:* str

The condition status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#status Manifest#status}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-kubernetes.manifest.ManifestWaitCondition.property.type"></a>

```python
type: str
```

- *Type:* str

The type of condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#type Manifest#type}

---

### ManifestWaitFor <a name="ManifestWaitFor" id="@cdktf/provider-kubernetes.manifest.ManifestWaitFor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.manifest.ManifestWaitFor.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import manifest

manifest.ManifestWaitFor(
  fields: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor.property.fields">fields</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#fields Manifest#fields}. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktf/provider-kubernetes.manifest.ManifestWaitFor.property.fields"></a>

```python
fields: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/manifest#fields Manifest#fields}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManifestFieldManagerOutputReference <a name="ManifestFieldManagerOutputReference" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import manifest

manifest.ManifestFieldManagerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resetForceConflicts">reset_force_conflicts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_force_conflicts` <a name="reset_force_conflicts" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resetForceConflicts"></a>

```python
def reset_force_conflicts() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.forceConflictsInput">force_conflicts_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.forceConflicts">force_conflicts</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `force_conflicts_input`<sup>Optional</sup> <a name="force_conflicts_input" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.forceConflictsInput"></a>

```python
force_conflicts_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `force_conflicts`<sup>Required</sup> <a name="force_conflicts" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.forceConflicts"></a>

```python
force_conflicts: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.internalValue"></a>

```python
internal_value: ManifestFieldManager
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a>

---


### ManifestTimeoutsOutputReference <a name="ManifestTimeoutsOutputReference" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import manifest

manifest.ManifestTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: ManifestTimeouts
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a>

---


### ManifestWaitConditionList <a name="ManifestWaitConditionList" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import manifest

manifest.ManifestWaitConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManifestWaitConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ManifestWaitCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>]]

---


### ManifestWaitConditionOutputReference <a name="ManifestWaitConditionOutputReference" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import manifest

manifest.ManifestWaitConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_status` <a name="reset_status" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ManifestWaitCondition]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>]

---


### ManifestWaitForOutputReference <a name="ManifestWaitForOutputReference" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import manifest

manifest.ManifestWaitForOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.resetFields">reset_fields</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fields` <a name="reset_fields" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.resetFields"></a>

```python
def reset_fields() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.fieldsInput">fields_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.fields">fields</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.fieldsInput"></a>

```python
fields_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.fields"></a>

```python
fields: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ManifestWaitFor]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a>]

---


### ManifestWaitOutputReference <a name="ManifestWaitOutputReference" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import manifest

manifest.ManifestWaitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resetFields">reset_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resetRollout">reset_rollout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition` <a name="put_condition" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.putCondition"></a>

```python
def put_condition(
  value: typing.Union[IResolvable, typing.List[ManifestWaitCondition]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.putCondition.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>]]

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_fields` <a name="reset_fields" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resetFields"></a>

```python
def reset_fields() -> None
```

##### `reset_rollout` <a name="reset_rollout" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resetRollout"></a>

```python
def reset_rollout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList">ManifestWaitConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.conditionInput">condition_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.fieldsInput">fields_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.rolloutInput">rollout_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.fields">fields</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.rollout">rollout</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWait">ManifestWait</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.condition"></a>

```python
condition: ManifestWaitConditionList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList">ManifestWaitConditionList</a>

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.conditionInput"></a>

```python
condition_input: typing.Union[IResolvable, typing.List[ManifestWaitCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>]]

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.fieldsInput"></a>

```python
fields_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `rollout_input`<sup>Optional</sup> <a name="rollout_input" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.rolloutInput"></a>

```python
rollout_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.fields"></a>

```python
fields: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `rollout`<sup>Required</sup> <a name="rollout" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.rollout"></a>

```python
rollout: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.internalValue"></a>

```python
internal_value: ManifestWait
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWait">ManifestWait</a>

---



